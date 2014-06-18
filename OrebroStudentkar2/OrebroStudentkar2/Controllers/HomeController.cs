using OrebroStudentkar2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OrebroStudentkar1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult KontaktaOss()
        {

            return View();
        }
        
        [HttpPost]
        public ActionResult KontaktaOss(ContactModel model)
        {
            if(ModelState.IsValid)
            {
                TempData["notice"] = "Tack för ditt meddelande! Vi kollar och besvarar dessa under våra öppettider."; 
                return RedirectToAction("KontaktaOss", "Home");
            }
            else
            {
                return View(); 
            }
            
        }

        public ActionResult Kalender()
        {
            return View();
        }
    }
}
