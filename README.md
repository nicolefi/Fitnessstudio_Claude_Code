# So Fresh – One-Pager für ein Fitnessstudio in Zürich

Responsive One-Page-Website für das fiktive Fitnessstudio **So Fresh**: dunkles Design, Neon-Grün als Akzentfarbe, grosse Typografie und Grain-Textur. Aktuell mit Platzhalter-Content, Design und Struktur stehen.

![Status](https://img.shields.io/badge/Status-Platzhalter--Phase-orange)

## Features

- Sticky Navigation mit Anchor-Links und Mobile-Hamburger-Menü
- Hero mit Headline, Claim, CTA und animiertem Scroll-Indikator
- Sektionen: Über uns, Training, Kursplan, Preise, Gallery (mit Lightbox), Studio & Öffnungszeiten, Probetraining/Kontakt
- Probetraining-Formular speichert Anfragen in Supabase (Tabelle `trial_requests`)
- Scroll-Reveal-Animationen (respektiert `prefers-reduced-motion`)
- Permanenter Dark Mode, Grain-Overlay als Stilmittel
- Rechtsseiten: `/impressum` und `/datenschutz`
- Vollständig offline lauffähig (keine externen Bilddienste oder Fonts)

## Tech-Stack

- [Next.js 16](https://nextjs.org/) (App Router, `src/`-Ordner)
- [React 19](https://react.dev/)
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- ESLint
- Fonts via `next/font/local`: **Mulish** (Body) und **TikTok Sans** (Headlines)

## Voraussetzungen

- [Node.js](https://nodejs.org/) 20.9 oder neuer (aktuelle LTS empfohlen)
- npm (kommt mit Node.js)

## Installation & Start

```bash
# Repository klonen
git clone https://github.com/<DEIN-USERNAME>/<REPO-NAME>.git
cd <REPO-NAME>

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Danach ist die Seite unter [http://localhost:3000](http://localhost:3000) erreichbar.

## Befehle

| Befehl          | Beschreibung                   |
| --------------- | ------------------------------ |
| `npm run dev`   | Startet den Entwicklungsserver |
| `npm run build` | Erstellt den Produktions-Build |
| `npm run start` | Startet den Produktions-Build  |
| `npm run lint`  | Prüft den Code mit ESLint      |

## Seitenstruktur

| Route          | Inhalt                                       |
| -------------- | -------------------------------------------- |
| `/`            | One-Pager mit allen Sektionen (Anchor-Links) |
| `/impressum`   | Impressum (aktuell Platzhalter)              |
| `/datenschutz` | Datenschutzerklärung (aktuell Platzhalter)   |

Scroll-Reihenfolge auf der Startseite: Nav → Hero → About → Training → Kursplan → Preise → Gallery → Studio → Probetraining → Footer

## Projektstruktur

```
so-fresh/
├── public/                  # Statische Dateien
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root Layout, Meta-Daten
│   │   ├── fonts.ts         # Lokale Fonts (next/font/local)
│   │   ├── globals.css      # Farb-Tokens, Grain-Overlay
│   │   ├── impressum/
│   │   └── datenschutz/
│   └── components/          # Nav, Hero, About, Training, Schedule, Pricing,
│                            # Gallery, Location, Contact, Footer, Reveal
├── wireframes/              # Excalidraw-Wireframe (Desktop + Mobile)
└── PLAN.md                  # Projektplan und Umsetzungsstand
```

## Design

| Token        | Wert       |
| ------------ | ---------- |
| `background` | `#0a0a0a`  |
| `foreground` | `#f2f2f0`  |
| `accent`     | `#c6ff3d`  |

- Headlines: TikTok Sans (`font-display`), Fliesstext: Mulish (`font-sans`)
- Wireframe: `wireframes/gym-onepager.excalidraw` (zum Öffnen auf [excalidraw.com](https://excalidraw.com) hochladen)

## Noch zu ersetzen

- [ ] Echte Fotos (Studio, Trainingsbereiche, Team, Kurse)
- [ ] Echte Texte, Kursplan und Preise
- [ ] Echtes Logo
- [ ] Echte Adresse, Öffnungszeiten, Social-Links und Karten-Embed
- [ ] Verbindliche Texte für Impressum und Datenschutz (vor einem echten Launch zwingend)
- [ ] Kontaktformular ans Backend anbinden (aktuell nur UI)

## Deployment

Das Projekt lässt sich z. B. über [Vercel](https://vercel.com/) veröffentlichen: Repository verbinden und deployen. Sinnvoll erst mit echtem Content.

## Autorin

[Dein Name] – [Link zu LinkedIn oder Portfolio]

## Lizenz

[z. B. MIT oder "Alle Rechte vorbehalten"]
