export function About() {
  return (
    <section id="about" className="container scroll-mt-24 py-12 sm:py-20">
      <div className="grid gap-6 md:grid-cols-[180px,1fr] md:gap-10 items-start">
        <div className="w-44 h-44 md:w-48 md:h-48 rounded-full bg-muted overflow-hidden mx-auto md:mx-0">
      <picture className="block w-full h-full">
            <source srcSet="/me.avif" type="image/avif" />
            <source srcSet="/me.webp" type="image/webp" />
            <img
              src="/me.jpg"
              alt="Profile photo"
              className="w-full h-full object-cover object-top"
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-3 text-muted-foreground">
            Computer Science student at Rowan University (graduating Dec 2025)
            with internship experience at Subaru of America and CGI. Skilled in
            full-stack development, automation, and AI tooling to reduce manual
            work and improve operational efficiency.
          </p>
          <p className="mt-3 text-muted-foreground">
            At CGI, developed an AI-powered meeting intelligence tool that processed and analyzed
            meeting content to generate actionable insights, improving workflow
            efficiency; at Subaru, enhanced an internal enterprise platform used
            across service operations, delivering new frontend features, system
            integrations, and occasional backend updates to improve
            functionality and data workflows. Proficient in Python, Java,
            JavaScript, and cloud technologies, with a passion for applying
            technology to solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
}
