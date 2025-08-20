import { useState } from "react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container relative flex h-16 items-center justify-center">
  {/* Centered nav links on desktop and tried to match to Hero max width */}
  <nav className="hidden md:flex items-center justify-center gap-6 mx-auto max-w-3xl w-full">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        {/* Right-aligned theme toggle on desktop */}
        <div className="hidden md:block absolute right-2 sm:right-4">
          <ThemeToggle />
        </div>
        {/* Mobile controls centered */}
        <div className="md:hidden flex items-center justify-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="icon" aria-label="Toggle Menu" onClick={() => setOpen(o => !o)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      <div className={cn("md:hidden border-t bg-background", open ? "block" : "hidden")}> 
        <div className="container py-2 grid">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-1.5 py-2 text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
