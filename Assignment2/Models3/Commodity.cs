//------------------------------------------------------------------------------
// <auto-generated>
//     此代码已从模板生成。
//
//     手动更改此文件可能导致应用程序出现意外的行为。
//     如果重新生成代码，将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace Assignment2.Models3
{
    using System;
    using System.Collections.Generic;
    
    public partial class Commodity
    {
        public int Id { get; set; }
        public string ItemNames { get; set; }
        public string Category { get; set; }
        public Nullable<double> Price { get; set; }
        public string Description { get; set; }
        public byte[] Image { get; set; }
    }
}