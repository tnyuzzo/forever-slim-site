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
            <a href="#qualita" className="text-gray-600 hover:text-[var(--coral)] transition-colors">Qualità</a>
            <a href="#scienza" className="text-gray-600 hover:text-[var(--coral)] transition-colors">La Scienza</a>
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
                <span className="text-sm font-medium text-gray-700">Laboratori Svizzeri Certificati</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--dark)] leading-tight mb-6 animate-fade-in-up">
                Peptidi della
                <span className="block gradient-text">Massima Purezza</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in-up delay-200">
                Ogni lotto sottoposto a rigorosi test di laboratorio indipendenti per purezza, sterilità e assenza di metalli pesanti. Qualità farmaceutica certificata.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
                <a href="#ordina" className="btn-primary text-center">
                  Scopri i Nostri Prodotti →
                </a>
                <a href="#qualita" className="btn-secondary text-center">
                  Vedi Certificati di Analisi
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex items-center justify-center lg:justify-start gap-6 mt-10 animate-fade-in-up delay-400">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm text-gray-600 font-medium">Purezza 99%+</span>
                </div>
                <div className="h-4 w-px bg-gray-300"></div>
                <span className="text-sm text-gray-600">Test di terze parti</span>
              </div>
            </div>

            <div className="relative animate-fade-in-up delay-200">
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--coral)]/20 to-[var(--mint)]/20 rounded-3xl transform rotate-3"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full">
                  <picture>
                    <source
                      srcSet="/images/products/gold-vial-640.avif 640w, /images/products/gold-vial-1024.avif 1024w"
                      type="image/avif"
                      sizes="(max-width: 640px) 100vw, 400px"
                    />
                    <source
                      srcSet="/images/products/gold-vial-640.webp 640w, /images/products/gold-vial-1024.webp 1024w"
                      type="image/webp"
                      sizes="(max-width: 640px) 100vw, 400px"
                    />
                    <Image
                      src="/images/products/gold-vial-1024.webp"
                      alt="Forever Slim - Peptidi GLP-3 RT di Grado Farmaceutico"
                      fill
                      className="object-cover"
                      priority
                    />
                  </picture>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-4 sm:left-0 bg-white rounded-2xl px-6 py-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--mint)] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--dark)]">Testato in Laboratorio</p>
                    <p className="text-sm text-gray-500">Certificato ISO 17025</p>
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

      {/* Quality Badges Bar */}
      <section className="bg-white py-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
            <div>
              <p className="text-3xl font-bold gradient-text">99%+</p>
              <p className="text-sm text-gray-500">Purezza Certificata</p>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block"></div>
            <div>
              <p className="text-3xl font-bold gradient-text">GMP</p>
              <p className="text-sm text-gray-500">Standard Farmaceutico</p>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block"></div>
            <div>
              <p className="text-3xl font-bold gradient-text">ISO</p>
              <p className="text-sm text-gray-500">Laboratori Certificati</p>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block"></div>
            <div>
              <p className="text-3xl font-bold gradient-text">24h</p>
              <p className="text-sm text-gray-500">Spedizione Express</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="qualita" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-[var(--mint-light)] text-[var(--teal)] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Il Nostro Impegno
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark)] mb-4">
              Qualità Senza Compromessi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ogni prodotto Forever Slim viene sottoposto a controlli rigorosi in laboratori indipendenti certificati, garantendo la massima purezza e sicurezza.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Quality 1 */}
            <div className="card-premium text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--coral-light)] to-[var(--coral)]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[var(--coral)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--dark)] mb-3">Test di Terze Parti</h3>
              <p className="text-gray-600">
                Ogni lotto viene analizzato da laboratori indipendenti accreditati ISO 17025 per purezza, sterilità, endotossine e metalli pesanti.
              </p>
            </div>

            {/* Quality 2 */}
            <div className="card-premium text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--mint-light)] to-[var(--mint)]/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--dark)] mb-3">Produzione GMP</h3>
              <p className="text-gray-600">
                Sintetizzati in strutture certificate GMP (Good Manufacturing Practice) secondo gli standard farmaceutici più elevati al mondo.
              </p>
            </div>

            {/* Quality 3 */}
            <div className="card-premium text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--dark)] mb-3">Trasparenza Totale</h3>
              <p className="text-gray-600">
                Pubblichiamo i certificati di analisi (CoA) di ogni lotto. Verifica tu stesso la qualità di ciò che acquisti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white/80 text-[var(--coral)] px-4 py-2 rounded-full text-sm font-medium mb-4">
                Perché Forever Slim
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark)] mb-6">
                Eccellenza di Grado Farmaceutico
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Da Forever Slim, ci dedichiamo a fornire peptidi della massima qualità, potenza e purezza. Il nostro impegno per l&apos;eccellenza si riflette nel rigoroso processo di test di laboratorio.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Ogni prodotto viene sottoposto a test approfonditi in laboratori accreditati per verificare purezza, sterilità, livelli di endotossine e contenuto di metalli pesanti prima di arrivare nelle tue mani.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--coral)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--dark)]">Purezza Verificata 99%+</h4>
                    <p className="text-gray-600 text-sm">Analisi HPLC certificate da laboratori indipendenti</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--teal)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--dark)]">Test Sterilità e Endotossine</h4>
                    <p className="text-gray-600 text-sm">Ogni lotto testato secondo standard USP</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--dark)]">Assenza di Metalli Pesanti</h4>
                    <p className="text-gray-600 text-sm">Controllo ICP-MS per arsenico, piombo, mercurio e cadmio</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[var(--dark)] mb-6 text-center">Certificato di Analisi</h3>
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Purezza (HPLC)</span>
                    <span className="font-bold text-[var(--coral)]">99.2%</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[var(--coral)] to-[var(--teal)] rounded-full" style={{ width: '99.2%' }}></div>
                  </div>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Test Sterilità</span>
                    <span className="font-bold text-green-500">PASS ✓</span>
                  </div>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Endotossine</span>
                    <span className="font-bold text-green-500">&lt;0.5 EU/mg</span>
                  </div>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Metalli Pesanti</span>
                    <span className="font-bold text-green-500">Non Rilevati</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Identità (MS)</span>
                    <span className="font-bold text-green-500">Confermata ✓</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-6 text-center">*Esempio di CoA - Lotto FS-2026-0142</p>
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section id="scienza" className="py-20 md:py-28 relative overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-[var(--mint-light)] text-[var(--teal)] px-4 py-2 rounded-full text-sm font-medium mb-4">
              La Scienza
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark)] mb-4">
              Innovazione Peptidica Avanzata
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I nostri peptidi GLP-3 RT rappresentano l&apos;avanguardia della ricerca biotecnologica. Formulati nei laboratori svizzeri più prestigiosi, offrono risultati superiori grazie alla loro elevata biodisponibilità e stabilità molecolare.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[var(--coral-light)] to-[var(--coral)] flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--dark)] mb-3">Innovazione</h3>
              <p className="text-gray-600">
                Scoperte rivoluzionarie grazie ai nostri composti innovativi. Spingiamo i confini della scienza per garantire prodotti all&apos;avanguardia nella ricerca peptidica.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[var(--mint-light)] to-[var(--teal)] flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--dark)] mb-3">Implementazione</h3>
              <p className="text-gray-600">
                Risultati superiori garantiti. Sviluppiamo i nostri composti utilizzando metodi di delivery all&apos;avanguardia, assicurando affidabilità e potenza per applicazioni scientifiche.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-200 to-purple-500 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--dark)] mb-3">Precisione</h3>
              <p className="text-gray-600">
                Accuratezza senza pari nei tuoi esperimenti grazie ai nostri composti meticolosamente formulati. Garantiamo i più alti standard di precisione per risultati affidabili e riproducibili.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonianze" className="py-20 md:py-28 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/80 text-[var(--coral)] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Testimonianze
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark)] mb-4">
              La Fiducia dei Nostri Clienti
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Migliaia di clienti hanno scelto Forever Slim per la qualità superiore dei nostri peptidi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="card-premium">
              <div className="stars mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6 italic">
                &quot;Finalmente un fornitore serio. I certificati di analisi sono trasparenti e la purezza è verificabile. Ho confrontato con altri prodotti e la differenza è evidente.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden relative">
                  <Image
                    src="/images/testimonials/testimonial-1.png"
                    alt="Dr. Marco R."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[var(--dark)]">Dr. Marco R.</p>
                  <p className="text-sm text-gray-500">Ricercatore, Milano</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="card-premium">
              <div className="stars mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6 italic">
                &quot;La qualità GMP fa davvero la differenza. Dopo mesi di ricerche, ho trovato in Forever Slim l&apos;affidabilità e la consistenza che cercavo.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden relative">
                  <Image
                    src="/images/testimonials/testimonial-2.png"
                    alt="Prof.ssa Elena B."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[var(--dark)]">Prof.ssa Elena B.</p>
                  <p className="text-sm text-gray-500">Biochimica, Roma</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="card-premium">
              <div className="stars mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6 italic">
                &quot;Spedizione velocissima e packaging professionale. Il prodotto mantiene la catena del freddo perfettamente. Servizio clienti eccezionale.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden relative">
                  <Image
                    src="/images/testimonials/testimonial-3.png"
                    alt="Dr. Luca V."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[var(--dark)]">Dr. Luca V.</p>
                  <p className="text-sm text-gray-500">Farmacista, Napoli</p>
                </div>
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
              I Nostri Prodotti
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark)] mb-4">
              Peptidi di Grado Farmaceutico
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Spedizione refrigerata gratuita in Italia • Certificati di analisi inclusi • Garanzia qualità 100%
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Kit 1 */}
            <div className="card-premium border-2 border-gray-100 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="/images/products/gold-vial-640.webp"
                  alt="Forever Slim GLP-3 RT - 10mg"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-[var(--dark)] mb-2">GLP-3 RT 10mg</h3>
              <p className="text-gray-500 mb-6">Fiala singola • Purezza 99%+</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-[var(--dark)]">€197</span>
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-[var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Certificato di Analisi incluso
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-[var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Liofilizzato, pronto all&apos;uso
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-[var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Spedizione refrigerata gratuita
                </li>
              </ul>
              <button className="btn-secondary w-full">
                Ordina Ora
              </button>
            </div>

            {/* Kit 3 - Featured */}
            <div className="card-premium border-2 border-[var(--coral)] text-center relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-coral-mint text-white px-6 py-1.5 rounded-full text-sm font-semibold">
                MIGLIOR VALORE
              </div>
              <div className="relative w-40 h-32 mx-auto mb-4 mt-2">
                <Image
                  src="/images/products/box-stacked-640.webp"
                  alt="Forever Slim GLP-3 RT - Kit 3 Fiale"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-[var(--dark)] mb-2">Kit 3 Fiale</h3>
              <p className="text-gray-500 mb-6">3x GLP-3 RT 10mg • Purezza 99%+</p>
              <div className="mb-2">
                <span className="text-5xl font-bold gradient-text">€399</span>
              </div>
              <p className="text-green-500 font-semibold mb-6">Risparmi €192!</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-[var(--coral)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  3 Certificati di Analisi inclusi
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-[var(--coral)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Kit ricostituzione GRATUITO
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-[var(--coral)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Spedizione express prioritaria
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-[var(--coral)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Supporto scientifico dedicato
                </li>
              </ul>
              <button className="btn-primary w-full">
                Ordina Ora →
              </button>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
            <div className="flex items-center gap-2 text-gray-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm">Pagamento sicuro SSL</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm">Garanzia qualità 100%</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
              <span className="text-sm">Spedizione refrigerata</span>
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
                <span className="font-semibold text-[var(--dark)]">Come posso verificare la purezza dei vostri prodotti?</span>
                <svg className="w-5 h-5 text-[var(--coral)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Ogni prodotto viene fornito con un Certificato di Analisi (CoA) che include i risultati dei test HPLC per la purezza, test di sterilità, analisi delle endotossine e screening per metalli pesanti. I test vengono eseguiti da laboratori indipendenti accreditati ISO 17025.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-white rounded-2xl shadow-sm">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-semibold text-[var(--dark)]">Come vengono conservati e spediti i peptidi?</span>
                <svg className="w-5 h-5 text-[var(--coral)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                I nostri peptidi sono liofilizzati per la massima stabilità. Vengono spediti con imballaggio refrigerato professionale per mantenere la catena del freddo. Una volta ricevuti, conservare a -20°C per la massima durata. I peptidi ricostituiti devono essere conservati a 2-8°C.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-white rounded-2xl shadow-sm">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-semibold text-[var(--dark)]">Quali sono i tempi di consegna?</span>
                <svg className="w-5 h-5 text-[var(--coral)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Gli ordini vengono processati entro 24 ore. La spedizione standard in Italia richiede 2-4 giorni lavorativi, mentre la spedizione express garantisce la consegna in 1-2 giorni. La spedizione è gratuita per tutti gli ordini.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-white rounded-2xl shadow-sm">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-semibold text-[var(--dark)]">Offrite supporto tecnico?</span>
                <svg className="w-5 h-5 text-[var(--coral)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Sì, il nostro team di supporto scientifico è disponibile per rispondere a qualsiasi domanda tecnica sui nostri prodotti. Per i clienti del Kit 3 Fiale offriamo supporto dedicato con consulenza personalizzata.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-[var(--dark)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Investi nella<br />
            <span className="gradient-text">Qualità Certificata</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Con Forever Slim non acquisti solo peptidi: investi in eccellenza certificata, dove la qualità è la nostra massima priorità.
          </p>
          <a href="#ordina" className="btn-primary inline-block text-lg">
            Scopri i Nostri Prodotti →
          </a>
          <p className="mt-6 text-gray-400 text-sm">
            Certificati di analisi inclusi • Spedizione refrigerata gratuita • Supporto scientifico
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
                Peptidi di grado farmaceutico dalla Svizzera. Qualità certificata, purezza garantita.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Prodotti</h4>
              <ul className="space-y-2">
                <li><a href="#ordina" className="text-gray-400 hover:text-white text-sm transition-colors">GLP-3 RT 10mg</a></li>
                <li><a href="#ordina" className="text-gray-400 hover:text-white text-sm transition-colors">Kit 3 Fiale</a></li>
                <li><a href="#qualita" className="text-gray-400 hover:text-white text-sm transition-colors">Certificati di Analisi</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Supporto</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contattaci</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Spedizioni</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Supporto Tecnico</a></li>
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
              © 2026 Forever Slim. Tutti i diritti riservati. Solo per uso di ricerca.
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
