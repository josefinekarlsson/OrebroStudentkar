﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OrebroStudentkar1.Controllers
{
    public class UtbildningController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Utbildningsbevakning()
        {
            return View();
        }
        public ActionResult Studentombud()
        {
            return View();
        }
        public ActionResult VanligaFragor()
        {
            return View();
        }
    }
}
