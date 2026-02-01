'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import type { User } from '@supabase/supabase-js'

interface CustomerData {
  nome: string
  cognome: string
  telefono: string
  indirizzo: string
  citta: string
  cap: string
  provincia: string
}

export default function ProfiloPage() {
  const [user, setUser] = useState<User | null>(null)
  const [formData, setFormData] = useState<CustomerData>({
    nome: '', cognome: '', telefono: '', indirizzo: '', citta: '', cap: '', provincia: '',
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const loadProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        router.push('/login')
        return
      }

      setUser(user)

      const { data: customerData } = await supabase
        .from('customers')
        .select('*')
        .eq('id', user.id)
        .single()

      if (customerData) {
        setFormData({
          nome: customerData.nome || '',
          cognome: customerData.cognome || '',
          telefono: customerData.telefono || '',
          indirizzo: customerData.indirizzo || '',
          citta: customerData.citta || '',
          cap: customerData.cap || '',
          provincia: customerData.provincia || '',
        })
      }

      setLoading(false)
    }

    loadProfile()
  }, [router, supabase])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setSaved(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSaving(true)

    try {
      const { error } = await supabase
        .from('customers')
        .update({ ...formData, updated_at: new Date().toISOString() })
        .eq('id', user?.id || '')

      if (error) {
        setError('Errore durante il salvataggio')
        return
      }

      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch {
      setError('Si è verificato un errore')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rose-500"></div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 mb-4 inline-block">
        ← Torna alla dashboard
      </Link>
      <h1 className="text-2xl font-bold mb-2">Il Mio Profilo</h1>
      <p className="text-gray-600 mb-8">Gestisci i tuoi dati personali</p>

      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="font-semibold mb-4">Informazioni Account</h2>
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={user?.email || ''}
              disabled
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="font-semibold mb-4">Dati Personali</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Nome</label>
              <input
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Cognome</label>
              <input
                name="cognome"
                value={formData.cognome}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Telefono</label>
            <input
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="font-semibold mb-4">Indirizzo di Spedizione</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Indirizzo</label>
              <input
                name="indirizzo"
                value={formData.indirizzo}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Città</label>
                <input
                  name="citta"
                  value={formData.citta}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">CAP</label>
                <input
                  name="cap"
                  value={formData.cap}
                  onChange={handleChange}
                  maxLength={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Provincia</label>
                <input
                  name="provincia"
                  value={formData.provincia}
                  onChange={handleChange}
                  maxLength={2}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6">
            {error}
          </div>
        )}

        {saved && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl mb-6">
            ✓ Profilo salvato con successo!
          </div>
        )}

        <button
          type="submit"
          disabled={saving}
          className="w-full bg-rose-500 text-white py-4 rounded-full font-semibold hover:bg-rose-600 transition-colors disabled:opacity-50"
        >
          {saving ? 'Salvataggio...' : 'Salva Modifiche'}
        </button>
      </form>
    </div>
  )
}
