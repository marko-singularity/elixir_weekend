using ElixirWeekend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElixirWeekend.Repository
{
    public class BazaPodataka:DbContext
    {
        public DbSet<Apoteka> Apoteke { get; set; }
        public DbSet<Klijent> Klijenti { get; set; }
        public DbSet<Narudzba> Narudzbe { get; set; }
        public DbSet<Osoba> Osobe { get; set; }
        public DbSet<Proizvod> Proizvodi { get; set; }
        public DbSet<ProizvodiNarudzbe> ProizvodiNarudzbe { get; set; }
        public DbSet<TipProizvoda> TipoviProizvoda { get; set; }
        public DbSet<Volonter> Volonteri { get; set; }




    }
}
