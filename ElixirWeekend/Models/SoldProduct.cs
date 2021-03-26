using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElixirWeekend.Models
{
    public class SoldProduct
    {
        public int Id { get; set; }
        public int Quantity { get; set; }

        public float Price { get; set; }
        public virtual Product Product { get; set; }
        public virtual Order Order { get; set; }

    }
}
