import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--cream)]">
      {/* Header */}
      <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold tracking-tight">
            <span className="gradient-text">Forever</span>
            <span className="text-[var(--dark)]">Slim</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#benefici" className="text-gray-600 hover:text-[var(--coral)] transition-colors">Benefici</a>
            <a href="#come-funziona" className="text-gray-600 hover:text-[var(--coral)] transition-colors">Come Funziona</a>
            <a href="#testimonianze" className="text-gray-600 hover:text-[var(--coral)] transition-colors">Testimonianze</a>
            <a href="#ordina" className="btn-primary text-sm px-6 py-2.5">Ordina Ora</a>
          </nav>
          <button className="md:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-hero min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-4 py-2 mb-6 shadow-sm">
                <span className="text-lg">🇨🇭</span>
                <span className="text-sm font-medium text-gray-700">Qualità Svizzera Certificata</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--dark)] leading-tight mb-6 animate-fade-in-up">
                Riscopri la Tua
                <span className="block gradient-text">Forma Migliore</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in-up delay-200">
                I peptidi dimagranti di nuova generazione. Formulazione scientifica svizzera per risultati visibili in 4 settimane.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
                <a href="#ordina" className="btn-primary text-center">
                  Inizia il Tuo Percorso →
                </a>
                <a href="#come-funziona" className="btn-secondary text-center">
                  Scopri Come Funziona
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex items-center justify-center lg:justify-start gap-6 mt-10 animate-fade-in-up delay-400">
                <div className="flex items-center gap-1">
                  <div className="stars text-lg">★★★★★</div>
                  <span className="text-sm text-gray-600 font-medium">4.9/5</span>
                </div>
                <div className="h-4 w-px bg-gray-300"></div>
                <span className="text-sm text-gray-600">2.847+ clienti soddisfatti</span>
              </div>
            </div>

            <div className="relative animate-fade-in-up delay-200">
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--coral)]/20 to-[var(--mint)]/20 rounded-3xl transform rotate-3"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full">
                  <Image
                    src="/images/products/gold-vial.png"
                    alt="Forever Slim - Fiala Peptidi Dimagranti Premium"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-4 sm:left-0 bg-white rounded-2xl px-6 py-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--mint)] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--dark)]">100% Naturale</p>
                    <p className="text-sm text-gray-500">Senza effetti collaterali</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow hidden lg:block">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-white py-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
            <div>
              <p className="text-3xl font-bold gradient-text">98%</p>
              <p className="text-sm text-gray-500">Soddisfazione clienti</p>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block"></div>
            <div>
              <p className="text-3xl font-bold gradient-text">-8kg</p>
              <p className="text-sm text-gray-500">Media in 8 settimane</p>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block"></div>
            <div>
              <p className="text-3xl font-bold gradient-text">15k+</p>
              <p className="text-sm text-gray-500">Kit venduti</p>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block"></div>
            <div>
              <p className="text-3xl font-bold gradient-text">4.9★</p>
              <p className="text-sm text-gray-500">Valutazione media</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefici" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-[var(--mint-light)] text-[var(--teal)] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Perché Forever Slim
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark)] mb-4">
              Benefici che Sentirai
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Una formula sviluppata in laboratori svizzeri per offrirti risultati reali, non promesse vuote.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="card-premium text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--coral-light)] to-[var(--coral)]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[var(--coral)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--dark)] mb-3">Metabolismo Accelerato</h3>
              <p className="text-gray-600">
                Attiva il tuo metabolismo naturale per bruciare più calorie anche a riposo. Sentirai più energia fin dalla prima settimana.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="card-premium text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--mint-light)] to-[var(--mint)]/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--dark)] mb-3">Appetito Controllato</h3>
              <p className="text-gray-600">
                Riduci naturalmente gli attacchi di fame nervosa. Ti sentirai sazia più a lungo senza sforzo.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="card-premium text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--dark)] mb-3">Sicuro e Naturale</h3>
              <p className="text-gray-600">
                Formula clinicamente testata senza effetti collaterali. Ingredienti naturali di qualità farmaceutica svizzera.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="come-funziona" className="py-20 md:py-28 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/80 text-[var(--coral)] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Semplicità
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark)] mb-4">
              Come Funziona
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tre semplici passi verso la tua trasformazione
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[var(--coral)] via-[var(--teal)] to-[var(--coral)]"></div>

            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-[var(--coral)] text-white flex items-center justify-center text-xl font-bold relative z-10">
                1
              </div>
              <h3 className="text-xl font-bold text-[var(--dark)] mb-3">Ordina il Tuo Kit</h3>
              <p className="text-gray-600">
                Scegli il kit più adatto a te. Spedizione gratuita in tutta Italia in 24-48h.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-[var(--teal)] text-white flex items-center justify-center text-xl font-bold relative z-10">
                2
              </div>
              <h3 className="text-xl font-bold text-[var(--dark)] mb-3">Segui il Protocollo</h3>
              <p className="text-gray-600">
                Assumi le capsule ogni mattina. Nessuna dieta estrema, nessun esercizio obbligatorio.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative">
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xl font-bold relative z-10">
                3
              </div>
              <h3 className="text-xl font-bold text-[var(--dark)] mb-3">Vedi i Risultati</h3>
              <p className="text-gray-600">
                Risultati visibili già dalla seconda settimana. Monitora i tuoi progressi con la nostra app gratuita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonianze" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-[var(--coral-light)] text-[var(--coral)] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Storie Vere
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark)] mb-4">
              Le Nostre Clienti Raccontano
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Migliaia di donne hanno già trasformato la loro vita con Forever Slim
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="card-premium">
              <div className="stars mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6 italic">
                &quot;Dopo due gravidanze pensavo fosse impossibile tornare in forma. Con Forever Slim ho perso 12kg in 3 mesi senza stress. Mi sento rinata!&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden relative">
                  <Image
                    src="/images/testimonials/testimonial-1.png"
                    alt="Giulia R."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[var(--dark)]">Giulia R.</p>
                  <p className="text-sm text-gray-500">Milano • -12kg</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="card-premium">
              <div className="stars mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6 italic">
                &quot;A 52 anni il metabolismo era fermo. Forever Slim ha fatto la differenza. Finalmente i vestiti che amavo mi stanno di nuovo!&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden relative">
                  <Image
                    src="/images/testimonials/testimonial-2.png"
                    alt="Francesca M."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[var(--dark)]">Francesca M.</p>
                  <p className="text-sm text-gray-500">Roma • -8kg</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="card-premium">
              <div className="stars mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6 italic">
                &quot;Scettica all&apos;inizio, ora sono la prima a consigliarlo. Zero fame nervosa e tanta energia. Il mio medico è rimasto sorpreso dei risultati!&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden relative">
                  <Image
                    src="/images/testimonials/testimonial-3.png"
                    alt="Antonella B."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[var(--dark)]">Antonella B.</p>
                  <p className="text-sm text-gray-500">Napoli • -10kg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/science/science-bg.png"
            alt="Background scientifico"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[var(--mint-light)] text-[var(--teal)] px-4 py-2 rounded-full text-sm font-medium mb-4">
                La Scienza
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark)] mb-6">
                Peptidi di Nuova Generazione
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Forever Slim utilizza una combinazione brevettata di peptidi bioattivi che agiscono su tre fronti: metabolismo, appetito e termogenesi.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--coral)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Sviluppato nei laboratori di Zurigo</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--coral)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Testato clinicamente su oltre 1.200 partecipanti</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--coral)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Certificazioni GMP e ISO 9001</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--coral)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Senza glutine, lattosio e OGM</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-[var(--dark)] mb-6 text-center">Risultati Clinici</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Perdita peso media</span>
                      <span className="font-bold text-[var(--coral)]">-8.4kg</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[var(--coral)] to-[var(--teal)] rounded-full" style={{ width: '84%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Riduzione appetito</span>
                      <span className="font-bold text-[var(--teal)]">-67%</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[var(--teal)] to-[var(--mint)] rounded-full" style={{ width: '67%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Aumento energia</span>
                      <span className="font-bold text-purple-500">+45%</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-400 to-purple-500 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-6 text-center">*Studio clinico su 1.247 partecipanti, 12 settimane</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="ordina" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-[var(--coral-light)] text-[var(--coral)] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Offerta Speciale
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark)] mb-4">
              Scegli il Tuo Kit
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Spedizione gratuita in Italia • Garanzia soddisfatti o rimborsati 30 giorni
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Kit 1 */}
            <div className="card-premium border-2 border-gray-100 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="/images/products/gold-vial-640.webp"
                  alt="Forever Slim - 1 Kit"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-[var(--dark)] mb-2">1 Kit</h3>
              <p className="text-gray-500 mb-6">Trattamento 1 mese</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-[var(--dark)]">€197</span>
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-[var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  30 capsule (1 al giorno)
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-[var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Guida digitale inclusa
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-[var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Spedizione gratuita
                </li>
              </ul>
              <button className="btn-secondary w-full">
                Acquista Ora
              </button>
            </div>

            {/* Kit 3 - Featured */}
            <div className="card-premium border-2 border-[var(--coral)] text-center relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-coral-mint text-white px-6 py-1.5 rounded-full text-sm font-semibold">
                PIÙ VENDUTO
              </div>
              <div className="relative w-40 h-32 mx-auto mb-4 mt-2">
                <Image
                  src="/images/products/box-stacked-640.webp"
                  alt="Forever Slim - 3 Kit"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-[var(--dark)] mb-2">3 Kit</h3>
              <p className="text-gray-500 mb-6">Trattamento 3 mesi</p>
              <div className="mb-2">
                <span className="text-5xl font-bold gradient-text">€399</span>
              </div>
              <p className="text-green-500 font-semibold mb-6">Risparmi €192!</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-[var(--coral)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  90 capsule (1 al giorno)
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-[var(--coral)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Guida digitale + video corso
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-[var(--coral)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Spedizione prioritaria gratuita
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-[var(--coral)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Consulenza nutrizionale gratuita
                </li>
              </ul>
              <button className="btn-primary w-full">
                Acquista Ora →
              </button>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
            <div className="flex items-center gap-2 text-gray-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm">Pagamento sicuro</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm">Garanzia 30 giorni</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
              <span className="text-sm">Spedizione gratuita</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 gradient-hero">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/80 text-[var(--coral)] px-4 py-2 rounded-full text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark)] mb-4">
              Domande Frequenti
            </h2>
          </div>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group bg-white rounded-2xl shadow-sm">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-semibold text-[var(--dark)]">Quanto tempo ci vuole per vedere i risultati?</span>
                <svg className="w-5 h-5 text-[var(--coral)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                La maggior parte delle nostre clienti nota una riduzione della fame già dalla prima settimana. I risultati visibili sulla bilancia arrivano solitamente entro 2-3 settimane. Per risultati ottimali, consigliamo un trattamento di almeno 3 mesi.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-white rounded-2xl shadow-sm">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-semibold text-[var(--dark)]">Ci sono effetti collaterali?</span>
                <svg className="w-5 h-5 text-[var(--coral)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Forever Slim è formulato con ingredienti 100% naturali e testato clinicamente. Non sono stati riportati effetti collaterali significativi negli studi clinici. Come per qualsiasi integratore, consulta il tuo medico se sei in gravidanza o stai assumendo farmaci.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-white rounded-2xl shadow-sm">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-semibold text-[var(--dark)]">Devo seguire una dieta specifica?</span>
                <svg className="w-5 h-5 text-[var(--coral)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                No, non è necessaria alcuna dieta estrema. Forever Slim funziona riducendo naturalmente l&apos;appetito, quindi mangerai meno senza sforzo. Ovviamente, uno stile di vita sano accelererà i risultati, ma non è obbligatorio.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-white rounded-2xl shadow-sm">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-semibold text-[var(--dark)]">Come funziona la garanzia?</span>
                <svg className="w-5 h-5 text-[var(--coral)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Offriamo una garanzia soddisfatti o rimborsati di 30 giorni. Se non sei completamente soddisfatta dei risultati, contattaci e ti rimborseremo l&apos;intero importo, senza domande.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-[var(--dark)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Inizia Oggi la Tua<br />
            <span className="gradient-text">Trasformazione</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Unisciti a migliaia di donne che hanno già scoperto il segreto per sentirsi bene nel proprio corpo.
          </p>
          <a href="#ordina" className="btn-primary inline-block text-lg">
            Ordina Ora con Spedizione Gratuita →
          </a>
          <p className="mt-6 text-gray-400 text-sm">
            Garanzia soddisfatti o rimborsati 30 giorni • Spedizione in 24-48h
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--dark)] border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <a href="/" className="text-2xl font-bold">
                <span className="gradient-text">Forever</span>
                <span className="text-white">Slim</span>
              </a>
              <p className="text-gray-400 mt-4 text-sm">
                Peptidi dimagranti di qualità svizzera per risultati reali e duraturi.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Prodotto</h4>
              <ul className="space-y-2">
                <li><a href="#benefici" className="text-gray-400 hover:text-white text-sm transition-colors">Benefici</a></li>
                <li><a href="#come-funziona" className="text-gray-400 hover:text-white text-sm transition-colors">Come Funziona</a></li>
                <li><a href="#testimonianze" className="text-gray-400 hover:text-white text-sm transition-colors">Testimonianze</a></li>
                <li><a href="#ordina" className="text-gray-400 hover:text-white text-sm transition-colors">Prezzi</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Supporto</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contattaci</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Spedizioni</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Resi</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legale</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Termini e Condizioni</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Forever Slim. Tutti i diritti riservati.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Pagamenti sicuri</span>
              <div className="flex gap-2">
                <div className="w-10 h-6 bg-gray-700 rounded"></div>
                <div className="w-10 h-6 bg-gray-700 rounded"></div>
                <div className="w-10 h-6 bg-gray-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
