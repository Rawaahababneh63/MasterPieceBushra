﻿using Masterpiece.Models;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Threading.Tasks;
using Masterpiece.DTO;
using DinkToPdf.Contracts;
using DinkToPdf;
using System.Text.Json.Serialization;
using System.Text.Json;
using Newtonsoft.Json;

using JsonSerializer = System.Text.Json.JsonSerializer;
using Masterpiece;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        builder.Services.AddControllers();

        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        builder.Services.AddScoped<PayPalPaymentService>();
        // Configure CORS
        builder.Services.AddCors(option =>
            option.AddPolicy("Development", builder =>
            {
                // Allow any origin, method, and header
                builder.AllowAnyOrigin();
                builder.AllowAnyMethod();
                builder.AllowAnyHeader();
            })
        );
      
        // Configure the database context with SQL Server
        builder.Services.AddDbContext<MyDbContext>(options =>
            options.UseSqlServer(builder.Configuration.GetConnectionString("YourConnectionString")));

        // Add JWT Token Generator as a service (Singleton or Transient)
        //builder.Services.AddSingleton<Masterpiece.TokenGenerator>();
            builder.Services.AddSingleton<TokenGenerator>();
        // Read JWT settings from appsettings.json
        var jwtSettings = builder.Configuration.GetSection("Jwt");
        var key = jwtSettings.GetValue<string>("Key");
        var issuer = jwtSettings.GetValue<string>("Issuer");
        var audience = jwtSettings.GetValue<string>("Audience");

        if (string.IsNullOrEmpty(key) || string.IsNullOrEmpty(issuer) || string.IsNullOrEmpty(audience))
        {
            throw new InvalidOperationException("JWT settings are not properly configured.");
        }

        // Configure JWT Authentication
        builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
       .AddJwtBearer(options =>
       {
           options.TokenValidationParameters = new TokenValidationParameters
           {
               ValidateIssuer = true,
               ValidateAudience = true,
               ValidateLifetime = true,
               ValidateIssuerSigningKey = true,
               ValidIssuer = issuer,
               ValidAudience = audience,
               IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key))
           };
       });


        // Configure Authorization
        builder.Services.AddAuthorization(options =>
        {
            options.AddPolicy("Admin", policy => policy.RequireRole("Admin"));
        });


        var options = new JsonSerializerOptions
        {
            MaxDepth = 64, // يمكنك ضبط العمق حسب الحاجة
            ReferenceHandler = ReferenceHandler.Preserve, // يسمح بالتعامل مع الدورات في JSON
            WriteIndented = true
        };
        builder.Services.Configure<JsonSerializerOptions>(opts =>
        {
            opts.MaxDepth = 64;
            opts.ReferenceHandler = ReferenceHandler.Preserve;
            opts.WriteIndented = true;
        });





        // Register Email Service
        builder.Services.AddScoped<IEmailService, EmailService>();



    







        // Configure AutoMapper
        builder.Services.AddAutoMapper(typeof(Program));



        builder.Services.AddSingleton<IConverter, SynchronizedConverter>(provider =>
    new SynchronizedConverter(new PdfTools()));

        var app = builder.Build();
        // Enable CORS
        app.UseCors("Development");
        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }
        app.UseStaticFiles();
        app.UseHttpsRedirection();

        // Enable authentication and authorization
        app.UseAuthentication();
        app.UseAuthorization();

        // Map the controllers
        app.MapControllers();

        app.Run();
    }
}
