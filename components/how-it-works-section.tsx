import { Phone, FileText, Code, Rocket } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Discovery Call",
    description: "We dive deep into your workflow, users, and goals. No sales pitch—just understanding your problem.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Architecture & Proposal",
    description: "We design the AI system and present a clear scope, timeline, and budget. No surprises.",
  },
  {
    number: "03",
    icon: Code,
    title: "Build & Iterate",
    description: "Weekly demos, tight feedback loops. You see progress every step of the way.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description: "We deploy to production, monitor performance, and stick around to ensure success.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A proven process that gets you from idea to production in weeks, not months.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <Card 
                key={step.number}
                className="service-card group relative border border-border/70 bg-secondary/40 transition-all duration-200 ease-out"
                style={{
                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02), 0 1px 3px 0 rgba(0, 0, 0, 0.03)',
                }}
              >
                <CardHeader className="space-y-5">
                  <div className="relative flex items-center gap-4">
                    <div className="relative">
                      <div 
                        className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-200 ease-out group-hover:bg-primary/15"
                        style={{
                          boxShadow: 'inset 0 1px 2px 0 rgba(255, 255, 255, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
                        }}
                      >
                        <step.icon 
                          className="diagram-extrusion h-6 w-6 text-primary transition-all duration-200 ease-out group-hover:scale-[1.05] group-hover:opacity-100" 
                        />
                      </div>
                      <div 
                        className="absolute -top-0.5 left-0.5 right-0.5 h-0.5 rounded-t-lg opacity-25 transition-opacity duration-200 group-hover:opacity-30"
                        style={{
                          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.4), transparent)',
                        }}
                      />
                    </div>
                    <span className="font-mono text-2xl font-bold text-primary/30">
                      {step.number}
                    </span>
                  </div>
                  <CardTitle className="text-foreground text-lg font-semibold leading-tight tracking-tight">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[0.9375rem] leading-relaxed text-muted-foreground/90">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
