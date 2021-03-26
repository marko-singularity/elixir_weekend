using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElixirWeekend.Models
{
    public class Proizvod
    {
        public int Id { get; set; }
        public string Sifra { get; set; }
        public string Naziv { get; set; }
        public bool Dostupan { get; set; }
        public bool Recept { get; set; }
        public string UrlSlike { get; set; }
        public bool Obrisan { get; set; } = false;
        public float Kolicina { get; set; }
        public string JedinicaMjere { get; set; }
        public float Cijena { get; set; }
        public virtual Apoteka Apoteka { get; set; }
        public virtual TipProizvoda TipProizvoda { get; set; }

    }
}
