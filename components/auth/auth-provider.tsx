'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react'
import type { User } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase/client'
import { AuthModal } from './auth-modal'

interface AuthContextType {
  user: User | null
  loading: boolean
  openAuthModal: () => void
  closeAuthModal: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  openAuthModal: () => {},
  closeAuthModal: () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const supabase = useRef(createClient())

  useEffect(() => {
    supabase.current.auth.getUser().then(({ data }) => {
      setUser(data.user)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.current.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null)
      if (session?.user) setIsModalOpen(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        openAuthModal: () => setIsModalOpen(true),
        closeAuthModal: () => setIsModalOpen(false),
      }}
    >
      {children}
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
