import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rini P — Data Analytics Portfolio" },
      { name: "description", content: "Portfolio of Rini P, B.Com Computer Application graduate pursuing Data Analytics." },
      { property: "og:title", content: "Rini P — Data Analytics Portfolio" },
      { property: "og:description", content: "B.Com Computer Application graduate currently studying Data Analytics." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const bars = [40, 65, 50, 85, 70, 95];

function Index() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <header className="flex items-center justify-between text-sm text-muted-foreground">
        <span className="font-display text-lg text-foreground">rini.p</span>
        <a href="mailto:rinip@gmail.com" className="hover:text-primary">rinip@gmail.com</a>
      </header>

      <section className="mt-20 grid items-end gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Aspiring Data Analyst</p>
          <h1 className="mt-4 text-6xl leading-none md:text-8xl">Rini P</h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Turning numbers into clear stories. Building a strong foundation in commerce,
            computers and data analytics.
          </p>
          <a
            href="mailto:rinip@gmail.com"
            className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-primary-foreground transition hover:opacity-90"
          >
            Get in touch
          </a>
        </div>
        <div className="flex h-56 items-end gap-3 rounded-lg border bg-card p-6" aria-hidden>
          {bars.map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t-md ${i === bars.length - 1 ? "bg-accent" : "bg-primary/80"}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-3xl">Education</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-8">
            <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-foreground">In progress</span>
            <h3 className="mt-4 text-2xl">Data Analytics Course</h3>
            <p className="mt-2 text-muted-foreground">Currently learning data cleaning, analysis and visualization.</p>
          </div>
          <div className="rounded-lg border bg-card p-8">
            <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">Completed</span>
            <h3 className="mt-4 text-2xl">B.Com Computer Application</h3>
            <p className="mt-2 text-muted-foreground">Commerce degree with a focus on computer applications.</p>
          </div>
        </div>
      </section>

      <section className="mt-24 rounded-lg bg-primary p-10 text-primary-foreground md:p-14">
        <h2 className="text-3xl md:text-4xl">Let's work together</h2>
        <p className="mt-3 opacity-80">Open to internships and entry-level data analyst roles.</p>
        <a href="mailto:rinip@gmail.com" className="mt-6 inline-block text-xl underline underline-offset-4">
          rinip@gmail.com
        </a>
      </section>

      <footer className="mt-16 text-center text-sm text-muted-foreground">© 2026 Rini P</footer>
    </main>
  );
}
