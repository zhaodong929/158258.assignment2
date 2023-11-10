using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

// ForumViewModel.cs
namespace Assignment2.ViewModels
{
    using System.Collections.Generic;
    using Assignment2.Model2;

    public class ForumViewModel
    {
        public List<Forums> Forums { get; set; }
        public List<Images> Comments { get; set; }
    }
}
