# 2x4 LEGO Kombinációk Kalkulátor

## A Projektről

Ez a webalkalmazás segít kiszámolni, hogy n darab 2x4-as LEGO elemet hányféle lehetséges módon lehet egymásra helyezni. A kalkulátor a matematikai formula alapján kiszámolja és megjeleníti az eredményeket egy áttekinthető táblázatban.

## Jellemzők

- **Modern, reszponzív felület**: Sötét téma, animált háttér és interaktív elemek
- **Pontos számítások**: A ((46^(n-1) - 2^(n-1))/2) + 2^(n-1) képlet alapján
- **Valós idejű eredmények**: Azonnali számítás és táblázatos megjelenítés
- **Animált elemek**: 3D hatások, lebegő részecskék és dinamikus háttér
- **Interaktív élmény**: Az egér mozgására reagáló elemek, gomb effektek

## Használat

1. Nyisd meg a `index.php` fájlt egy PHP webszerveren
2. Add meg a LEGO elemek számát 
3. Kattints a "Számítás" gombra
4. A táblázat megjeleníti:
   - Az elemek számát (n)
   - Az adott elemszámhoz tartozó kombinációk számát
   - Az összes kombinációk számát eddig az értékig

## Technikai részletek

A projekt a következő technológiákat használja:

- **Backend**: PHP (számítási logika)
- **Frontend**: HTML, CSS, JavaScript
- **Design**: Shadcn UI inspirált, CSS animációkkal, reszponzív elrendezéssel
- **Animációk**: CSS keyframes és JavaScript DOM manipuláció

## Telepítés

1. Klónozd vagy töltsd le a projektet
2. Helyezd el egy PHP webszerveren (pl. Apache, Nginx)
3. Alternatívan használhatod a beépített PHP fejlesztői szervert:

```bash
cd /path/to/project
php -S localhost:8000
```

4. Nyisd meg a böngészőben: http://localhost:8000

## Matematikai háttér

A 2x8-as LEGO elemek kombinációinak száma a következő képlettel számolható ki:

```
((46^(n-1) - 2^(n-1))/2) + 2^(n-1)
```

ahol n az elemek száma.

## Készítette

Máté

---

© 2025 Minden jog fenntartva.
