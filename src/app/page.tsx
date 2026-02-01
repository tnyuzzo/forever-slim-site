export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-cyan-50 to-rose-50">
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold">
            <span className="text-rose-500">Forever</span>Slim
          </span>
          <nav className="flex items-center gap-6">
            <a href="#" className="text-gray-600">Home</a>
            <a href="#" className="text-gray-600">Prodotto</a>
            <button className="bg-rose-500 text-white px-6 py-2 rounded-full">Acquista</button>
          </nav>
        </div>
      </header>
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block bg-white border border-gray-200 rounded-full px-4 py-2 text-sm mb-6">
              🇨🇭 Swiss Research Lab
            </span>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Riscopri la tua <span className="text-rose-500">forma migliore</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Il peptide dimagrante di nuova generazione. Qualità svizzera, risultati concreti.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-rose-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg">
                Acquista Ora →
              </button>
              <button className="border-2 border-rose-500 text-rose-500 px-8 py-4 rounded-full font-semibold">
                Scopri di Più
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Scegli il Tuo Kit</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4">1 Kit</h3>
              <div className="text-4xl font-bold mb-6">€197</div>
              <button className="w-full py-4 rounded-full border-2 border-rose-500 text-rose-500 font-semibold">
                Acquista
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 border-2 border-rose-500 shadow-lg text-center relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-500 text-white px-4 py-1 rounded-full text-sm">
                PIÙ VENDUTO
              </span>
              <h3 className="text-2xl font-bold mb-4">3 Kit</h3>
              <div className="text-4xl font-bold mb-2">€399</div>
              <p className="text-green-500 font-semibold mb-4">Risparmi €192!</p>
              <button className="w-full py-4 rounded-full bg-rose-500 text-white font-semibold">
                Acquista
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-gray-900 text-white py-12 text-center">
        <div className="text-2xl font-bold mb-4">
          <span className="text-rose-500">Forever</span>Slim
        </div>
        <p className="text-gray-400">© 2026 Forever Slim. Tutti i diritti riservati.</p>
      </footer>
    </main>
  )
}
