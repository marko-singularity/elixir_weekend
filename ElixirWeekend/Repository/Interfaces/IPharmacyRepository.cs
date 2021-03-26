using ElixirWeekend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElixirWeekend.Repository.Interfaces
{
    interface IPharmacyRepository
    {
        public ICollection<Product> GetProducts();

    }
}
