// ForumsController.cs
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Assignment2.Model2;
using Assignment2.ViewModels;
namespace Assignment2.Controllers
{
    public class ForumsController : Controller
    {
        private ForumsEntities db = new ForumsEntities();

        public ActionResult ShowForums()
        {
            var viewModel = new ForumViewModel
            {
                Forums = db.Forums.Include("Images").ToList(),
                Comments = db.Images.ToList()
            };

            return View(viewModel);
        }

        public ActionResult CreateForum()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult CreateForum(Forums forum, HttpPostedFileBase AvatarFile)
        {
            if (forum == null)
            {
                forum = new Forums();
            }

            if (ModelState.IsValid)
            {
                if (AvatarFile != null && AvatarFile.ContentLength > 0)
                {
                    using (var memoryStream = new MemoryStream())
                    {
                        AvatarFile.InputStream.CopyTo(memoryStream);
                        forum.Avatar = memoryStream.ToArray();
                    }
                }

                db.Forums.Add(forum);
                db.SaveChanges();

                return RedirectToAction("ShowForums");
            }

            return View(forum);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteForum(int id)
        {
            var forum = db.Forums.Find(id);
            if (forum != null)
            {
                db.Forums.Remove(forum);
                db.SaveChanges();
            }

            return RedirectToAction("ShowForums");
        }

        public ActionResult ShowComments()
        {
            var comments = db.Images.Include("Forums").ToList();

            foreach (var comment in comments)
            {
                if (comment.Forums != null)
                {
                    comment.ForumTitle = comment.Forums.Title;
                }
            }

            return View(comments);
        }


        public ActionResult CreateComment()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult CreateComment(Images comment, HttpPostedFileBase ImageFile)
        {
            if (comment == null)
            {
                comment = new Images();
            }

            if (ModelState.IsValid)
            {
                if (ImageFile != null && ImageFile.ContentLength > 0)
                {
                    using (var memoryStream = new MemoryStream())
                    {
                        ImageFile.InputStream.CopyTo(memoryStream);
                        comment.ImageData = memoryStream.ToArray();
                    }
                }

                db.Images.Add(comment);
                db.SaveChanges();

                return RedirectToAction("ShowComments");
            }

            return View(comment);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteComment(int id)
        {
            var comment = db.Images.Find(id);
            if (comment != null)
            {
                db.Images.Remove(comment);
                db.SaveChanges();
            }

            return RedirectToAction("ShowComments");
        }
    }
}
