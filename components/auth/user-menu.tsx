'use client'

import { useEffect, useRef, useState } from 'react'
import { LogOut, User } from 'lucide-react'
import { toast } from 'sonner'
import { createClient } from '@/lib/supabase/client'
import { useAuth } from './auth-provider'

export function UserMenu() {
  const { user } = useAuth()
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const supabase = createClient()

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  if (!user) return null

  const initials = user.user_metadata?.full_name
    ? user.user_metadata.full_name.split(' ').map((n: string) => n[0]).slice(0, 2).join('').toUpperCase()
    : user.email?.slice(0, 2).toUpperCase() ?? '?'

  const avatarUrl = user.user_metadata?.avatar_url as string | undefined

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) toast.error(error.message)
    else toast.success('Signed out.')
    setOpen(false)
  }

  return (
    <div ref={menuRef} className="relative">
      {/* Avatar trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="h-9 w-9 rounded-full overflow-hidden border border-border flex items-center justify-center bg-primary/10 text-primary text-sm font-semibold hover:ring-2 hover:ring-primary/30 transition-all"
        aria-label="User menu"
      >
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatarUrl} alt="avatar" className="h-full w-full object-cover" />
        ) : (
          initials
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-52 bg-background border border-border rounded-xl shadow-lg py-1 z-50">
          {/* User info */}
          <div className="px-4 py-2 border-b border-border">
            <p className="text-sm font-medium truncate">
              {user.user_metadata?.full_name ?? 'User'}
            </p>
            <p className="text-xs text-muted-foreground truncate">{user.email}</p>
          </div>

          {/* Menu items */}
          <button
            className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors text-left"
            onClick={() => setOpen(false)}
          >
            <User className="h-4 w-4" />
            Profile
          </button>

          <div className="h-px bg-border mx-2 my-1" />

          <button
            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-destructive hover:bg-muted transition-colors text-left"
            onClick={handleSignOut}
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      )}
    </div>
  )
}
