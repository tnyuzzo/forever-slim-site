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
            <a href="#come-funziona" className="text-gray-600 hover:text-[var(--coral)] transition-colors">Come Funziona</a>
            <a href="#risultati" className="text-gray-600 hover:text-[var(--coral)] transition-colors">Risultati</a>
            <a href="#scienza" className="text-gray-600 hover:text-[var(--coral)] transition-colors">La Scienza</a>
            <a href="#ordina" className="btn-primary text-sm px-6 py-2.5">Prenota Consulenza</a>
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
                <span className="text-sm font-medium text-gray-700">Tecnologia Retatrutide di Terza Generazione</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--dark)] leading-tight mb-6 animate-fade-in-up">
                Il Tuo Metabolismo
                <span className="block gradient-text">Si È Bloccato?</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in-up delay-200">
                Non è colpa tua. Dopo i 35 anni gli ormoni cambiano. Forever Slim riattiva i <strong>3 recettori chiave</strong> del metabolismo, permettendoti di perdere <strong>fino al 28,7% del peso</strong> in modo naturale e duraturo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
                <a href="#ordina" className="btn-primary text-center">
                  Prenota la Tua Consulenza Gratuita →
                </a>
                <a href="#come-funziona" className="btn-secondary text-center">
                  Scopri Come Funziona
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex items-center justify-center lg:justify-start gap-6 mt-10 animate-fade-in-up delay-400">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm text-gray-600 font-medium">Studio Clinico Fase 3</span>
                </div>
                <div className="h-4 w-px bg-gray-300"></div>
                <span className="text-sm text-gray-600">445 Partecipanti</span>
              </div>
            </div>

            <div className="relative animate-fade-in-up delay-200">
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--coral)]/20 to-[var(--mint)]/20 rounded-3xl transform rotate-3"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full">
                  <picture>
                    <source
                      srcSet="/images/products/vial-final-640.webp 640w, /images/products/vial-final-1024.webp 1024w, /images/products/vial-final-1920.webp 1920w"
                      type="image/webp"
                      sizes="(max-width: 640px) 100vw, 400px"
                    />
                    <Image
                      src="/images/products/vial-final-1024.webp"
                      alt="Forever Slim GLP-3 RT 10mg - Fiala Swiss Research"
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
                    <span className="text-2xl">📉</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--dark)]">-28,7% Peso Medio</p>
                    <p className="text-sm text-gray-500">Studio TRIUMPH-4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
            <div>
              <p className="text-3xl font-bold gradient-text">28,7%</p>
              <p className="text-sm text-gray-500">Perdita Peso Media</p>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block"></div>
            <div>
              <p className="text-3xl font-bold gradient-text">3</p>
              <p className="text-sm text-gray-500">Recettori Attivati</p>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block"></div>
            <div>
              <p className="text-3xl font-bold gradient-text">20+</p>
              <p className="text-sm text-gray-500">Anni di Ricerca</p>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block"></div>
            <div>
              <p className="text-3xl font-bold gradient-text">1x</p>
              <p className="text-sm text-gray-500">A Settimana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-red-50 text-red-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Il Ciclo della Frustrazione
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark)] mb-4">
              Perché Non Riesci a Dimagrire
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hai provato diete, palestra, integratori. Hai fatto sacrifici. Ma il peso è sempre lì. O peggio, torna ogni volta. <strong>Non è colpa della tua forza di volontà.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card-premium text-center border-2 border-red-100">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-red-50 flex items-center justify-center">
                <span className="text-3xl">❌</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--dark)] mb-3">Mangiare Meno</h3>
              <p className="text-gray-600">
                Rallenta ulteriormente il metabolismo. Il corpo entra in &quot;modalità sopravvivenza&quot; e conserva il grasso.
              </p>
            </div>

            <div className="card-premium text-center border-2 border-red-100">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-red-50 flex items-center justify-center">
                <span className="text-3xl">❌</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--dark)] mb-3">Allenarsi di Più</h3>
              <p className="text-gray-600">
                Il corpo risparmia energia. Compensi le calorie bruciate senza nemmeno accorgertene.
              </p>
            </div>

            <div className="card-premium text-center border-2 border-red-100">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-red-50 flex items-center justify-center">
                <span className="text-3xl">❌</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--dark)] mb-3">Le Diete</h3>
              <p className="text-gray-600">
                Combattono i sintomi, non la causa. Ignorano come il tuo corpo processa realmente il cibo.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[var(--coral-light)] to-[var(--mint-light)] rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--dark)] mb-4">
              La Verità che Nessuno Ti Ha Detto
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Dopo i 35 anni, il corpo cambia. Gli ormoni che regolano fame, energia e accumulo di grasso iniziano a funzionare in modo diverso. <strong>È biologia, non mancanza di volontà.</strong> Ecco perché le diete che funzionavano a 30 anni ora non funzionano più.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Receptors Section */}
      <section id="come-funziona" className="py-20 md:py-28 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/80 text-[var(--coral)] px-4 py-2 rounded-full text-sm font-medium mb-4">
              La Tecnologia di Terza Generazione
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark)] mb-4">
              La Rivoluzione dei 3 Recettori
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Il tuo metabolismo è controllato da tre &quot;interruttori&quot; ormonali. Se anche solo uno è spento, dimagrire diventa quasi impossibile. <strong>Forever Slim è il primo a riattivarli tutti e tre contemporaneamente.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* GLP-1 */}
            <div className="card-premium text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-4xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--dark)] mb-2">GLP-1</h3>
              <p className="text-[var(--coral)] font-semibold mb-3">Il Regolatore della Sazietà</p>
              <p className="text-gray-600">
                Controlla la fame e il pensiero costante sul cibo. <strong>Spegne il &quot;rumore mentale&quot;</strong> che ti porta a mangiare anche quando non hai realmente fame.
              </p>
            </div>

            {/* GIP */}
            <div className="card-premium text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-4xl">🔥</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--dark)] mb-2">GIP</h3>
              <p className="text-[var(--coral)] font-semibold mb-3">Il Gestore dei Grassi</p>
              <p className="text-gray-600">
                Decide se le calorie vengono bruciate o accumulate come grasso. <strong>Ripristina la sensibilità all&apos;insulina</strong> così il cibo viene processato correttamente.
              </p>
            </div>

            {/* Glucagone */}
            <div className="card-premium text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--dark)] mb-2">Glucagone</h3>
              <p className="text-[var(--coral)] font-semibold mb-3">L&apos;Acceleratore del Metabolismo</p>
              <p className="text-gray-600">
                Determina quante calorie bruci anche a riposo. <strong>Riaccende il metabolismo basale</strong> — il tuo corpo torna a bruciare come faceva prima.
              </p>
            </div>
          </div>

          {/* Comparison */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-[var(--dark)] mb-8 text-center">Confronto tra Generazioni</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <p className="text-sm text-gray-500 mb-2">Prima Generazione</p>
                <p className="text-lg font-bold text-gray-600 mb-1">Ozempic</p>
                <p className="text-4xl font-bold text-gray-400">~15%</p>
                <p className="text-sm text-gray-400 mt-2">1 solo recettore</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <p className="text-sm text-gray-500 mb-2">Seconda Generazione</p>
                <p className="text-lg font-bold text-gray-600 mb-1">Mounjaro</p>
                <p className="text-4xl font-bold text-gray-400">~20%</p>
                <p className="text-sm text-gray-400 mt-2">2 recettori</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[var(--coral-light)] to-[var(--mint-light)] border-2 border-[var(--coral)]">
                <p className="text-sm text-[var(--coral)] mb-2 font-semibold">Terza Generazione</p>
                <p className="text-lg font-bold text-[var(--dark)] mb-1">Forever Slim</p>
                <p className="text-4xl font-bold gradient-text">28,7%</p>
                <p className="text-sm text-[var(--teal)] mt-2 font-medium">3 recettori ✓</p>
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">
              È la differenza tra accendere una lampadina e riaccendere l&apos;intero impianto elettrico.
            </p>
          </div>
        </div>
      </section>

      {/* Clinical Results Section */}
      <section id="risultati" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-[var(--mint-light)] text-[var(--teal)] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Risultati Clinici Ufficiali
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark)] mb-4">
              I Numeri Non Mentono
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Studio TRIUMPH-4 • Eli Lilly • 445 Partecipanti • 68 Settimane
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 font-medium">Perdita peso media</span>
                    <span className="font-bold text-[var(--coral)] text-2xl">-28,7%</span>
                  </div>
                  <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[var(--coral)] to-[var(--teal)] rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 font-medium">Chilogrammi persi in media</span>
                    <span className="font-bold text-[var(--coral)] text-2xl">-32,3 kg</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 font-medium">Partecipanti con perdita &gt;25%</span>
                    <span className="font-bold text-[var(--teal)] text-2xl">58,6%</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 font-medium">Partecipanti con perdita &gt;30%</span>
                    <span className="font-bold text-[var(--teal)] text-2xl">39,4%</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                Fonte: Eli Lilly and Company Press Release, December 11, 2025 — Studio TRIUMPH-4 (NCT05931367)
              </p>
            </div>

            <div className="bg-gradient-to-br from-[var(--coral-light)] to-[var(--mint-light)] rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[var(--dark)] mb-6">Cosa Significa per Te?</h3>
              <div className="space-y-4">
                <div className="bg-white/80 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Se pesi 70 kg</span>
                    <span className="font-bold text-[var(--dark)]">→ 52,5 kg <span className="text-green-500">(-17,5 kg)</span></span>
                  </div>
                </div>
                <div className="bg-white/80 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Se pesi 80 kg</span>
                    <span className="font-bold text-[var(--dark)]">→ 60 kg <span className="text-green-500">(-20 kg)</span></span>
                  </div>
                </div>
                <div className="bg-white/80 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Se pesi 90 kg</span>
                    <span className="font-bold text-[var(--dark)]">→ 67,5 kg <span className="text-green-500">(-22,5 kg)</span></span>
                  </div>
                </div>
                <div className="bg-white/80 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Se pesi 100 kg</span>
                    <span className="font-bold text-[var(--dark)]">→ 75 kg <span className="text-green-500">(-25 kg)</span></span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6 italic">
                Immagina di pesarti tra 90 giorni e vedere un numero che non vedevi da anni.
              </p>
            </div>
          </div>

          {/* Hollywood Secret */}
          <div className="bg-[var(--dark)] rounded-3xl p-8 md:p-12 text-white text-center">
            <span className="text-3xl mb-4 block">⭐</span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Il Segreto di Hollywood</h3>
            <p className="text-gray-300 max-w-3xl mx-auto mb-4">
              Hai notato che le star sono dimagrite tutte insieme? Non è un caso. Hanno accesso ai migliori medici del mondo — professionisti che costano decine di migliaia di dollari al mese. E questi medici hanno scelto proprio questa classe di molecole.
            </p>
            <p className="text-[var(--coral)] font-semibold">
              Se chi fattura milioni col proprio corpo si affida a questa tecnologia, la sicurezza è fuori discussione.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-28 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/80 text-[var(--coral)] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Cosa Aspettarti
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark)] mb-4">
              Settimana dopo Settimana
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {/* Week 1-2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[var(--coral)]">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--coral-light)] flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">😌</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--dark)] text-lg">Settimana 1-2 — Il Silenzio</h4>
                    <p className="text-gray-600 mt-2">
                      Il &quot;rumore mentale&quot; del cibo si spegne. Non pensi più costantemente a cosa mangiare. I pasti diventano normali, non ossessioni. <em className="text-[var(--coral)]">Molte donne descrivono questa sensazione come &quot;liberazione&quot;.</em>
                    </p>
                  </div>
                </div>
              </div>

              {/* Week 3-4 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[var(--teal)]">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--mint-light)] flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--dark)] text-lg">Settimana 3-4 — I Primi Segnali</h4>
                    <p className="text-gray-600 mt-2">
                      I vestiti iniziano a cadere diversamente. La bilancia si muove. L&apos;energia aumenta perché il corpo inizia a usare il grasso come carburante. <em className="text-[var(--teal)]">Ti svegli più leggera — fisicamente e mentalmente.</em>
                    </p>
                  </div>
                </div>
              </div>

              {/* Week 5-8 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-purple-400">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🦋</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--dark)] text-lg">Settimana 5-8 — La Trasformazione Visibile</h4>
                    <p className="text-gray-600 mt-2">
                      Il cambiamento diventa evidente. Le persone intorno a te lo notano. Il metabolismo è riattivato. La perdita di peso accelera. <em className="text-purple-500">&quot;Ma cosa hai fatto?&quot; diventa la domanda più frequente.</em>
                    </p>
                  </div>
                </div>
              </div>

              {/* Week 9-12 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-yellow-400">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--dark)] text-lg">Settimana 9-12 — Il Nuovo Te</h4>
                    <p className="text-gray-600 mt-2">
                      Sei in piena trasformazione. I risultati sono consolidati. Il tuo corpo ha imparato un nuovo modo di gestire fame, energia e grasso. <em className="text-yellow-600">Questo non è un picco temporaneo — è il tuo nuovo baseline.</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Science Section - 20 Years */}
      <section id="scienza" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-[var(--mint-light)] text-[var(--teal)] px-4 py-2 rounded-full text-sm font-medium mb-4">
              20 Anni di Ricerca
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark)] mb-4">
              Nuovo? No. Evoluto.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I regolatori del recettore GLP-1 esistono da oltre 20 anni. Sono stati sviluppati per i pazienti diabetici, milioni dei quali li usano quotidianamente da decenni. <strong>Non stai facendo da cavia per una molecola sperimentale.</strong>
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl">
                <div className="text-center flex-shrink-0 w-24">
                  <p className="text-2xl font-bold text-gray-400">2005</p>
                </div>
                <div className="h-12 w-1 bg-gray-300 rounded flex-shrink-0"></div>
                <div>
                  <p className="font-bold text-gray-600">Prima Generazione</p>
                  <p className="text-sm text-gray-500">Exenatide, Liraglutide — Iniezioni giornaliere, 1 recettore, ~8-10% perdita peso</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl">
                <div className="text-center flex-shrink-0 w-24">
                  <p className="text-2xl font-bold text-gray-400">2017</p>
                </div>
                <div className="h-12 w-1 bg-gray-300 rounded flex-shrink-0"></div>
                <div>
                  <p className="font-bold text-gray-600">Seconda Generazione</p>
                  <p className="text-sm text-gray-500">Semaglutide (Ozempic/Wegovy) — Settimanale, 1 recettore, ~15% perdita peso</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl">
                <div className="text-center flex-shrink-0 w-24">
                  <p className="text-2xl font-bold text-gray-400">2022</p>
                </div>
                <div className="h-12 w-1 bg-gray-300 rounded flex-shrink-0"></div>
                <div>
                  <p className="font-bold text-gray-600">Generazione 2.5</p>
                  <p className="text-sm text-gray-500">Tirzepatide (Mounjaro/Zepbound) — 2 recettori (GLP-1 + GIP), ~20% perdita peso</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-[var(--coral-light)] to-[var(--mint-light)] rounded-2xl border-2 border-[var(--coral)]">
                <div className="text-center flex-shrink-0 w-24">
                  <p className="text-2xl font-bold gradient-text">2025</p>
                </div>
                <div className="h-12 w-1 bg-[var(--coral)] rounded flex-shrink-0"></div>
                <div>
                  <p className="font-bold text-[var(--dark)]">Terza Generazione — RETATRUTIDE</p>
                  <p className="text-sm text-gray-700">TRE recettori (GLP-1 + GIP + Glucagone), <strong>28,7% perdita peso</strong>, il più efficace mai studiato</p>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-500 mt-8 italic">
              È come passare dal primo iPhone all&apos;iPhone attuale: stessa famiglia, tecnologia incomparabilmente superiore.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Beyond Weight */}
      <section className="py-20 md:py-28 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/80 text-[var(--coral)] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Un Investimento sulla Tua Salute
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark)] mb-4">
              Non Solo sul Tuo Peso
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dimagrire è solo l&apos;inizio. Gli studi clinici hanno documentato benefici sistemici che vanno ben oltre la bilancia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <span className="text-3xl mb-4 block">❤️</span>
              <h3 className="font-bold text-[var(--dark)] mb-2">Cuore e Circolazione</h3>
              <p className="text-gray-600 text-sm">Riduzione trigliceridi, colesterolo LDL e pressione arteriosa</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <span className="text-3xl mb-4 block">🍬</span>
              <h3 className="font-bold text-[var(--dark)] mb-2">Metabolismo Zuccheri</h3>
              <p className="text-gray-600 text-sm">Stabilizzazione glicemia, prevenzione diabete tipo 2</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <span className="text-3xl mb-4 block">🫁</span>
              <h3 className="font-bold text-[var(--dark)] mb-2">Fegato</h3>
              <p className="text-gray-600 text-sm">Eliminazione del grasso epatico (steatosi)</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <span className="text-3xl mb-4 block">🦴</span>
              <h3 className="font-bold text-[var(--dark)] mb-2">Articolazioni</h3>
              <p className="text-gray-600 text-sm">Riduzione dolore fino al 75%, più mobilità</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <span className="text-3xl mb-4 block">🛡️</span>
              <h3 className="font-bold text-[var(--dark)] mb-2">Infiammazione</h3>
              <p className="text-gray-600 text-sm">Riduzione marker infiammatori sistemici (hsCRP)</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <span className="text-3xl mb-4 block">⚡</span>
              <h3 className="font-bold text-[var(--dark)] mb-2">Energia</h3>
              <p className="text-gray-600 text-sm">Più vitalità durante il giorno, sonno migliore</p>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8 italic">
            Molte donne iniziano per i vestiti e continuano per come si sentono.
          </p>
        </div>
      </section>

      {/* Quality Section */}
      <section id="qualita" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[var(--mint-light)] text-[var(--teal)] px-4 py-2 rounded-full text-sm font-medium mb-4">
                Qualità Certificata
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--dark)] mb-6">
                Perché Forever Slim e Non &quot;Qualcosa di Simile&quot; Online
              </h2>
              <p className="text-gray-600 mb-6">
                Potresti trovare peptidi su Telegram, forum o siti esteri a prezzi inferiori. Ma un liofilizzato può sembrare identico a un altro — la differenza è in ciò che <strong>non vedi</strong>: metalli pesanti, residui di sintesi, endotossine batteriche.
              </p>
              <p className="text-gray-600 mb-8">
                <strong>Risparmiare €100 su qualcosa che somministri nel tuo corpo ogni settimana non è un risparmio. È una scommessa sulla tua salute.</strong>
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--mint)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--dark)]">Purezza &gt;99% Certificata</h4>
                    <p className="text-gray-600 text-sm">Analisi HPLC da laboratori indipendenti ISO 17025</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--mint)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--dark)]">Produzione GMP</h4>
                    <p className="text-gray-600 text-sm">Standard farmaceutici svizzeri, dosaggio esatto garantito</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--mint)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--dark)]">Test Sterilità e Contaminanti</h4>
                    <p className="text-gray-600 text-sm">Endotossine &lt;0.5 EU/mg, metalli pesanti non rilevati</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-[var(--dark)] mb-6 text-center">Confronto Qualità</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-2 text-sm font-medium text-gray-500 pb-2 border-b">
                  <div></div>
                  <div className="text-center">Grey Market</div>
                  <div className="text-center">Penne Estere</div>
                  <div className="text-center text-[var(--teal)]">Forever Slim</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-sm items-center">
                  <div className="text-gray-600">Origine</div>
                  <div className="text-center text-red-400">❌ Sconosciuta</div>
                  <div className="text-center text-red-400">❌ Non tracciabile</div>
                  <div className="text-center text-green-500">✓ GMP Svizzera</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-sm items-center">
                  <div className="text-gray-600">Purezza</div>
                  <div className="text-center text-red-400">❌ ?</div>
                  <div className="text-center text-yellow-500">~ Variabile</div>
                  <div className="text-center text-green-500">✓ &gt;99%</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-sm items-center">
                  <div className="text-gray-600">Test</div>
                  <div className="text-center text-red-400">❌ Zero</div>
                  <div className="text-center text-red-400">❌ Zero</div>
                  <div className="text-center text-green-500">✓ Certificati</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-sm items-center">
                  <div className="text-gray-600">Supporto</div>
                  <div className="text-center text-red-400">❌ Zero</div>
                  <div className="text-center text-red-400">❌ Zero</div>
                  <div className="text-center text-green-500">✓ Dedicato</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-sm items-center">
                  <div className="text-gray-600">Garanzia</div>
                  <div className="text-center text-red-400">❌ Zero</div>
                  <div className="text-center text-red-400">❌ Zero</div>
                  <div className="text-center text-green-500">✓ 30 giorni</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonianze" className="py-20 md:py-28 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-[var(--coral-light)] text-[var(--coral)] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Storie Vere
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark)] mb-4">
              Chi Ha Già Iniziato il Percorso
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-premium">
              <div className="stars mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6 italic">
                &quot;Ero terrorizzata all&apos;idea dell&apos;iniezione. Alla seconda settimana mi chiedevo perché avessi avuto tutta quella paura. Ora è un gesto di 10 secondi e non ci penso più. E ho perso 14 kg in 2 mesi.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden relative">
                  <Image
                    src="/images/testimonials/testimonial-1.png"
                    alt="Francesca M."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[var(--dark)]">Francesca M.</p>
                  <p className="text-sm text-gray-500">48 anni, Milano</p>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <div className="stars mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6 italic">
                &quot;Il rumore del cibo nella mia testa si è spento. Non ci credevo. Per la prima volta in anni non penso costantemente a cosa mangiare. È una liberazione mentale prima che fisica.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden relative">
                  <Image
                    src="/images/testimonials/testimonial-2.png"
                    alt="Giulia B."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[var(--dark)]">Giulia B.</p>
                  <p className="text-sm text-gray-500">52 anni, Roma</p>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <div className="stars mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6 italic">
                &quot;In menopausa avevo perso ogni speranza. Pensavo che il mio metabolismo fosse condannato. Dopo 3 mesi con Forever Slim ho perso 18 kg e mi sento come quando avevo 35 anni.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden relative">
                  <Image
                    src="/images/testimonials/testimonial-3.png"
                    alt="Marta L."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[var(--dark)]">Marta L.</p>
                  <p className="text-sm text-gray-500">56 anni, Napoli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="ordina" className="py-20 md:py-28 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/80 text-[var(--coral)] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Inizia il Tuo Percorso
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark)] mb-4">
              Non Stai Comprando un Prodotto
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stai iniziando un percorso assistito con supporto dedicato e garanzia soddisfatti o rimborsati.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Kit 1 */}
            <div className="card-premium border-2 border-gray-100 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="/images/products/vial-final-640.webp"
                  alt="Forever Slim Kit 1 Mese - Fiala GLP-3 RT 10mg"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-[var(--dark)] mb-2">Kit 1 Mese</h3>
              <p className="text-gray-500 mb-6">Percorso iniziale • 4 somministrazioni</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-[var(--dark)]">€197</span>
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-[var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fiale liofilizzate + acqua sterile
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-[var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Istruzioni illustrate passo-passo
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-[var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Supporto WhatsApp
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-[var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Garanzia 30 giorni
                </li>
              </ul>
              <button className="btn-secondary w-full">
                Prenota Consulenza
              </button>
            </div>

            {/* Kit 3 - Featured */}
            <div className="card-premium border-2 border-[var(--coral)] text-center relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-coral-mint text-white px-6 py-1.5 rounded-full text-sm font-semibold">
                PIÙ SCELTO
              </div>
              <div className="relative w-48 h-36 mx-auto mb-4 mt-2">
                <Image
                  src="/images/products/kit-final-640.webp"
                  alt="Forever Slim Kit 3 Mesi - Box Premium con Fiala e Acqua Batteriostatica"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-[var(--dark)] mb-2">Kit 3 Mesi</h3>
              <p className="text-gray-500 mb-6">Percorso completo • 12 somministrazioni</p>
              <div className="mb-2">
                <span className="text-5xl font-bold gradient-text">€399</span>
              </div>
              <p className="text-green-500 font-semibold mb-6">Risparmi €192!</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-[var(--coral)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Tutto il contenuto del Kit 1 Mese
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-[var(--coral)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Consulenza personalizzata
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-[var(--coral)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Supporto dedicato prioritario
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-[var(--coral)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Spedizione express gratuita
                </li>
              </ul>
              <button className="btn-primary w-full">
                Prenota Consulenza →
              </button>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-2xl">📦</span>
              <span className="text-sm">Spedizione Discreta</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-2xl">🔒</span>
              <span className="text-sm">Pagamento Sicuro</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-2xl">✅</span>
              <span className="text-sm">Garanzia 30 Giorni</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-2xl">💬</span>
              <span className="text-sm">Supporto WhatsApp</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-[var(--mint-light)] text-[var(--teal)] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Domande Frequenti
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark)] mb-4">
              Hai Qualche Dubbio?
            </h2>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-2xl">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-semibold text-[var(--dark)]">L&apos;iniezione fa male?</span>
                <svg className="w-5 h-5 text-[var(--coral)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Dimentica le iniezioni che ricordi. La micro-somministrazione sottocutanea usa aghi così sottili che la maggior parte delle donne non sente nulla. È un gesto di 10 secondi, una volta a settimana. Molte clienti ci dicono che alla seconda settimana si chiedevano perché avessero avuto tutta quella paura.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-2xl">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-semibold text-[var(--dark)]">È sicuro? Non è una molecola sperimentale?</span>
                <svg className="w-5 h-5 text-[var(--coral)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                I regolatori del recettore GLP-1 esistono da oltre 20 anni. Sono stati sviluppati per i pazienti diabetici, milioni dei quali li usano quotidianamente da decenni. Non stai facendo da cavia — stai usando il risultato di 20 anni di perfezionamento scientifico. Lo studio di Fase 3 TRIUMPH-4 con 445 partecipanti ha confermato il profilo di sicurezza eccellente.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-2xl">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-semibold text-[var(--dark)]">Funziona anche in menopausa?</span>
                <svg className="w-5 h-5 text-[var(--coral)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Forever Slim è particolarmente efficace in menopausa perché fa esattamente l&apos;opposto di quello che fa il calo degli estrogeni: riaccende il metabolismo basale (tramite il Glucagone) e ripristina la sensibilità all&apos;insulina (tramite GLP-1 e GIP). È come se il tuo corpo ricevesse un aggiornamento che compensa il cambiamento ormonale.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-2xl">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-semibold text-[var(--dark)]">Quanto peso posso perdere?</span>
                <svg className="w-5 h-5 text-[var(--coral)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                L&apos;obiettivo di Forever Slim è favorire una riduzione del 15-30% del peso corporeo in circa 90 giorni. Nello studio clinico TRIUMPH-4, i partecipanti hanno perso in media il 28,7% del peso (circa 32 kg) in 68 settimane. I risultati variano da persona a persona, ma il 58,6% ha perso più del 25% del proprio peso.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-2xl">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-semibold text-[var(--dark)]">Chi non dovrebbe usare Forever Slim?</span>
                <svg className="w-5 h-5 text-[var(--coral)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Crediamo nella trasparenza assoluta. Non dovresti utilizzare questo protocollo se hai: insufficienza renale o epatica grave, pancreatite cronica, storia familiare di carcinoma midollare della tiroide, o se sei in gravidanza/allattamento. Durante la consulenza verificheremo insieme la tua idoneità — il nostro obiettivo è il tuo benessere, non una vendita.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-2xl">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-semibold text-[var(--dark)]">Come funziona la garanzia?</span>
                <svg className="w-5 h-5 text-[var(--coral)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Offriamo 30 giorni di garanzia soddisfatti o rimborsati su entrambi i kit. Se non sei soddisfatta, rimborso totale — nessuna domanda, nessuna complicazione. Il nostro obiettivo non è venderti un prodotto, ma accompagnarti verso il risultato.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-[var(--dark)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Pronta a Riaccendere<br />
            <span className="gradient-text">Il Tuo Metabolismo?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            La consulenza è gratuita e senza impegno. Verificheremo insieme se Forever Slim è adatto a te e risponderemo a tutte le tue domande.
          </p>
          <a href="#ordina" className="btn-primary inline-block text-lg">
            Prenota la Tua Consulenza Gratuita →
          </a>
          <p className="mt-6 text-gray-400 text-sm">
            Non sarai mai sola • Supporto dedicato • Garanzia 30 giorni
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
                Tecnologia Retatrutide di Terza Generazione. La rivoluzione dei 3 recettori per un dimagrimento efficace e duraturo.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Percorsi</h4>
              <ul className="space-y-2">
                <li><a href="#ordina" className="text-gray-400 hover:text-white text-sm transition-colors">Kit 1 Mese</a></li>
                <li><a href="#ordina" className="text-gray-400 hover:text-white text-sm transition-colors">Kit 3 Mesi</a></li>
                <li><a href="#risultati" className="text-gray-400 hover:text-white text-sm transition-colors">Risultati Clinici</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Supporto</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contattaci</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Prenota Consulenza</a></li>
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
