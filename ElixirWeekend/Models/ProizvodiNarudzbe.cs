using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElixirWeekend.Models
{
    public class ProizvodiNarudzbe
    {
        public int Id { get; set; }
        public int Kolicina { get; set; }

        public float Cijena { get; set; }
        public virtual Proizvod Proizvod { get; set; }
        public virtual Narudzba Narudzba { get; set; }

    }
}
