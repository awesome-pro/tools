'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react";
import { useAuth } from "@/components/auth/auth-provider"
import { UserMenu } from "@/components/auth/user-menu"

const Header = () => {
  const { setTheme, theme } = useTheme();
  const { user, loading, openAuthModal } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-border/30 h-16 px-4 md:px-12 flex items-center justify-between">
      <Link href={'/'} className="text-2xl md:text-3xl font-bold">
        New<span className="text-primary">Tools</span>
      </Link>

      <span className="flex items-center justify-center gap-2">
        <Button asChild variant="outline" size="icon" className="rounded-full">
          <Link href="https://github.com/awesome-pro/tools">
            <FaGithub />
          </Link>
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="rounded-full"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
        </Button>

        {!loading && (
          user
            ? <UserMenu />
            : (
              <Button size="sm" onClick={openAuthModal}>
                Sign in
              </Button>
            )
        )}
      </span>
    </header>
  )
}

export default Header
