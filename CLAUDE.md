# CLAUDE.md - Forever Slim

> **IMPORTANTE:** Questo file contiene TUTTE le informazioni necessarie per riprendere il lavoro sul progetto.
> Leggilo SEMPRE prima di iniziare qualsiasi attività.

---

## 📋 INDICE

1. [Overview Progetto](#-overview-progetto)
2. [Stack Tecnologico](#-stack-tecnologico)
3. [Credenziali e Configurazioni](#-credenziali-e-configurazioni)
4. [Struttura Progetto](#-struttura-progetto)
5. [Database Schema](#-database-schema)
6. [Generazione Immagini con AI](#-generazione-immagini-con-ai)
7. [Ottimizzazione Immagini Responsive](#-ottimizzazione-immagini-responsive)
8. [Lavoro Completato](#-lavoro-completato)
9. [Stato Attuale](#-stato-attuale)
10. [TODO - Prossimi Passi](#-todo---prossimi-passi)
11. [Link Utili](#-link-utili)
12. [Problemi Risolti e Note](#-problemi-risolti-e-note)
13. [Workflow con Antonio](#-workflow-con-antonio)

---

## 🎯 OVERVIEW PROGETTO

### Informazioni Generali
- **Nome Progetto:** Forever Slim
- **Tipo:** E-commerce / Landing Page per prodotto dimagrante (peptidi)
- **Proprietario:** Antonio (tonytodavida@gmail.com)
- **Data Inizio:** 1 Febbraio 2026

### Target Audience
- **Chi:** Donne italiane
- **Età:** 35-60 anni
- **Caratteristiche:** Cercano soluzioni dimagranti efficaci, premium

### Prodotti
| Prodotto | Prezzo | Descrizione |
|----------|--------|-------------|
| 1 Kit | €197 | Kit singolo peptidi dimagranti |
| 3 Kit | €399 | Bundle 3 kit (risparmio) |

### Stile e Design
- **Ispirazione:** wearefeel.com (fresco, energico, premium)
- **Palette Colori:** Coral, Teal, Purple, gradienti soft
- **Font:** System fonts (clean, modern, veloce)
- **Approccio:** Mobile-first responsive

---

## 🛠 STACK TECNOLOGICO

### Frontend
| Tecnologia | Versione | Scopo |
|------------|----------|-------|
| Next.js | 16.1.6 | Framework React con App Router |
| React | 19.2.3 | UI Library |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^4 | Styling utility-first |
| Lucide React | ^0.563.0 | Icone |

### Backend & Database
| Tecnologia | Versione | Scopo |
|------------|----------|-------|
| Supabase | ^2.93.3 | Auth + PostgreSQL Database |
| @supabase/ssr | ^0.8.0 | Server-side rendering support |

### Pagamenti
| Tecnologia | Versione | Scopo |
|------------|----------|-------|
| Stripe | ^20.3.0 | Pagamenti (da configurare) |
| @stripe/stripe-js | ^8.7.0 | Client-side Stripe |

### Ottimizzazione Immagini
| Tecnologia | Versione | Scopo |
|------------|----------|-------|
| Sharp | ^0.34.5 | Conversione WebP/AVIF, resize |

### Deployment
| Servizio | Scopo |
|----------|-------|
| Vercel | Hosting & Deploy automatico |
| GitHub | Version control |

---

## 🔐 CREDENZIALI E CONFIGURAZIONI

### GitHub Repository
```
Repository: https://github.com/tnyuzzo/forever-slim-site
Branch principale: main
```

### Vercel
```
Progetto: forever-slim-site
URL Live: https://forever-slim-site.vercel.app/
Dashboard: https://vercel.com/tonyuzzos-projects/forever-slim-site
```

### Supabase
```
Progetto: forever-slim
Project ID: zyvbsfdznegcqbfzuxpf
Organizzazione: Tonyuzzo (Free Plan)
Region: Central EU (Frankfurt) - eu-central-1
Dashboard: https://supabase.com/dashboard/project/zyvbsfdznegcqbfzuxpf

URL Progetto: https://zyvbsfdznegcqbfzuxpf.supabase.co
API Key (Publishable): sb_publishable_XVhE21Xv-iIrR024rmVHrA_Zt0a0n1Z
API Token (per Claude): sbp_895c2add50fc9483404c6c43518a2cb5e5d6e8d2
```

### Vercel API
```
Token (per Claude): tAwxdWxXGlek70qekcvdEu2K
```

### Variabili d'Ambiente (Vercel)
Le seguenti variabili sono già configurate su Vercel:
```env
NEXT_PUBLIC_SUPABASE_URL=https://zyvbsfdznegcqbfzuxpf.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_XVhE21Xv-iIrR024rmVHrA_Zt0a0n1Z
```

### Variabili d'Ambiente Locali (.env.local)
Creare file `.env.local` nella root del progetto:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://zyvbsfdznegcqbfzuxpf.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_XVhE21Xv-iIrR024rmVHrA_Zt0a0n1Z

# Development
DEV_BYPASS_AUTH=true

# Stripe (DA CONFIGURARE)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
```

---

## 📁 STRUTTURA PROGETTO

```
forever-slim-site/
├── .env.local.example          # Template variabili ambiente
├── .gitignore
├── middleware.ts               # Middleware autenticazione Supabase
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
│
├── public/
│   └── images/                 # Immagini ottimizzate
│       ├── hero/
│       │   ├── hero-640.webp
│       │   ├── hero-1024.webp
│       │   └── hero-1920.webp
│       ├── products/
│       └── testimonials/
│
├── scripts/
│   └── optimize-images.mjs     # Script ottimizzazione immagini
│
├── supabase/
│   └── schema.sql              # Schema database (DA ESEGUIRE)
│
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx          # Layout principale con Header/Footer
    │   ├── page.tsx            # Home page (COMPLETATA)
    │   │
    │   ├── (auth)/             # Route group autenticazione
    │   │   ├── login/          # Pagina login (da creare)
    │   │   └── registrati/     # Pagina registrazione (da creare)
    │   │
    │   ├── (dashboard)/        # Route group area clienti (protette)
    │   │   ├── dashboard/      # Dashboard utente (da creare)
    │   │   ├── ordini/         # Lista ordini (da creare)
    │   │   ├── nuovo-ordine/   # Checkout (da creare)
    │   │   ├── profilo/        # Profilo utente (da creare)
    │   │   └── traccia-spedizione/  # Tracking (da creare)
    │   │
    │   ├── (pubblico)/         # Route group pagine pubbliche
    │   │   └── (da creare: prodotto, faq, contatti)
    │   │
    │   └── api/
    │       ├── auth/
    │       │   └── callback/   # Callback OAuth Supabase
    │       └── stripe/
    │           └── webhook/    # Webhook Stripe
    │
    ├── components/
    │   ├── Header.tsx          # Header navigazione
    │   ├── Footer.tsx          # Footer completo
    │   └── OptimizedImage.tsx  # Componente immagini responsive
    │
    ├── lib/
    │   ├── image-optimizer.ts  # Utility ottimizzazione Sharp
    │   └── supabase/
    │       ├── client.ts       # Client browser Supabase
    │       ├── server.ts       # Client server Supabase
    │       └── middleware.ts   # Middleware auth
    │
    └── types/
        └── database.ts         # TypeScript types per Supabase
```

---

## 🗄 DATABASE SCHEMA

### Tabelle Previste

#### 1. customers (clienti)
```sql
CREATE TABLE customers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  nome TEXT,
  cognome TEXT,
  telefono TEXT,
  indirizzo TEXT,
  citta TEXT,
  cap TEXT,
  provincia TEXT,
  stripe_customer_id TEXT,
  ghl_contact_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### 2. orders (ordini)
```sql
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
  stripe_payment_intent_id TEXT,
  status order_status DEFAULT 'pending',
  total_amount DECIMAL(10,2) NOT NULL,
  product_type product_type NOT NULL,
  quantity INTEGER DEFAULT 1,
  shipping_address JSONB,
  tracking_number TEXT,
  tracking_url TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Tipi Custom (ENUM)
```sql
CREATE TYPE order_status AS ENUM ('pending', 'paid', 'shipped', 'delivered', 'cancelled');
CREATE TYPE product_type AS ENUM ('1kit', '3kit');
```

### Row Level Security (RLS)
- Abilitato su entrambe le tabelle
- Ogni utente può vedere/modificare solo i propri dati

### File SQL Completo
Lo schema completo è in: `forever-slim-site/supabase/schema.sql`

**⚠️ IMPORTANTE:** Le tabelle NON sono ancora state create in Supabase!
Vedi sezione "Stato Attuale" per istruzioni.

---

## 🖼 GENERAZIONE E EDITING IMMAGINI CON AI

### Tool Disponibili - WaveSpeed AI

WaveSpeed offre DUE modelli principali:

| Modello | Tool MCP | Uso |
|---------|----------|-----|
| **Text-to-Image** | `mcp__wavespeed__text_to_image` | Genera immagini da zero |
| **Image Edit** | `mcp__wavespeed__edit_image` | Modifica immagini esistenti (cambio sfondo, inpainting) |

---

### 1️⃣ TEXT-TO-IMAGE (Generazione)

#### Tool MCP
```javascript
mcp__wavespeed__text_to_image
model: "google/nano-banana-pro/text-to-image"
```

#### Parametri
| Parametro | Valore | Note |
|-----------|--------|------|
| `prompt` | string | Descrizione immagine (SEMPRE IN INGLESE!) |
| `model` | `google/nano-banana-pro/text-to-image` | Modello consigliato |
| `aspect_ratio` | `1:1`, `4:3`, `16:9`, `4:5`, `9:16` | Dipende dall'uso |
| `resolution` | `1k`, `2k` | Mai 4k per web (troppo pesante) |
| `output_format` | `png` | Per massima qualità |

#### Template Prompt
```
Prodotto:
"Elegant product photography of [PRODOTTO], soft gradient background
from coral pink to mint teal, premium aesthetic, professional studio
lighting, clean minimalist design, centered composition"

Hero/Lifestyle:
"Beautiful confident woman in her 40s, healthy glowing skin, premium
wellness aesthetic, soft coral and mint gradient background,
professional photography, aspirational lifestyle imagery"
```

#### Esempio
```javascript
mcp__wavespeed__text_to_image({
  prompt: "Luxury black gift box with gold logo, soft coral and mint
           gradient background, professional product photography",
  model: "google/nano-banana-pro/text-to-image",
  aspect_ratio: "1:1",
  resolution: "2k",
  output_format: "png"
})
```

---

### 2️⃣ IMAGE EDIT (Modifica Immagini Esistenti) ⭐ NUOVO!

#### Tool MCP
```javascript
mcp__wavespeed__edit_image
model: "google/nano-banana-pro/edit"
```

#### Parametri
| Parametro | Tipo | Obbligatorio | Note |
|-----------|------|--------------|------|
| `prompt` | string | ✅ | Istruzione di modifica |
| `image` | string | ✅ | URL immagine da modificare |
| `aspect_ratio` | string | No | Formato output |
| `resolution` | string | No | `1k`, `2k`, `4k` |
| `output_format` | string | No | `png`, `jpeg` |

#### Casi d'Uso Principali
- **Cambio sfondo**: Sostituire sfondo mantenendo soggetto
- **Relighting**: Cambiare illuminazione
- **Inpainting**: Modificare/rimuovere oggetti
- **Style transfer**: Cambiare stile artistico

#### Esempi di Prompt per Editing
```
Cambio sfondo:
"Replace background with soft coral and mint gradient, keep the product intact,
professional studio lighting"

Relighting:
"Add soft diffused studio lighting, make background a clean gradient
from coral pink to seafoam mint"

Rimozione elementi:
"Remove the marble surface, replace with clean gradient background"
```

#### Esempio Pratico (Cambio Sfondo Prodotto)
```javascript
mcp__wavespeed__edit_image({
  prompt: "Replace the marble background with a soft gradient from coral
           pink (#F5A491) to mint teal (#B5E8E3), keep the black box
           product perfectly intact, add soft studio lighting",
  image: "https://example.com/forever-slim-box.jpg",
  model: "google/nano-banana-pro/edit",
  aspect_ratio: "1:1",
  resolution: "2k",
  output_format: "png"
})
```

---

### 3️⃣ API REST DIRETTA (Alternativa a MCP)

Se il tool MCP non è disponibile, usare l'API direttamente:

#### Endpoint
```
POST https://api.wavespeed.ai/api/v3/google/nano-banana-pro/edit
GET  https://api.wavespeed.ai/api/v3/predictions/{requestId}/result
```

#### Header
```
Authorization: Bearer ${WAVESPEED_API_KEY}
Content-Type: application/json
```

#### Payload JSON
```json
{
  "prompt": "Replace background with coral to mint gradient",
  "images": ["https://url-immagine.com/foto.jpg"],
  "aspect_ratio": "1:1",
  "resolution": "2k",
  "output_format": "png"
}
```

#### cURL Completo
```bash
curl -X POST "https://api.wavespeed.ai/api/v3/google/nano-banana-pro/edit" \
  -H "Authorization: Bearer $WAVESPEED_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Replace background with soft coral and mint gradient",
    "images": ["https://example.com/product.jpg"],
    "resolution": "2k",
    "output_format": "png"
  }'
```

---

### 💰 Pricing WaveSpeed

| Modello | 1K | 2K | 4K |
|---------|----|----|-----|
| Text-to-Image | $0.03 | $0.05 | $0.10 |
| Image Edit | $0.14 | $0.14 | $0.24 |

---

### 🔄 Workflow Completo Consigliato

#### Per foto prodotto REALI (come Forever Slim):
1. **Carica** foto originale su hosting (es. Supabase Storage, Cloudinary)
2. **Edita** con `edit_image` per cambiare sfondo
3. **Scarica** risultato in `/public/images/products/`
4. **Ottimizza** con Sharp (WebP/AVIF, dimensioni responsive)
5. **Usa** nel sito

#### Per immagini completamente nuove:
1. **Genera** con `text_to_image`
2. **Scarica** in `/public/images/[categoria]/`
3. **Ottimizza** con Sharp
4. **Usa** nel sito

---

### 📚 Documentazione Ufficiale

- API Docs: https://wavespeed.ai/docs/docs-api/google/google-nano-banana-pro-edit
- Model Page: https://wavespeed.ai/models/google/nano-banana-pro/edit
- Blog Guide: https://wavespeed.ai/blog/posts/google-nano-banana-pro-complete-guide-2026/

---

## 📐 OTTIMIZZAZIONE IMMAGINI RESPONSIVE

### Principi Fondamentali
- **Mobile-first:** Prima ottimizziamo per mobile, poi scaliamo
- **Formati moderni:** WebP (supporto universale) + AVIF (migliore compressione)
- **Lazy loading:** Tutte tranne hero/above-the-fold
- **Dimensioni multiple:** 640px, 1024px, 1920px

### Script Ottimizzazione (`npm run image:optimize`)
```javascript
// scripts/optimize-images.mjs
import { optimizeImage } from '../src/lib/image-optimizer.ts'

await optimizeImage({
  inputPath: './public/images/hero/hero-original.png',
  outputDir: './public/images/hero',
  baseName: 'hero',
  sizes: [640, 1024, 1920],
  formats: ['webp', 'avif'],
  quality: 82
})
```

### Utility Sharp (`src/lib/image-optimizer.ts`)
```typescript
// Funzioni disponibili:
optimizeImage()    // Converti e crea dimensioni multiple
generateSrcSet()   // Genera attributo srcset
generateSizes()    // Genera attributo sizes
getImageInfo()     // Metadata immagine
```

### Componente OptimizedImage (`src/components/OptimizedImage.tsx`)
```tsx
// Uso base
<OptimizedImage
  basePath="/images/hero"
  name="hero"
  alt="Hero image"
  width={1920}
  height={1080}
  priority  // Solo per above-the-fold
/>

// Componenti specializzati disponibili:
<ResponsiveHero />   // Per sezioni hero full-width
<ProductImage />     // Per card prodotti
```

### Struttura File Immagini
```
public/images/
├── hero/
│   ├── hero-640.webp      # Mobile
│   ├── hero-640.avif
│   ├── hero-1024.webp     # Tablet
│   ├── hero-1024.avif
│   ├── hero-1920.webp     # Desktop
│   └── hero-1920.avif
├── products/
│   └── [stesso pattern]
└── testimonials/
    └── [stesso pattern]
```

### Breakpoints Responsive
```css
/* Mobile first */
default: 100vw (mobile)
640px:   tablet portrait
1024px:  tablet landscape / small desktop
1920px:  desktop full

/* Attributo sizes tipico */
sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
```

---

## ✅ LAVORO COMPLETATO

### Fase 1: Setup Iniziale
- [x] Creata struttura progetto Next.js 16 con App Router
- [x] Configurato TypeScript
- [x] Configurato Tailwind CSS v4
- [x] Creata struttura cartelle (app, components, lib, types)

### Fase 2: Home Page
- [x] Creata Home Page completa con tutte le sezioni:
  - Hero con CTA
  - Benefits (3 vantaggi principali)
  - Product showcase
  - Testimonials
  - Science section
  - FAQ
  - Final CTA
  - Footer completo
- [x] Design responsive mobile-first
- [x] Stile premium ispirato a wearefeel.com

### Fase 3: Componenti Base
- [x] Header.tsx - Navigazione responsive
- [x] Footer.tsx - Footer completo con link e info
- [x] OptimizedImage.tsx - Componente immagini responsive

### Fase 4: Ottimizzazione Immagini
- [x] Configurato Sharp per conversione WebP/AVIF
- [x] Creato script `npm run image:optimize`
- [x] Creata utility `image-optimizer.ts`
- [x] Documentate best practice per Nano Banana Pro
- [x] Generate immagini con WaveSpeed AI (Nano Banana Pro)
- [x] Ottimizzate tutte le immagini in WebP/AVIF (640px, 1024px, 1920px)
- [x] Aggiunte immagini prodotto alla sezione Pricing

### Fase 5: Supabase Setup
- [x] Creato progetto Supabase "forever-slim"
- [x] Region: Frankfurt (eu-central-1) per Italia
- [x] Configurate variabili ambiente su Vercel
- [x] Creato client Supabase (browser + server)
- [x] Creato middleware autenticazione
- [x] Definiti TypeScript types per database
- [x] Scritto schema.sql completo

### Fase 6: Deploy
- [x] Push su GitHub (repo: tnyuzzo/forever-slim-site)
- [x] Deploy automatico su Vercel
- [x] Configurate env variables su Vercel
- [x] Sito live: https://forever-slim-site.vercel.app/

---

## 🔄 STATO ATTUALE

### Cosa Funziona
- ✅ Sito live e raggiungibile: https://forever-slim-site.vercel.app/
- ✅ Home page completa e responsive con tutte le sezioni
- ✅ Immagini ottimizzate in WebP/AVIF per tutti i breakpoint
- ✅ Immagini prodotto AI generate con sfondo coral/mint
- ✅ Variabili ambiente Supabase configurate
- ✅ Struttura autenticazione pronta
- ✅ Script ottimizzazione immagini funzionante (`npm run image:optimize`)

### Cosa Manca (BLOCCANTE)
- ⚠️ **Tabelle database Supabase NON create**

### Come Completare le Tabelle Supabase

**Opzione 1: SQL Editor (Consigliato)**
1. Vai a: https://supabase.com/dashboard/project/zyvbsfdznegcqbfzuxpf/sql/new
2. Copia il contenuto di `forever-slim-site/supabase/schema.sql`
3. Incolla nell'editor
4. Clicca "Run"

**Opzione 2: Table Editor (Visuale)**
1. Vai a: https://supabase.com/dashboard/project/zyvbsfdznegcqbfzuxpf/editor
2. Clicca "New table"
3. Crea manualmente customers e orders

---

## 📝 TODO - PROSSIMI PASSI

### Priorità ALTA (Blockers)
1. [ ] **Creare tabelle in Supabase** (vedi istruzioni sopra)
2. [ ] Testare connessione Supabase dal sito

### Priorità MEDIA (Core Features)
3. [ ] Creare pagina Login (`/login`)
4. [ ] Creare pagina Registrazione (`/registrati`)
5. [ ] Creare Dashboard utente (`/dashboard`)
6. [ ] Creare pagina Ordini (`/ordini`)
7. [ ] Creare pagina Profilo (`/profilo`)
8. [ ] Creare pagina Checkout (`/nuovo-ordine`)

### Priorità MEDIA (Pagine Pubbliche)
9. [ ] Creare pagina Prodotto dettagliata
10. [ ] Creare pagina FAQ espansa
11. [ ] Creare pagina Contatti

### Priorità BASSA (Integrazioni)
12. [ ] Configurare Stripe (chiavi API, webhook)
13. [ ] Implementare checkout Stripe
14. [ ] Integrare Facebook Pixel
15. [ ] (Opzionale) Integrare GoHighLevel CRM

### Nice to Have
- [ ] Email transazionali (conferma ordine, spedizione)
- [ ] Tracking spedizioni
- [ ] Analytics dashboard

---

## 🔗 LINK UTILI

### Produzione
| Risorsa | URL |
|---------|-----|
| Sito Live | https://forever-slim-site.vercel.app/ |
| Vercel Dashboard | https://vercel.com/tonyuzzos-projects/forever-slim-site |
| GitHub Repo | https://github.com/tnyuzzo/forever-slim-site |

### Supabase
| Risorsa | URL |
|---------|-----|
| Dashboard | https://supabase.com/dashboard/project/zyvbsfdznegcqbfzuxpf |
| Table Editor | https://supabase.com/dashboard/project/zyvbsfdznegcqbfzuxpf/editor |
| SQL Editor | https://supabase.com/dashboard/project/zyvbsfdznegcqbfzuxpf/sql/new |
| Auth Settings | https://supabase.com/dashboard/project/zyvbsfdznegcqbfzuxpf/auth/users |
| API Keys | https://supabase.com/dashboard/project/zyvbsfdznegcqbfzuxpf/settings/api |

### Documentazione
| Risorsa | URL |
|---------|-----|
| Next.js Docs | https://nextjs.org/docs |
| Supabase Docs | https://supabase.com/docs |
| Tailwind CSS | https://tailwindcss.com/docs |
| Stripe Docs | https://stripe.com/docs |

---

## 🔧 PROBLEMI RISOLTI E NOTE

### Problema: Vercel-Supabase Integration Fallita
- **Errore:** "The installation could not be started"
- **Soluzione:** Configurazione manuale delle variabili ambiente su Vercel

### Problema: Nuove API Key Supabase
- **Nota:** Supabase ha introdotto "Publishable Keys" al posto delle legacy "anon keys"
- **Soluzione:** Usato il nuovo formato `sb_publishable_XXX`

### Problema: Newline in SQL Editor Supabase
- **Errore:** Il testo incollato perdeva i newline
- **Soluzione:** Salvato schema in file SQL separato da copiare manualmente

### Note Tecniche Importanti
1. **Region Supabase:** Frankfurt (eu-central-1) scelta per latenza ottimale Italia (~15-20ms)
2. **Next.js 16:** Usa App Router, NON Pages Router
3. **Tailwind v4:** Sintassi leggermente diversa da v3
4. **React 19:** Versione più recente con nuove features

---

## 👤 WORKFLOW CON ANTONIO

### Preferenze di Lavoro
- **Autonomia:** Procedi senza chiedere conferme continue
- **Linguaggio:** Semplice, non tecnico
- **Verifiche:** Usa Chrome per testare, non chiedere screenshot
- **Consensi:** Chiedi una volta a inizio sessione

### Cosa Antonio NON è
- Non è uno sviluppatore
- Non conosce terminologia tecnica avanzata
- Non vuole dettagli implementativi

### Cosa Antonio VUOLE
- Risultati funzionanti
- Spiegazioni semplici
- Sito che funziona su mobile e desktop
- Deploy automatico senza problemi

### Integrazioni Frequenti (Progetti Antonio)
- **CRM:** GoHighLevel (GHL)
- **Pagamenti:** Stripe
- **Tracking:** Facebook Pixel, Google Analytics
- **Email:** Resend
- **Audio:** Deepgram

---

## 📅 CHANGELOG

### 1 Febbraio 2026 (Sessione 2 - Pomeriggio)
- Creato sistema completo ottimizzazione immagini con Sharp
- Generato immagini prodotto con WaveSpeed AI (Nano Banana Pro)
- Ottimizzato tutte le immagini in WebP/AVIF (640, 1024, 1920px)
- Aggiunto componente OptimizedImage.tsx
- Aggiunto immagini prodotto alla sezione pricing
- Aggiornato .gitignore
- Deploy su Vercel con tutte le immagini

### 1 Febbraio 2026 (Sessione 1 - Mattina)
- Creato progetto Next.js
- Completata Home Page
- Setup ottimizzazione immagini
- Creato progetto Supabase
- Configurate env variables Vercel
- Deploy iniziale su Vercel
- Scritto CLAUDE.md completo

---

*Ultimo aggiornamento: 1 Febbraio 2026*
*Autore: Claude (Anthropic)*
