using ElixirWeekend.Models;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElixirWeekend.Repository
{
    public class Database:DbContext
    {

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql("server=localhost;database=elixir_weekend;user=root;password=root", new MySqlServerVersion(new Version(8, 0, 20)), mySqlOptions => mySqlOptions.CharSetBehavior(CharSetBehavior.NeverAppend));
        }

        public DbSet<Pharmacy> Pharmacies { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Person> Persons { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<SoldProduct> SoldProducts { get; set; }
        public DbSet<ProductType> ProductTypes { get; set; }
        public DbSet<Volunteer> Volunteers { get; set; }




    }
}
