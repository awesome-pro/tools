import Link from "next/link"
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-border/30 h-16 px-4 md:px-12 flex items-center justify-between">
        <Link href={'/'} className="text-2xl md:text-3xl font-bold">
            New<span className="text-primary">Tools</span>
        </Link>
        <Button asChild>
          <Link href="https://github.com/awesome-pro/newtools">
              Star on Github
          </Link> 
        </Button>
    </header>
  )
}

export default Header