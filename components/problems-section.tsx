import { AlertCircle, Clock, Code2, Puzzle, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const problems = [
  {
    icon: AlertCircle,
    title: "AI That Breaks in Production",
    description: "Your prototype works great in demos, but falls apart with real user input and edge cases.",
  },
  {
    icon: Puzzle,
    title: "Integration Nightmares",
    description: "Connecting LLMs to your existing systems feels like duct-taping different universes together.",
  },
  {
    icon: Clock,
    title: "Slow Iteration Cycles",
    description: "Every prompt change requires a deploy. Testing is manual. Debugging feels impossible.",
  },
  {
    icon: Users,
    title: "No AI Expertise In-House",
    description: "Your team is great at building product, but AI engineering requires a different skill set.",
  },
  {
    icon: Code2,
    title: "Scaling Concerns",
    description: "What works for 100 users crashes at 10,000. Costs spiral. Latency kills user experience.",
  },
]

export function ProblemsSection() {
  return (
    <section id="problems" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Sound Familiar?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            These are the problems we solve every day for startups like yours.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <Card 
              key={problem.title} 
              className={`service-card group relative border border-border/70 hover:bg-secondary/60 transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:shadow-lg
                hover:shadow-indigo-500/10
                hover:border-indigo-500/30
                ${index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
              `}

            >
              <CardHeader className="space-y-5">
                <div className="relative">
                  <div 
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-200 ease-out group-hover:bg-primary/15"
                    style={{
                      boxShadow: 'inset 0 1px 2px 0 rgba(255, 255, 255, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
                    }}
                  >
                    <problem.icon 
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
                <CardTitle className="text-foreground text-lg font-semibold leading-tight tracking-tight">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[0.9375rem] leading-relaxed text-muted-foreground/90">
                  {problem.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
