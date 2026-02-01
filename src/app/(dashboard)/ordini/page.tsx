'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import type { Order } from '@/types/database'

export default function OrdiniPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const loadOrders = async () => {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        router.push('/login')
        return
      }

      const { data: ordersData } = await supabase
        .from('orders')
        .select('*')
        .eq('customer_id', user.id)
        .order('created_at', { ascending: false })

      if (ordersData) {
        setOrders(ordersData)
      }

      setLoading(false)
    }

    loadOrders()
  }, [router, supabase])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rose-500"></div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 mb-4 inline-block">
        ← Torna alla dashboard
      </Link>
      <h1 className="text-2xl font-bold mb-2">I Miei Ordini</h1>
      <p className="text-gray-600 mb-8">Visualizza lo storico dei tuoi ordini</p>

      {orders.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
          <p className="text-gray-600 mb-4">Nessun ordine ancora</p>
          <Link href="/" className="bg-rose-500 text-white px-6 py-3 rounded-full inline-block">
            Fai il tuo primo ordine
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
                <div>
                  <p className="font-medium">Ordine #{order.id.slice(0, 8).toUpperCase()}</p>
                  <p className="text-sm text-gray-500">
                    {order.created_at && new Date(order.created_at).toLocaleDateString('it-IT')}
                  </p>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                  {order.status || 'pending'}
                </span>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <p className="font-medium">{order.product_type === '1kit' ? '1 Kit Forever Slim' : '3 Kit Forever Slim'}</p>
                  <p className="text-sm text-gray-500">Quantità: {order.quantity || 1}</p>
                </div>
                <p className="text-xl font-bold">€{order.total_amount}</p>
              </div>
              {order.tracking_number && (
                <div className="p-4 border-t">
                  <p className="text-sm text-gray-500">Tracking: {order.tracking_number}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
