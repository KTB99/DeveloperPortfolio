import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="container scroll-mt-24 py-12 sm:py-20">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-2 text-muted-foreground">I'd love to connect. Reach out via email or follow me online.</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button asChild>
          <a href="mailto:burger68@students.rowan.edu">
            <Mail className="mr-2 h-4 w-4" /> Email
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href="https://www.linkedin.com/in/kyle-burger99/" target="_blank" rel="noreferrer noopener">
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href="https://github.com/KTB99" target="_blank" rel="noreferrer noopener">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </a>
        </Button>
      </div>
    </section>
  )
}
