import { Badge } from './ui/badge'
import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const Hero = () => {
  return (
     <section id='hero' className="mx-auto max-w-4xl px-4 pt-24 pb-20 text-center md:h-[calc(100vh-10rem)]">
        <Badge
          variant="secondary"
          className="mb-6 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          100% Free &amp; Open-Source
        </Badge>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Online tools,
          <br />
          <span className="bg-linear-to-r from-primary via-primary/80 to-primary/70 bg-clip-text text-transparent">
            without the noise.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Free, fast, and private utilities that run entirely in your browser.{" "}
          <span className="text-primary">
            No ads, no sign-ups, no data collection — <strong>just tools that work.</strong>
          </span>
        </p>

        <div className="mt-10 flex flex-col gap-3 items-center justify-center md:flex-row">
          <Button asChild size="lg" className="gap-2 rounded-full px-6 w-full md:w-48">
            <Link href="#tools">
              Browse Tools
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
           <Button asChild variant="outline" className='rounded-full w-full md:w-48'>
            <Link href="https://github.com/awesome-pro/tools">
               Star on GitHub <FaGithub /> 
            </Link>
          </Button>
        </div>

        <p className="mt-6 text-xs text-muted-foreground/70">
          No installation needed — works in any modern browser.
        </p>
      </section>
  )
}

export default Hero