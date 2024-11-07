//using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Masterpiece.DTO;
using Masterpiece.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using MimeKit;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace Masterpiece.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly MyDbContext _db;
        private readonly TokenGenerator _tokenGenerator;
        private readonly ILogger<UsersController> _logger;

        public UsersController(MyDbContext db, TokenGenerator tokenGenerator, ILogger<UsersController> logger)
        {
            _db = db;
            _tokenGenerator = tokenGenerator;
            _logger = logger; 
        }


        [ProducesResponseType(200, Type = typeof(User))]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(500)]
        [ProducesResponseType(404)]
        [HttpPost("register")]
        public IActionResult AddPassword([FromForm] UserRegisterDTO userdto)
        {
            byte[] passwordHash, passwordSalt;
         
            PasswordHasherNew.createPasswordHash(userdto.Password, out passwordHash, out passwordSalt);


            var user = new User
            {
                Email = userdto.Email,
                Password = userdto.Password,
                UserName = userdto.UserName,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt
            };

            _db.Users.Add(user); 
            _db.SaveChanges();

            var userCart = new Cart
            {
                UserId = user.UserId,
            };

            _db.Carts.Add(userCart);
            _db.SaveChanges();

     
            return Ok(user);
        }
        [HttpPost]
        [Route("login")]
        public IActionResult Login([FromForm] UserLoginDTO model)
        {
            try
            {
                if (model == null || string.IsNullOrEmpty(model.Email) || string.IsNullOrEmpty(model.Password))
                {
                    return BadRequest("Email and password are required.");
                }

                // تسجيل البريد الإلكتروني وكلمة المرور المدخلة
                _logger.LogInformation($"Attempting login for email: {model.Email}");

                // التحقق من أن المستخدم هو مشرف
                var admin = _db.Admins.FirstOrDefault(x => x.Email == model.Email);
                if (admin != null)
                {
                    bool isPasswordValid = PasswordHasherNew.VerifyPasswordHash(model.Password, admin.PasswordHash, admin.PasswordSalt);
                    _logger.LogInformation($"Admin password valid: {isPasswordValid}");
                    if (isPasswordValid)
                    {
                        var token = _tokenGenerator.GenerateToken(admin.Email);
                        return Ok(new { Token = token, AdminId = admin.AdminId });
                    }
                }

                // إذا لم يكن مشرفًا، تحقق من المستخدم العادي
                var user = _db.Users.FirstOrDefault(x => x.Email == model.Email);
                if (user != null)
                {
                    bool isPasswordValid = PasswordHasherNew.VerifyPasswordHash(model.Password, user.PasswordHash, user.PasswordSalt);
                    _logger.LogInformation($"User password valid: {isPasswordValid}");
                    if (isPasswordValid)
                    {
                        var token = _tokenGenerator.GenerateToken(user.Email);
                        return Ok(new { Token = token, UserId = user.UserId });
                    }
                }

                return Unauthorized("Invalid username or password.");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while logging in.");
                return StatusCode(500, "Internal server error.");
            }
        }










        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _db.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromForm] UserUpdateModel updateUser)
        {

            var user = await _db.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }


            bool isUpdated = false;


            if (!string.IsNullOrEmpty(updateUser.FirstName) && updateUser.FirstName != user.FirstName)
            {
                user.FirstName = updateUser.FirstName;
                isUpdated = true;
            }

            if (!string.IsNullOrEmpty(updateUser.LastName) && updateUser.LastName != user.LastName)
            {
                user.LastName = updateUser.LastName;
                isUpdated = true;
            }

            if (!string.IsNullOrEmpty(updateUser.UserName) && updateUser.UserName != user.UserName)
            {
                user.UserName = updateUser.UserName;
                isUpdated = true;
            }

            if (!string.IsNullOrEmpty(updateUser.Email) && updateUser.Email != user.Email)
            {
                user.Email = updateUser.Email;
                isUpdated = true;
            }

            if (!string.IsNullOrEmpty(updateUser.PhoneNumber) && updateUser.PhoneNumber != user.PhoneNumber)
            {
                user.PhoneNumber = updateUser.PhoneNumber;
                isUpdated = true;
            }

            if (!string.IsNullOrEmpty(updateUser.Address) && updateUser.Address != user.Address)
            {
                user.Address = updateUser.Address;
                isUpdated = true;
            }



            if (!string.IsNullOrEmpty(updateUser.Gender) && updateUser.Gender != user.Gender)
            {
                user.Gender = updateUser.Gender;
                isUpdated = true;
            }


            if (updateUser.Image != null)
            {
                user.Image = updateUser.Image.FileName;
                var ImagesFolder = Path.Combine(Directory.GetCurrentDirectory(), "Uploads");
                if (!Directory.Exists(ImagesFolder))
                {
                    Directory.CreateDirectory(ImagesFolder);
                }
                var imageFile = Path.Combine(ImagesFolder, updateUser.Image.FileName);


                using (var stream = new FileStream(imageFile, FileMode.Create))
                {
                    await updateUser.Image.CopyToAsync(stream);
                }
                isUpdated = true;
            }


            if (!isUpdated)
            {
                return Ok(user);
            }

            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }



        private bool UserExists(long id)
        {
            return _db.Users.Any(e => e.UserId == id);


        }




        [HttpGet("GetALLUsersaa")]
        public IActionResult GetAllUserNow()
        {
            var users = _db.Users.ToList();
            return Ok(users);
        }

        ///////////////////////for get all user information
        ///

        [HttpGet("UserDetails/{userId}")]
        public IActionResult GetUserDetails(int userId)
        {
            var user = _db.Users
                .Where(u => u.UserId == userId)
                .Select(u => new
                {
                    u.UserId,
                    u.FirstName,
                    u.LastName,
                    u.UserName,
                    u.Email,
                    u.PhoneNumber,
                    u.Address,
                    u.Gender,
                    u.Points,
                    u.Image,
                    Orders = u.Orders.Select(o => new
                    {
                        o.OrderId,
                        o.Status,
                        o.Amount,
                        o.Date
                    }).ToList(),
                    CartItems = u.CartItems.Select(ci => new
                    {
                        ci.Product.Name,
                        ci.Quantity,
                        ci.Product.Price
                    }).ToList(),
                    Comments = u.Comments.Select(c => new
                    {
                        c.CommentId,
                        c.Comment1,
                        c.Date,
                    }).ToList(),
                 
                    Payments = u.Payments.Select(p => new
                    {
                        p.PaymentId,
                        p.Amount,
                        p.PaymentDate,
                        p.PaymentStatus
                    }).ToList(),
                    SaleRequests = u.SaleRequests.Select(sr => new
                    {
                        sr.RequestId,
                        sr.Product,
                        sr.RequestDate,
                        sr.Status
                    }).ToList()
                })
                .FirstOrDefault();

            if (user == null)
            {
                return NotFound(new { message = "User not found" });
            }

            return Ok(user);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            
            var user = await _db.Users.Include(u => u.Cart).FirstOrDefaultAsync(u => u.UserId == id);

            if (user == null)
            {
                return NotFound();
            }

       
            if (user.Cart != null)
            {
                _db.Carts.Remove(user.Cart);
            }

     
            _db.Users.Remove(user);

            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
               
                return StatusCode(StatusCodes.Status500InternalServerError, "حدث خطأ أثناء حذف المستخدم.");
            }

            return NoContent();
        }


        [HttpPost("admin/register")]
        [ProducesResponseType(200, Type = typeof(Admin))] // استبدل Admin بالنموذج الذي تستخدمه
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult RegisterAdmin([FromForm] AdminRegisterDTO adminDto)
        {
            byte[] passwordHash, passwordSalt;

            // إنشاء هاش وكلمة مرور ملح
            PasswordHasherNew.createPasswordHash(adminDto.Password, out passwordHash, out passwordSalt);

            var admin = new Admin
            {
                Email = adminDto.Email,
               
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt
            };

            _db.Admins.Add(admin);
            _db.SaveChanges();

            return Ok(admin); // أو يمكنك إرجاع كائن أخر حسب الحاجة
        }


        [HttpPost("ForgotPassword")]
        public async Task<IActionResult> ForgotPassword([FromBody] string email)
        {
            var user = _db.Users.FirstOrDefault(u => u.Email == email);
            if (user != null)
            {
                // Store user ID and OTP in session
                //HttpContext.Session.SetInt32("UserID", user.UserId);

                // Generate a random OTP
                Random rand = new Random();
                string otp = rand.Next(100000, 1000000).ToString();
                //HttpContext.Session.SetString("otp", otp);

                // Prepare email content
                string fromEmail = "teamorange077@gmail.com";
                string fromName = "Support Team";
                string subjectText = "Your OTP Code";
                string messageText = $@"
<html>
<body dir='rtl'>
    <h2>Hello {user.UserName}</h2>
    <p><strong>Your OTP code is {otp}. This code is valid for a short period of time.</strong></p>
    <p>If you have any questions or need additional assistance, please feel free to contact our support team.</p>
    <p>Best wishes,<br>Support Team</p>
</body>
</html>";

                try
                {
                    // Send email using MailKit
                    var message = new MimeMessage();
                    message.From.Add(new MailboxAddress(fromName, fromEmail));
                    message.To.Add(new MailboxAddress("", user.Email));
                    message.Subject = subjectText;
                    message.Body = new TextPart("html") { Text = messageText };

                    using (var client = new MailKit.Net.Smtp.SmtpClient())
                    {
                        await client.ConnectAsync("smtp.gmail.com", 465, true);
                        await client.AuthenticateAsync("teamorange077@gmail.com", "eeag ombb timb wjil");
                        await client.SendAsync(message);
                        await client.DisconnectAsync(true);
                    }

                    return Ok(new { otp, user.UserId });
                }
                catch (Exception ex)
                {
                    return StatusCode(500, new { Message = "Failed to send email. Please try again later.", Error = ex.Message });
                }
            }
            else
            {
                return NotFound(new { Message = "Email not found." });
            }

        }
        [HttpPost("SetNewPassword")]
        public IActionResult SetNewPassword([FromBody] SetNewPasswordDto model)
        {
            var user = _db.Users.Find(model.UserId);
            if (user == null)
            {
                return NotFound(new { Message = "User not found." });
            }

            byte[] passwordHash, passwordSalt;
            PasswordHasherNew.createPasswordHash(model.NewPassword, out passwordHash, out passwordSalt);
            user.Password = model.NewPassword;
            user.PasswordSalt = passwordSalt;
            user.PasswordHash = passwordHash;
            _db.Entry(user).State = EntityState.Modified;
            _db.SaveChanges();

            return Ok(new { Message = "تم تغيير كلمة المرور بنجاح." });
        }
















    }
}







//[HttpGet("login")]
//public IActionResult Login()
//{
//    var props = new AuthenticationProperties { RedirectUri = "account/signin-google" };
//    return Challenge(props, GoogleDefaults.AuthenticationScheme);
//}
//[HttpGet("signin-google")]
//public async Task<IActionResult> GoogleLogin()
//{
//    var response = await HttpContext.AuthenticateAsync(CookieAuthenticationDefaults.AuthenticationScheme);
//    if (response.Principal == null) return BadRequest();

//    var name = response.Principal.FindFirstValue(ClaimTypes.Name);
//    var givenName = response.Principal.FindFirstValue(ClaimTypes.GivenName);
//    var email = response.Principal.FindFirstValue(ClaimTypes.Email);
//    Do something with the claims
//     var user = await UserService.FindOrCreate(new { name, givenName, email });

//    return Ok();
//}

