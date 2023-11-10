using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Assignment2.Models
{
    public class user
    {
        private int id;
        private string username;
        private string password;
        private string email;   
        private string address;
        private string mobile;
        private string name;
        private int state;

        public user(string username, string password)
        {
            this.username = username;
            this.password = password;
        }

        public user(string username, string password, string email, int state) : this(username, password)
        {
            this.email = email;
            this.state = state;
        }

        public int Id { get => id; set => id = value; }
        public string Username { get => username; set => username = value; }
        public string Password { get => password; set => password = value; }
        public string Email { get => email; set => email = value; }
        public string Address { get => address; set => address = value; }
        public string Mobile { get => mobile; set => mobile = value; }
        public string Name { get => name; set => name = value; }
        public int State { get => state; set => state = value; }
    }
}