using ElixirWeekend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElixirWeekend.Repository.Interfaces
{
    interface IApotekaRepozitorijum
    {
        public ICollection<Proizvod> GetProizvodi();

    }
}
