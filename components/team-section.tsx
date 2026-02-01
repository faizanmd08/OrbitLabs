import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const team = [
  {
    name: "Alex Chen",
    role: "Founder & Lead Engineer",
    bio: "Former ML engineer at Stripe. Built AI systems that processed millions of transactions. Obsessed with making AI reliable in production.",
    strengths: ["System Architecture", "LLM Fine-tuning", "Scaling"],
  },
  {
    name: "Jordan Rivera",
    role: "Senior AI Engineer",
    bio: "Ex-Google, worked on conversational AI. Brings deep expertise in NLP, prompt engineering, and building AI that actually understands users.",
    strengths: ["NLP", "Prompt Engineering", "User Research"],
  },
  {
    name: "Sam Patel",
    role: "Full-Stack AI Engineer",
    bio: "YC founder background. Knows what startups need: speed, iteration, and pragmatic solutions. Ships fast without cutting corners.",
    strengths: ["Full-Stack", "DevOps", "Rapid Prototyping"],
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet the Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three engineers. Deep AI expertise. Startup DNA.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3">
          {team.map((member) => (
            <Card 
              key={member.name} 
              className="service-card group relative border border-border/70 bg-secondary/40 transition-all duration-200 ease-out"
              style={{
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.02), 0 1px 3px 0 rgba(0, 0, 0, 0.03)',
              }}
            >
              <CardHeader className="space-y-4">
                <div className="relative">
                  <div 
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-200 ease-out group-hover:bg-primary/15"
                    style={{
                      boxShadow: 'inset 0 1px 2px 0 rgba(255, 255, 255, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
                    }}
                  >
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div 
                    className="absolute -top-0.5 left-0.5 right-0.5 h-0.5 rounded-t-full opacity-25 transition-opacity duration-200 group-hover:opacity-30"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.4), transparent)',
                    }}
                  />
                </div>
                <div>
                  <CardTitle className="text-foreground text-lg font-semibold leading-tight tracking-tight">{member.name}</CardTitle>
                  <CardDescription className="mt-1 text-primary">{member.role}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-[0.9375rem] leading-relaxed text-muted-foreground/90">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.strengths.map((strength) => (
                    <span 
                      key={strength}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {strength}
                    </span>
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
