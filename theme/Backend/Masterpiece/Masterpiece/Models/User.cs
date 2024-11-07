using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Masterpiece.Models;

public partial class User
{
    public int UserId { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? UserName { get; set; }

    public string? Email { get; set; }

    public string? PhoneNumber { get; set; }

    public string? Image { get; set; }

    public string? Password { get; set; }

    public byte[]? PasswordHash { get; set; }

    public byte[]? PasswordSalt { get; set; }

    public string? Address { get; set; }

    public int? Points { get; set; }

    public string? Gender { get; set; }
    [JsonIgnore]
    public virtual Cart? Cart { get; set; }
    [JsonIgnore]
    public virtual ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();
    [JsonIgnore]
    public virtual ICollection<Comment> Comments { get; set; } = new List<Comment>();
    [JsonIgnore]
    public virtual ICollection<Negotiation> Negotiations { get; set; } = new List<Negotiation>();
    [JsonIgnore]
    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();
    [JsonIgnore]
    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();
    [JsonIgnore]
    public virtual ICollection<SaleRequest> SaleRequests { get; set; } = new List<SaleRequest>();
}
