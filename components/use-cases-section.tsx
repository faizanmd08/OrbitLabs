import { Bot, FileSearch, MessageSquare, Workflow, Zap, Brain } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const useCases = [
  {
    icon: Bot,
    title: "Autonomous Agents",
    description: "AI that takes action—not just answers questions. Book meetings, update CRMs, send emails.",
  },
  {
    icon: FileSearch,
    title: "Document Intelligence",
    description: "Extract, analyze, and act on unstructured data from PDFs, emails, and forms.",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description: "Customer support, sales assistants, and internal chatbots that actually understand context.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Connect AI to your existing tools and automate multi-step business processes.",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Stream processing, live transcription, and instant AI responses at scale.",
  },
  {
    icon: Brain,
    title: "Custom Fine-tuning",
    description: "Train models on your data to speak your language and know your domain.",
  },
]

export function UseCasesSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What We Build
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From simple integrations to complex autonomous systems.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <Card 
              key={useCase.title} 
              className="service-card group relative border border-border/70 bg-secondary/40 transition-all duration-200 ease-out"
              style={{
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02), 0 1px 3px 0 rgba(0, 0, 0, 0.03)',
              }}
            >
              <CardHeader className="space-y-5">
                <div className="relative">
                  <div 
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-200 ease-out group-hover:bg-primary/15"
                    style={{
                      boxShadow: 'inset 0 1px 2px 0 rgba(255, 255, 255, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
                    }}
                  >
                    <useCase.icon 
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
                <CardTitle className="text-foreground text-lg font-semibold leading-tight tracking-tight">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[0.9375rem] leading-relaxed text-muted-foreground/90">
                  {useCase.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
