using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElixirWeekend.Models
{
    public class Narudzba
    {
        public int Id { get; set; }
        public DateTime DatumNarudzbe { get; set; }
        public DateTime DatumPreuzimanjaRecepta { get; set; }
        public DateTime DatumIzdavanjaProizvoda{ get; set; }
        public DateTime DatumPredajeProizvoda { get; set; }

        public virtual Klijent Klijent { get; set; }
        public virtual Volonter Volonter { get; set; }
        public virtual ICollection<ProizvodiNarudzbe> ProizvodiNarudzbe { get; set; }

     
    }
}
