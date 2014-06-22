using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OrebroStudentkar2.Controllers
{
    public class ForeningController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult UF() 
        {
            return View(); 
        }
        public ActionResult Startkit()
        {
            return View();
        }
    }
}
