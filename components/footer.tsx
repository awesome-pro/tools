import Link from 'next/link'
import { FaXTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border" role="contentinfo">
        <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-4">
            <Link href={'/'} className="text-lg font-bold hover:text-accent transition-colors">New<span className='text-primary'>Tools</span></Link>
            <div className="flex items-center gap-6">
                <Link href="https://x.com/abhinandan_ai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2" aria-label="Follow Browzer on X (Twitter)">
                <FaXTwitter size={20} />
                </Link>
                <Link href="https://www.linkedin.com/in/abhinandan-verma" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2" aria-label="Follow Browzer on LinkedIn">
                <FaLinkedin size={20} />
                </Link>
                <Link href="https://github.com/awesome-pro/tools" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2" aria-label="View Browzer on GitHub">
                <FaGithub size={20} />
                </Link>
                <a href="https://www.youtube.com/@abhi_is_building" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2" aria-label="Subscribe to Browzer on YouTube">
                <FaYoutube size={20} />
                </a>
            </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} NewTools All rights reserved.</span>
            <span className="hidden sm:inline">|</span>
            <div className="flex items-center gap-4">
                <Link href={'/privacy'} className="hover:text-foreground transition-colors">
                Privacy Policy
                </Link>
                <Link href={"/terms" } className="hover:text-foreground transition-colors">
                Terms of Service
                </Link>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer