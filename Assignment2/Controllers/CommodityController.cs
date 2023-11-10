using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Assignment2.Models3;
using System.IO;
using System.Data.Entity;
using PagedList;
namespace Assignment2.Controllers
{
   
    public class CommodityController : Controller
    {
        private CommodityListEntities db = new CommodityListEntities(); 



        [HttpGet]
        public ActionResult UploadImage()
        {
            return View();
        }

        [HttpPost]
        public ActionResult UploadImage(int commodityId, HttpPostedFileBase fileUpload)
        {
            if (fileUpload != null && fileUpload.ContentLength > 0)
            {
                // 获取文件的字节
                var imageStream = fileUpload.InputStream;
                byte[] imageBytes = new byte[fileUpload.ContentLength];
                imageStream.Read(imageBytes, 0, imageBytes.Length);

                // 找到对应ID的商品
                var commodity = db.Commodity.Find(commodityId);
                if (commodity != null)
                {
                    // 更新商品的图片
                    commodity.Image = imageBytes;

                    // 保存更改到数据库
                    db.Entry(commodity).State = EntityState.Modified;
                    db.SaveChanges();

                    // 重定向到商品列表视图
                    return RedirectToAction("Display");
                }
                else
                {
                    ViewBag.Error = "No commodity found with the given ID.";
                }
            }

            return View();
        }


        
        public ActionResult Display(string search, string sortBy, string categoryFilter, int? page)
        {
            ViewBag.CurrentSearch = search;
            ViewBag.CurrentSort = sortBy;
            ViewBag.CurrentCategoryFilter = categoryFilter;

            // Debugging: Check if the 'search' parameter receives the value.
            System.Diagnostics.Debug.WriteLine("Search Query: " + search);
            // 确保Categories不为空
            if (ViewBag.Categories == null || !ViewBag.Categories.Any())
            {
                ViewBag.Categories = new List<SelectListItem> { new SelectListItem { Value = "", Text = "All Categories" } };
            }
            var commodities = db.Commodity.Where(c => c.Id > 0); // 默认获取所有ID大于0的商品
                                                                 // 初始化Categories
            ViewBag.Categories = db.Commodity
                .Where(c => c.Id > 0 && c.Category != null) // 过滤掉ID为0或Category为null的记录
                .Select(c => c.Category)
                .Distinct()
                .OrderBy(c => c)
                .ToList()
                .Select(x => new SelectListItem { Value = x, Text = x }).ToList();
            

            //// 添加一个"All Categories"选项
            //ViewBag.Categories.Insert(0, new SelectListItem { Value = "", Text = "All Categories" });


            // 搜索
            if (!string.IsNullOrEmpty(search))
            {
                commodities = commodities.Where(c => c.ItemNames.Contains(search));
               

            }
            // Debugging: Check the count before pagination.
            System.Diagnostics.Debug.WriteLine("Commodities Count: " + commodities.Count());

            // 过滤
            if (!string.IsNullOrEmpty(categoryFilter))
            {
                commodities = commodities.Where(c => c.Category.Equals(categoryFilter));
            }

            // 排序
            switch (sortBy)
            {
                case "PriceDesc":
                    commodities = commodities.OrderByDescending(c => c.Price);
                    break;
                case "Price":
                    commodities = commodities.OrderBy(c => c.Price);
                    break;
                default:
                    commodities = commodities.OrderBy(c => c.Id); // 默认按ID排序
                    break;
            }

            int pageSize = 5; // 设置每页5个商品
            int pageNumber = (page ?? 1); // 设置页码，如果为空则为第一页

            return View(commodities.ToPagedList(pageNumber, pageSize));
           
        }
        

        public ActionResult DisplayImage(int id)
        {
            var commodity = db.Commodity.Find(id);
            if (commodity != null && commodity.Image != null)
            {
                return File(commodity.Image, "image/png"); // 根据图像实际的格式设置MIME类型
            }
            else
            {
                return new HttpNotFoundResult();
            }
        }



    }

}