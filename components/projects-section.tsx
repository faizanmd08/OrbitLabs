import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "AI Sales Assistant",
    client: "B2B SaaS Startup",
    description: "Built an autonomous agent that qualifies leads, schedules demos, and handles objections via email and chat. Reduced SDR workload by 60%.",
    tags: ["GPT-4", "LangChain", "Vercel AI SDK", "PostgreSQL"],
  },
  {
    title: "Document Processing Pipeline",
    client: "Legal Tech Company",
    description: "Created an intelligent system that extracts, classifies, and summarizes legal documents. Processes 500+ documents per hour with 98% accuracy.",
    tags: ["Claude", "RAG", "Vector DB", "AWS Lambda"],
  },
  {
    title: "Customer Support Agent",
    client: "E-commerce Platform",
    description: "Deployed an AI agent that handles 80% of support tickets autonomously, escalating complex issues to humans with full context.",
    tags: ["OpenAI", "Fine-tuning", "Redis", "Next.js"],
  },
  {
    title: "Code Review Bot",
    client: "Developer Tools Startup",
    description: "Built a GitHub-integrated agent that reviews PRs, suggests improvements, and catches bugs before they hit production.",
    tags: ["GPT-4", "GitHub API", "TypeScript", "Webhooks"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Recent Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real AI systems we have built for real startups. Names anonymized to protect the innocent.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <Card 
              key={project.title} 
              className="service-card group relative border border-border/70 bg-secondary/40 transition-all duration-200 ease-out"
              style={{
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02), 0 1px 3px 0 rgba(0, 0, 0, 0.03)',
              }}
            >
              <CardHeader className="space-y-3">
                <div className="text-sm font-medium text-primary">{project.client}</div>
                <CardTitle className="text-foreground text-lg font-semibold leading-tight tracking-tight">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-[0.9375rem] leading-relaxed text-muted-foreground/90">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary text-secondary-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
