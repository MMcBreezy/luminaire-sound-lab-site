export default function LuminaireSoundLabPage() {
  const products = [
    {
      title: "OB-6 Synthwave Presets",
      type: "Preset Pack",
      description:
        "Retro leads, basses, pads, and arps designed for cinematic synthwave and night-drive production with Sequential OB-6.",
      specs: ["60 presets", "Sequential OB-6", "Synthwave / Retrowave"],
    },
    {
      title: "Lo-Fi Tape Drums",
      type: "Sample Pack",
      description:
        "Dusty one-shots and loops with warmth, grit, and movement for mellow hip-hop and lo-fi beats.",
      specs: ["120 samples", "One-shots + loops", "Lo-fi / Chillhop"],
    },
    {
      title: "Ambient Field Textures",
      type: "Sample Pack",
      description:
        "Atmospheric drones, textures, and tonal layers for ambient, film, and game audio work.",
      specs: ["90 textures", "WAV 24-bit", "Ambient / Cinematic"],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-neutral-100">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex flex-col leading-none gap-[2px]">
            <span className="text-[10px] uppercase tracking-[0.45em] text-neutral-500 glow-text">
              Luminaire
            </span>
            <span className="text-xl font-semibold tracking-tight text-white">
              Sound Lab
            </span>
          </div>
          <nav className="hidden gap-8 text-sm text-neutral-300 md:flex">
            <a href="#packs" className="transition hover:text-white">
              Packs
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                Sample Packs • Presets • Sound Design
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
                Original sounds for modern electronic music and game audio.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-neutral-300 md:text-lg">
                Luminaire Sound Lab creates focused sound tools for producers
                and developers: synth presets, one-shots, loops, textures, and
                cinematic audio resources built for modern workflows.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#packs"
                className="rounded-2xl border border-white/20 bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                Explore Packs
              </a>
              <a
                href="https://gumroad.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
              >
                Visit Store
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-neutral-400">
              <span>Featured Demo</span>
              <span>Audio Preview</span>
            </div>
            <div className="rounded-[1.5rem] border border-dashed border-white/15 bg-neutral-900/70 p-6">
              <div className="mb-4 text-lg font-medium">
                OB-6 Synthwave Presets
              </div>
              <div className="mb-6 h-24 rounded-2xl bg-[url('/IMG_7743.JPG')] bg-cover bg-center" />
              <audio controls className="w-full">
                <source src="/audio/SV_OB6_Test_1.mp3" type="audio/mpeg" />
              </audio>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 text-sm text-neutral-300 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 p-5">
              <div className="mb-2 text-xs uppercase tracking-[0.25em] text-neutral-500">
                Focus
              </div>
              <div className="text-base font-medium text-white">
                Curated sound design
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 p-5">
              <div className="mb-2 text-xs uppercase tracking-[0.25em] text-neutral-500">
                Formats
              </div>
              <div className="text-base font-medium text-white">
                WAV, presets
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 p-5">
              <div className="mb-2 text-xs uppercase tracking-[0.25em] text-neutral-500">
                Use Cases
              </div>
              <div className="text-base font-medium text-white">
                Music production and game audio
              </div>
            </div>
          </div>
        </section>

        <section id="packs" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-14">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-neutral-500">
                Featured Packs
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Built for distinct creative worlds.
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.title}
                className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
              >
                <div className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
                  {product.type}
                </div>
                <h3 className="mb-3 text-2xl font-medium">{product.title}</h3>
                <p className="mb-6 flex-1 text-sm leading-6 text-neutral-300">
                  {product.description}
                </p>
                <div className="mb-6 space-y-2 text-sm text-neutral-400">
                  {product.specs.map((spec) => (
                    <div key={spec}>• {spec}</div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://gumroad.com"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/15 bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
                  >
                    Buy Pack
                  </a>
                  <button className="rounded-2xl border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/5">
                    Hear Demo
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="border-t border-white/10">
          <div className="mx-auto max-w-4xl px-6 py-25">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                About
              </p>
              <h2 className="text-3xl font-semibold">
                A focused sound design studio.
              </h2>
            </div>
            <div className="space-y-5 mt-8 text-base leading-8 text-neutral-300">
              <p>
                Luminaire Sound Lab creates sound packs for video game sound
                designers and music producers in synthwave, lo‑fi, ambient, and
                cinematic styles. The mission: build tools that are inspiring,
                polished, and instantly musical
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-white/10 bg-white/[0.02]"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 flex flex-col items-center gap-6">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
              Contact
            </p>

            <a
              href="mailto:hello@luminairesoundlab.com"
              className="rounded-full border border-white/20 bg-white px-8 py-3 text-sm font-medium text-black transition hover:scale-[1.03] hover:shadow-lg hover:shadow-white/10"
            >
              hello@luminairesoundlab.com
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Luminaire Sound Lab</div>
          <div className="flex gap-6">
            <a href="#packs" className="transition hover:text-neutral-300">
              Packs
            </a>
            <a href="#about" className="transition hover:text-neutral-300">
              About
            </a>
            <a href="#contact" className="transition hover:text-neutral-300">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
