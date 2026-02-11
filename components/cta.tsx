import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
     <section className="border-t py-20 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to get things done?
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            No sign-up. No install. Just pick a tool and go.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="gap-2 rounded-full px-6">
              <Link href="#tools">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
  )
}

export default CTA