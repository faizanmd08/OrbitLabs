"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#problems", label: "Problems" },
  { href: "#process", label: "Process" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="font-mono text-sm font-bold text-primary-foreground">ML</span>
          </div>
          <span className="text-lg font-semibold text-foreground">Mellow Labs</span>
        </a>

        <div className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex md:items-center md:gap-4">
          <Button asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="w-full">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Get in Touch</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
