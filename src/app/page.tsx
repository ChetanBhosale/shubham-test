import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-border">
        <span className="text-xl font-bold tracking-tight">Shubham.</span>
        <div className="flex gap-4">
          <a href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Work
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32 md:py-44">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
          Designer from Bihar, India
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl leading-tight">
          Hi, I&apos;m Shubham — I design experiences that feel right.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-md">
          Crafting clean, thoughtful interfaces for brands and products that want to stand out.
        </p>
        <div className="mt-10 flex gap-4">
          <Button size="lg" asChild>
            <a href="#work">View My Work</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-10 text-center">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Brand Identity — Flavor Co.", desc: "Logo, color system & packaging" },
            { title: "Web Design — TechStart", desc: "Landing page & design system" },
            { title: "Mobile App — FitTrack", desc: "UI/UX for a fitness tracker" },
            { title: "Dashboard — Analytics Pro", desc: "Data visualization interface" },
          ].map((project) => (
            <div
              key={project.title}
              className="group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="h-32 rounded-lg bg-muted mb-4" />
              <h3 className="font-medium">{project.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-muted/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">About Me</h2>
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m Shubham, a designer based in Bihar, India. I specialize in UI/UX design,
            brand identity, and creating digital products that are both beautiful and functional.
            With a keen eye for detail and a passion for clean aesthetics, I help businesses
            communicate their story through design.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Let&apos;s Work Together</h2>
        <p className="text-muted-foreground mb-8">
          Have a project in mind? I&apos;d love to hear about it.
        </p>
        <Button size="lg" asChild>
          <a href="mailto:shubham@example.com">Say Hello →</a>
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-6 text-center text-sm text-muted-foreground">
        © 2026 Shubham. Designed with ♥ in Bihar.
      </footer>
    </div>
  );
}
