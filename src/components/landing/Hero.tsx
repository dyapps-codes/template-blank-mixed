import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 text-center space-y-6 animate-entrance">
      <Badge variant="secondary" className="text-xs">Now available</Badge>
      <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
        The headline of<br className="hidden sm:block" /> your product
      </h1>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
        One or two sentences explaining what your product does and who it&apos;s for.
        Keep it short and clear.
      </p>
      <div className="flex items-center justify-center gap-3 pt-2">
        <Link to="/login">
          <Button size="lg">
            Get started <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
        <Button variant="outline" size="lg">Learn more</Button>
      </div>
    </section>
  )
}
