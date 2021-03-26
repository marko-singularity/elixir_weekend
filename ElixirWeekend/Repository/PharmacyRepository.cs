using ElixirWeekend.Models;
using ElixirWeekend.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElixirWeekend.Repository
{
    public class PharmacyRepository : IPharmacyRepository
    {
        public Database database;

        public PharmacyRepository(Database database)
        {
            this.database = database;
        }
        public ICollection<Product> GetProducts()
        {
            return database.Products.Where(p => p.Active == true).ToList();
        }
    }
}
