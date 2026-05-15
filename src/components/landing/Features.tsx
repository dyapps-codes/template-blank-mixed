import { Zap, Shield, BarChart3, type LucideIcon } from 'lucide-react'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Zap,
    title: 'Fast & reliable',
    description: 'Built for performance from day one. Replace this with your key feature.',
  },
  {
    icon: Shield,
    title: 'Secure by default',
    description: 'Your data is protected. Replace this with your second key feature.',
  },
  {
    icon: BarChart3,
    title: 'Insightful analytics',
    description: 'Understand what matters. Replace this with your third key feature.',
  },
]

export function Features() {
  return (
    <section id="features" className="border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Everything you need</h2>
          <p className="text-muted-foreground">Replace these with your actual features.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.title} className="bg-card border border-border rounded-xl p-6 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
