import React from "react";
import { Link } from "react-router-dom";
import { StyledVjezba } from "../../Styles/Vjezba.style";

const stil1 = {
  fontSize: "24pt",
  color: "silver",
  fontFamily: "FSTimesRom",
};

const stil2 = {
  fontSize: "12pt",
  color: "yellow",
  fontFamily: "FSTimesRom",
};

const stil3 = {
  fontSize: "32pt",
  color: "navy",
  fontFamily: "FSTimesRom",
};

const VjezbaJedan = () => {
  return (
    <div>
      <StyledVjezba
        style={{
          backgroundColor: "rgb(128, 0, 128)",
          color: "rgb(255, 255, 0)",
        }}
      >
        <h1>Vjezba 1</h1>
        <h2>manipuliranje tekstom</h2>
        <p style={{ fontSize: 15 }}>small</p>
        <p style={{ fontSize: 40 }}>big</p>
        <p>
          Primjer <b>Bolda</b>
        </p>
        <p>
          Primjer <i>kurziva</i>
        </p>
        <p>
          Primjer superskripte:<sup> sup</sup>
        </p>
        <p>
          Primjer subskripte:<sub> sub</sub>
        </p>
      </StyledVjezba>

      <StyledVjezba
        style={{
          backgroundColor: "red",
        }}
      >
        <h1>Vjezba 2</h1>
        <h2>Stilovi</h2>
        <div style={stil1}>Ovo je odlomak za testiranje Stila1.</div>

        <p style={stil2}>Ovo je odlomak za testiranje Stila2.</p>

        <p style={stil3}>Opet igranje sa Stilom3.</p>

        <p style={stil2}>Opet igranje sa Stilom2.</p>
      </StyledVjezba>

      <StyledVjezba>
        <h1>Vjezba 3</h1>
        <h2>Pozicioniranje</h2>
        <p style={{ textAlign: "left" }}>align left</p>
        <p style={{ textAlign: "right" }}>right</p>
        <p style={{ textAlign: "center" }}>center</p>
        <hr
          style={{
            alignItems: "left",
            width: 50,
            height: 5,
            backgroundColor: "red",
          }}
        ></hr>
      </StyledVjezba>

      <StyledVjezba>
        <h1>Vjezba 4</h1>
        <h2>Framovi</h2>
        <p>
          U React-u responzivni framovi nepostoje pošto se već godinama ne
          koriste.
        </p>
      </StyledVjezba>

      <StyledVjezba>
        <h1>Vjezba 5</h1>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
      </StyledVjezba>
      <StyledVjezba>
        <h1>Vjezba 6</h1>
        <h2>Uređene liste</h2>
        <ol start={3} style={{ textAlign: "left" }}>
          <li>prvi ali treći</li>
          <li>drugi ali četvrti</li>
          <li>treci ali peti</li>
        </ol>
      </StyledVjezba>
      <StyledVjezba>
        <h1>Vjezba 8</h1>
        <h2>Neuređene liste</h2>
        <ul style={{ textAlign: "left" }}>
          <li>ponedljeljak</li>
          <li>petak</li>
          <li>srijeda</li>
        </ul>
      </StyledVjezba>

      <StyledVjezba>
        <h1>Vjezba 9</h1>
        <h2>Definicijska Lista</h2>
        <dl style={{ textAlign: "left" }}>
          <dt>battery bus</dt>
          <dd>
            {" "}
            razvodna točka el. energije iz baterije;
            <br></br>
            mjesto gdje se glavni vodič grana prema potrošaćima obična baterija;
          </dd>
        </dl>
      </StyledVjezba>

      <StyledVjezba>
        <h1>Vjezba 10</h1>
        <h2>Miješanje</h2>
        <ol start={30} style={{ textAlign: "left" }}>
          <li>
            hi
            <ol>
              <li>hello</li>
              <li>bok bok</li>
              <li>buna</li>
            </ol>
            <ul>
              <li>yo</li>
              <li>hallo</li>
            </ul>
          </li>
        </ol>
      </StyledVjezba>

      <StyledVjezba style={{ width: 850 }}>
        <h1>Vjezba 11</h1>
        <h2>Preformatirani tekst</h2>
        <pre>{`
Vrijeme potrebno za tisak jedne određene naklade B1 formata je određeno izrazom
t = (ANAKL x 60) / FN(BRZOFF)		[min]
    gdje je ANAKL zadana naklada u B1 arcima, FN(BRZOFF) kontinuirana funkcija raspodjele 
    brzina ofsetnog stroja izvedena iz funkcije vjerojatnosti sa slike 42. 
    Varijabla ANAKL se izvodi iz zadane naklade mastera NAKL i broja formi mastera BA4STR na arku stroja s izrazom

    ANAKL = (NAKL / BA4STR) x 1.10		[kom] .

    Zbog realnog škarta od 10 posto u izraz je ugrađen i faktor škarta od 1.10.

    5.1.6. Vrijeme dorade araka mastera


    Kada se završi ofsetni tisak bilo koje naklade potrebno je vrijeme sušenja ofsetne boje prije bilo kakve dorade. 
    Mjerenjem sušenja u praksi na 146 uzoraka sušenja obostrano ofsetno otisnutih poslova  došlo se je do funkcije 
    vjerojatnosti na slici 43. Nakon sušenja arci se mogu pošeti dorađivati. U vrijeme dorade ukljušeno je rezanje 
    na format mastera, kontrola kvalitete, odbacivanje škarta i obavezno brojanje na strojevima za brojanje. 
    Izvedeno je 22 mjerenja dorade naklade od 150000 mastera. Dobivena je funkcija vjerojatnosti vremena 
    dorade na slici 44. Vrijeme potrebno za cjelokupnu doradu jedne određene naklade NAKL je određeno izrazom

    t = FN(SUS) + (NAKL x FN(DOR)) / 150000		[min]

    gdje je FN(SUS) kontinuirana funkcija raspodjele vremena sušenja ofsetne boje obostranog otiska izvedena 
    iz funkcije vjerojatnosti sa slike 43, a FN(DOR) predstavlja kontinuiranu funkciju raspodjele vremena dorade
    izvedenu iz funkcije vjerojatnosti sa slike 44.Nakon faze dorade masteri su spremni za individualizaciju 
    koja će biti prikazana drugim modelom nezavisno od ovog.

    5.1.7. Vrijeme dorade araka mastera


    Kada se završi ofsetni tisak bilo koje naklade potrebno je vrijeme sušenja ofsetne boje prije bilo kakve dorade. 
    Mjerenjem sušenja u praksi na 146 uzoraka sušenja obostrano ofsetno otisnutih poslova  došlo se je do funkcije 
    vjerojatnosti na slici 43. Nakon sušenja arci se mogu početi dorađivati. U vrijeme dorade uključeno je rezanje 
    na format mastera, kontrola kvalitete, odbacivanje škarta i obavezno brojanje na strojevima za brojanje. 
    Izvedeno je 22 mjerenja dorade naklade od 150000 mastera. Dobivena je funkcija vjerojatnosti vremena 
    dorade na slici 44. Vrijeme potrebno za cjelokupnu doradu jedne određene naklade NAKL je određeno izrazom

    t = FN(SUS) + (NAKL x FN(DOR)) / 150000		[min]

    gdje je FN(SUS) kontinuirana funkcija raspodjele vremena sušenja ofsetne boje obostranog otiska izvedena 
    iz funkcije vjerojatnosti sa slike 43, a FN(DOR) predstavlja kontinuiranu funkciju raspodjele vremena dorade
    izvedenu iz funkcije vjerojatnosti sa slike 44.Nakon faze dorade masteri su spremni za individualizaciju 
koja će biti prikazana drugim modelom nezavisno od ovog.`}</pre>
      </StyledVjezba>
      <Link to="/">
        <h1>Home</h1>
      </Link>
    </div>
  );
};

export default VjezbaJedan;
