# elixir_weekend setup
Nase rijesenje se sastoji od web API-a radjenog u .NET Core tehnologiji. Koristeni DBMS je MySQL. Za frontend je koristen ReactJS.
Skup entiteta u bazi podataka je: Korisnik, Proizvod, Apoteka, Narudzba, TipProizvoda, Volonter, Narucilac.
Napravljen je RESTful skup servisa koji omogucavaju skup osnovnih operacija nad navedenim tabelama.
Na frontendu trenutno imamo 3 stranice a to su: 
Landing Page(login i registracija)
Artikli(pretraga i narucivanje)
Narudzba(pregled trenutne narudzbe)

Za pokretanje aplikacije neophodno je pokrenuti sljedece komande u terminalu VS Code ili VS okruzenja:
npm install
npm start
