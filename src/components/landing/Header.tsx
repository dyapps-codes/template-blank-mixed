import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-sm font-semibold">My App</span>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#cta" className="hover:text-foreground transition-colors">Pricing</a>
        </nav>
        <Link to="/login">
          <Button variant="outline" size="sm">Admin</Button>
        </Link>
      </div>
    </header>
  )
}
