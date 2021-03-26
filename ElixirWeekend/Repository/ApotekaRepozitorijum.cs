using ElixirWeekend.Models;
using ElixirWeekend.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElixirWeekend.Repository
{
    public class ApotekaRepozitorijum : IApotekaRepozitorijum
    {
        public BazaPodataka bazaPodataka;

        public ApotekaRepozitorijum(BazaPodataka bazaPodataka)
        {
            this.bazaPodataka = bazaPodataka;
        }
        public ICollection<Proizvod> GetProizvodi()
        {
            return bazaPodataka.Proizvodi.Where(p => p.Obrisan == false).ToList();
        }
    }
}
