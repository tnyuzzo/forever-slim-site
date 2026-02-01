export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      customers: {
        Row: {
          cap: string | null
          citta: string | null
          cognome: string | null
          created_at: string | null
          email: string
          ghl_contact_id: string | null
          id: string
          indirizzo: string | null
          nome: string | null
          provincia: string | null
          stripe_customer_id: string | null
          telefono: string | null
          updated_at: string | null
        }
        Insert: {
          cap?: string | null
          citta?: string | null
          cognome?: string | null
          created_at?: string | null
          email: string
          ghl_contact_id?: string | null
          id?: string
          indirizzo?: string | null
          nome?: string | null
          provincia?: string | null
          stripe_customer_id?: string | null
          telefono?: string | null
          updated_at?: string | null
        }
        Update: {
          cap?: string | null
          citta?: string | null
          cognome?: string | null
          created_at?: string | null
          email?: string
          ghl_contact_id?: string | null
          id?: string
          indirizzo?: string | null
          nome?: string | null
          provincia?: string | null
          stripe_customer_id?: string | null
          telefono?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      orders: {
        Row: {
          created_at: string | null
          customer_id: string | null
          id: string
          notes: string | null
          product_type: "1kit" | "3kit"
          quantity: number | null
          shipping_address: Json | null
          status: "pending" | "paid" | "shipped" | "delivered" | "cancelled" | null
          stripe_payment_intent_id: string | null
          total_amount: number
          tracking_number: string | null
          tracking_url: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          customer_id?: string | null
          id?: string
          notes?: string | null
          product_type: "1kit" | "3kit"
          quantity?: number | null
          shipping_address?: Json | null
          status?: "pending" | "paid" | "shipped" | "delivered" | "cancelled" | null
          stripe_payment_intent_id?: string | null
          total_amount: number
          tracking_number?: string | null
          tracking_url?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          customer_id?: string | null
          id?: string
          notes?: string | null
          product_type?: "1kit" | "3kit"
          quantity?: number | null
          shipping_address?: Json | null
          status?: "pending" | "paid" | "shipped" | "delivered" | "cancelled" | null
          stripe_payment_intent_id?: string | null
          total_amount?: number
          tracking_number?: string | null
          tracking_url?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      order_status: "pending" | "paid" | "shipped" | "delivered" | "cancelled"
      product_type: "1kit" | "3kit"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Customer = Database['public']['Tables']['customers']['Row']
export type Order = Database['public']['Tables']['orders']['Row']
export type OrderStatus = Database['public']['Enums']['order_status']
export type ProductType = Database['public']['Enums']['product_type']
