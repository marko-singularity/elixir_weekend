using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElixirWeekend.Models
{
    public class Pharmacy
    {
        public int Id { get; set; }
        public string Jib { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Telephone { get; set; }



        public bool Active { get; set; } = true;

    }
}
