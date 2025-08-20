import { experiences } from "@/lib/data"

export function Experience() {
  return (
    <section id="experience" className="container scroll-mt-24 py-12 sm:py-20">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <ol className="mt-6 relative border-l md:ml-3 border-border">
        {experiences.map((e) => (
          <li key={`${e.company}-${e.period}`} className="ml-4 mb-8">
            <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border bg-background"></div>
            <div className="flex flex-wrap items-baseline gap-x-2">
              <h3 className="font-semibold">{e.role}</h3>
              <span className="text-muted-foreground">@ {e.company}</span>
              <span className="ml-auto text-xs text-muted-foreground">{e.period}</span>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">{e.location}</div>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              {e.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
