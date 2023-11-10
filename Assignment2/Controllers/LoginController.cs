using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Assignment2.Models;



namespace Assignment2.Controllers
{
    public class LoginController : Controller
    {
        private LoginUserEntities db = new LoginUserEntities();
        public ActionResult indexback()
        {
          
            return View();
        }


        [HttpPost]
        public ActionResult indexback(string username, string password, string captcha)
        {
            if (string.IsNullOrEmpty(username))
            {
                ViewBag.error = "User name cannot be empty";
            }
            else if (string.IsNullOrEmpty(password))
            {
                ViewBag.error = "Password cannot be empty";
            }
            else if (string.IsNullOrEmpty(captcha))
            {
                ViewBag.error = "The verification code cannot be empty";

            }
            else
            {
                LoginUser u = db.LoginUser.FirstOrDefault(p => p.username == username && p.password == password && captcha =="6D3J" );
                if (u != null)
                {
                    
                    return RedirectToAction("Index", "Home");
                }
                else if (captcha != "6D3J")
                {
                    ViewBag.error = "Verification code error";
                }
                else
                {
                    ViewBag.error = "Incorrect username or password";
                }

            }
            return View();
        }
        public ActionResult Register()
        {
            return View();
        }

        // POST: 处理注册表单提交
        [HttpPost]
        public ActionResult Register(string email, string username, string password, string confirmPassword)
        {
            if (password != confirmPassword)
            {
                ViewBag.Error = "The password and confirmation password do not match";
               
            }
            LoginUser u = db.LoginUser.FirstOrDefault(p => p.username == username );
            if (u != null)
            {
                ViewBag.error = "The username already exists, please register again";

            }
            else
            {
                var newUser = new LoginUser
                {

                    username = username,
                    password = password,
                    email = email,
                    state = 1

                };

                db.LoginUser.Add(newUser);
                db.SaveChanges();
                ViewBag.p = "Registration successful, please log in again";
                // 注册成功，重定向到登录页或其他页
                return RedirectToAction("indexback", "Login");
            }
            return View();

        }
    }
}