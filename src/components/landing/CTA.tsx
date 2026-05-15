import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section id="cta" className="max-w-6xl mx-auto px-6 py-24 text-center space-y-5">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to get started?</h2>
      <p className="text-muted-foreground max-w-md mx-auto">
        Join thousands of users. No credit card required.
      </p>
      <Link to="/login">
        <Button size="lg">
          Start for free <ArrowRight className="h-4 w-4" />
        </Button>
      </Link>
    </section>
  )
}
