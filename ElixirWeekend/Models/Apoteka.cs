using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElixirWeekend.Models
{
    public class Apoteka
    {
        public int Id { get; set; }
        public string Naziv { get; set; }
        public string Adresa { get; set; }
        public string Telefon { get; set; }
        public bool Obrisan { get; set; } = false;

    }
}
