import { ThemeToggle } from "@/components/ThemeToggle"

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
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
        {/* Mobile controls centered - only theme toggle (no nav buttons, like desktop) */}
        <div className="md:hidden flex items-center justify-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
