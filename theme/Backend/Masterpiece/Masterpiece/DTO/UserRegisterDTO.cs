using Masterpiece.Models;
using System.ComponentModel.DataAnnotations;

namespace Masterpiece.DTO
{
    public class UserRegisterDTO
    {



        [Required]
        public string? UserName { get; set; }
        [Required]
        public string? Email { get; set; }

   
        [Required]
        public string? Password { get; set; }

        public string? ConfirmPassword { get; set; }



    }
}
