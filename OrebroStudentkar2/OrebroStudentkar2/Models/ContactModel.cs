using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace OrebroStudentkar2.Models
{
    public class ContactModel 
    {
        [Required(ErrorMessage="*")]
        public string Name { get; set; }
        [Required(ErrorMessage = "*")]
        [RegularExpression(@".*@.*", ErrorMessage="Du måste ange en giltig e-postadress.")]
        public string Email { get; set; }
        [Required(ErrorMessage = "*")]
        public string Subject { get; set; }
        [Required(ErrorMessage = "*")]
        public string Message { get; set; }
    }
}