using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Assignment2.Models;
using Assignment2.Models3;
namespace Assignment2.Controllers
{
    public class HomeController : Controller
         
    {
        private LoginUserEntities db = new LoginUserEntities();
        private CommodityListEntities db2 = new CommodityListEntities(); // 使用相同的实体

        public ActionResult Index()
        {
            var commodities = db2.Commodity.ToList(); // 获取所有商品

            // 确保视图存在，且命名正确，例如：Index.cshtml
            return View(commodities);
        }
        public ActionResult DisplayImage(int id)
        {
            var commodity = db2.Commodity.Find(id);
            if (commodity != null && commodity.Image != null)
            {
                return File(commodity.Image, "image/png"); // 根据图像实际的格式设置MIME类型
            }
            else
            {
                return new HttpNotFoundResult();
            }
        }

        public ActionResult About()
        {
            ViewBag.Message = "On the Way is a comprehensive travel platform dedicated to providing a wealth of travel information, resources, and community interaction. <br/><br/> It features a diverse array of travel magazines rich with articles and stunning photography to inspire wanderlust. <br/><br/> The website also offers a curated selection of travel-related products, from essential gear to unique souvenirs, catering to the needs of travelers looking to equip themselves for their next adventure. <br/><br/> Additionally, On the Way hosts a dedicated forum where users can share their own experiences, upload photos, and engage in discussions about their travels, tips, and stories, fostering a vibrant community of travel enthusiasts.";
            return View();
        }


        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult UserList()

        {
            ViewBag.ulist = db.LoginUser.ToList();
            return View();
        }
    }
}