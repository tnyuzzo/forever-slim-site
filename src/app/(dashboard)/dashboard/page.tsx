'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import type { User } from '@supabase/supabase-js'
import type { Order } from '@/types/database'

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        router.push('/login')
        return
      }

      setUser(user)

      const { data: ordersData } = await supabase
        .from('orders')
        .select('*')
        .eq('customer_id', user.id)
        .order('created_at', { ascending: false })
        .limit(5)

      if (ordersData) {
        setOrders(ordersData)
      }

      setLoading(false)
    }

    getUser()
  }, [router, supabase])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rose-500"></div>
      </div>
    )
  }

  const userName = user?.user_metadata?.nome || user?.email?.split('@')[0] || 'Cliente'

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Ciao, {userName}!</h1>
          <p className="text-gray-600">Benvenuta nella tua area personale</p>
        </div>
        <button onClick={handleLogout} className="text-gray-600 hover:text-red-600">
          Esci
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Link href="/" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-rose-500 text-xl">🛒</span>
          </div>
          <h3 className="font-semibold">Nuovo Ordine</h3>
          <p className="text-sm text-gray-600">Acquista Forever Slim</p>
        </Link>

        <Link href="/ordini" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-cyan-500 text-xl">📦</span>
          </div>
          <h3 className="font-semibold">I Miei Ordini</h3>
          <p className="text-sm text-gray-600">Visualizza storico</p>
        </Link>

        <Link href="/profilo" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-purple-500 text-xl">👤</span>
          </div>
          <h3 className="font-semibold">Il Mio Profilo</h3>
          <p className="text-sm text-gray-600">Modifica dati</p>
        </Link>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold mb-4">Ordini Recenti</h2>
        {orders.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">Nessun ordine ancora</p>
            <Link href="/" className="bg-rose-500 text-white px-6 py-3 rounded-full inline-block">
              Fai il tuo primo ordine
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-medium">{order.product_type === '1kit' ? '1 Kit' : '3 Kit'}</p>
                  <p className="text-sm text-gray-500">
                    {order.created_at && new Date(order.created_at).toLocaleDateString('it-IT')}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">€{order.total_amount}</p>
                  <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                    {order.status || 'pending'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
