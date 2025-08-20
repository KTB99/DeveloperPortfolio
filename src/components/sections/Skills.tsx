import { Badge } from "@/components/ui/badge"
import { skills, type SkillCategory } from "@/lib/data"

export function Skills() {
  return (
    <section id="skills" className="container scroll-mt-24 py-12 sm:py-20">
      <h2 className="text-2xl font-semibold">Technical Skills</h2>
      <div className="mt-5 grid gap-5 sm:gap-7">
        {skills.map((group: SkillCategory) => (
          <div key={group.category}>
            <h3 className="text-sm font-medium text-muted-foreground">{group.category}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={`${group.category}-${item}`} variant="secondary">{item}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
