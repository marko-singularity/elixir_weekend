using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElixirWeekend.Models
{
    public class Order
    {
        public int Id { get; set; }
        public DateTime OrderedAt { get; set; }
        public DateTime PrescriptionReceivedAt { get; set; }
        public DateTime ProductIssuedAt { get; set; }
        public DateTime ProductHandoveredAt { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Volunteer Volunteer { get; set; }
        public virtual ICollection<SoldProduct> SoldProducts { get; set; }

     
    }
}
