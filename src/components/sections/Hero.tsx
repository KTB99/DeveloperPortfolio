import { Button } from "@/components/ui/button"

export function Hero() {
  return (
  <section id="home" className="container scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">Hello, I'm</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Kyle Burger</h1>
        <p className="mt-3 text-xl text-muted-foreground">Full-stack Engineer • UI/UX Designer</p>
        <p className="mt-6 text-muted-foreground">
          I build open-source and enterprise applications with a focus on automation, AI tooling, and cloud technologies — solving real-world problems with clean, efficient code.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="#contact">
            <Button variant="outline">Contact Me</Button>
          </a>
        </div>
      </div>
    </section>
  )
}
