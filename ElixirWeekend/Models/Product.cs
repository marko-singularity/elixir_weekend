using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElixirWeekend.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public bool Available { get; set; }
        public bool PrescriptionNeeded { get; set; }
        public string ImageUrl { get; set; }
        public float Price { get; set; }

        public float Quantity { get; set; }
        public string MeausurementUnit { get; set; }

        public virtual Pharmacy Pharmacy { get; set; }
        public virtual ProductType ProductType { get; set; }

         
        public bool Active { get; set; } = false;
    }
}
