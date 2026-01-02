import { useMemo, useState } from "react";

type Service = {
  title: string;
  desc: string;
  bullets: string[];
  badge: string;
};

type GalleryItem = {
  title: string;
  tag: string;
  note: string;
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services: Service[] = useMemo(
    () => [
      {
        title: "Resin Art",
        badge: "Gloss + shimmer",
        desc: "Custom resin pieces with depth, colour, and sparkle—made to your theme.",
        bullets: ["Coasters, plaques, charms", "Colour matching", "Personalised embeds"],
      },
      {
        title: "Needle Felting",
        badge: "Soft + detailed",
        desc: "Hand-felted characters and mini sculptures with tactile charm.",
        bullets: ["Pets & portraits", "Fantasy creatures", "Mini keepsakes"],
      },
      {
        title: "3D Prints",
        badge: "Precise + creative",
        desc: "From prototypes to display pieces—designed and printed to spec.",
        bullets: ["Custom models", "Parts & props", "Finish options"],
      },
      {
        title: "Vinyl Decals",
        badge: "Crisp + clean",
        desc: "High-quality vinyl decals for crafts, gifts, windows, and labels.",
        bullets: ["Names & quotes", "Logo decals", "Colour + size options"],
      },
    ],
    []
  );

  const gallery: GalleryItem[] = useMemo(
    () => [
      { title: "Moonlit Resin Coasters", tag: "Resin", note: "Deep blues + gold flecks" },
      { title: "Felted Bunny Keepsake", tag: "Needle Felt", note: "Soft texture, tiny details" },
      { title: "Custom 3D Printed Charm", tag: "3D Print", note: "Designed from sketch to print" },
      { title: "Personalised Name Decals", tag: "Vinyl Decal", note: "Clean cut + durable" },
      { title: "Crystal Prism Display", tag: "Resin", note: "Iridescent finish" },
      { title: "Mini Creature Sculpture", tag: "Needle Felt", note: "Whimsical + handmade" },
      { title: "Desk Prop / Stand", tag: "3D Print", note: "Functional + aesthetic" },
      { title: "Jar + Label Set", tag: "Vinyl Decal", note: "Perfect for gifting" },
    ],
    []
  );

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div style={styles.page}>
      {/* Top bar */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <button
            onClick={() => scrollTo("top")}
            style={styles.brand}
            aria-label="Dream Imporium home"
          >
            <span style={styles.brandMark}>✦</span>
            <span style={styles.brandText}>Dream Imporium</span>
          </button>

          <nav style={styles.navDesktop} aria-label="Primary navigation">
            <NavLink onClick={() => scrollTo("services")} label="Services" />
            <NavLink onClick={() => scrollTo("process")} label="Process" />
            <NavLink onClick={() => scrollTo("gallery")} label="Gallery" />
            <NavLink onClick={() => scrollTo("contact")} label="Contact" />
            <button style={styles.primaryBtn} onClick={() => scrollTo("contact")}>
              Request a Quote
            </button>
          </nav>

          <button
            style={styles.burger}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div style={styles.mobileMenu} role="dialog" aria-label="Mobile menu">
            <button style={styles.mobileLink} onClick={() => scrollTo("services")}>
              Services
            </button>
            <button style={styles.mobileLink} onClick={() => scrollTo("process")}>
              Process
            </button>
            <button style={styles.mobileLink} onClick={() => scrollTo("gallery")}>
              Gallery
            </button>
            <button style={styles.mobileLink} onClick={() => scrollTo("contact")}>
              Contact
            </button>
            <button style={styles.primaryBtnFull} onClick={() => scrollTo("contact")}>
              Request a Quote
            </button>
          </div>
        )}
      </header>

      {/* Hero */}
      <main id="top" style={styles.main}>
        <section style={styles.hero}>
          <div style={styles.heroGrid}>
            <div>
              <div style={styles.kicker}>Bespoke arts • Handmade + tech-crafted</div>
              <h1 style={styles.h1}>
                Custom creations where <span style={styles.h1Accent}>imagination</span> meets{" "}
                <span style={styles.h1Accent2}>precision</span>.
              </h1>
              <p style={styles.lead}>
                Dream Imporium crafts one-of-a-kind pieces using resin art, needle felting, 3D
                printing, and vinyl decals—made to your theme, your colours, and your story.
              </p>

              <div style={styles.heroCtas}>
                <button style={styles.primaryBtnLarge} onClick={() => scrollTo("contact")}>
                  Start a Custom Order
                </button>
                <button style={styles.secondaryBtnLarge} onClick={() => scrollTo("gallery")}>
                  View Gallery
                </button>
              </div>

              <div style={styles.trustRow}>
                <TrustPill label="Made to order" />
                <TrustPill label="Hand-finished details" />
                <TrustPill label="Design help included" />
              </div>
            </div>

            {/* Feature card */}
            <div style={styles.heroCard}>
              <div style={styles.heroCardTop}>
                <div style={styles.heroCardBadge}>Featured</div>
                <div style={styles.heroCardTitle}>Signature Dream Set</div>
                <div style={styles.heroCardSub}>Resin + felt + decal accents</div>
              </div>

              <div style={styles.previewGrid}>
                <PreviewTile title="Resin" subtitle="Depth + shine" />
                <PreviewTile title="Needle Felt" subtitle="Soft textures" />
                <PreviewTile title="3D Print" subtitle="Precise forms" />
                <PreviewTile title="Vinyl Decals" subtitle="Crisp details" />
              </div>

              <div style={styles.heroCardBottom}>
                <div style={styles.smallText}>
                  Want something similar? Tell us your vibe (fairycore, gothic, minimalist, playful) and we’ll
                  design around it.
                </div>
                <button style={styles.primaryBtnFull} onClick={() => scrollTo("contact")}>
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" style={styles.section}>
          <SectionHeader
            title="Services"
            subtitle="Pick a technique—or combine them for a truly unique piece."
          />
          <div style={styles.cardsGrid}>
            {services.map((s) => (
              <div key={s.title} style={styles.card}>
                <div style={styles.cardTopRow}>
                  <h3 style={styles.h3}>{s.title}</h3>
                  <span style={styles.badge}>{s.badge}</span>
                </div>
                <p style={styles.p}>{s.desc}</p>
                <ul style={styles.ul}>
                  {s.bullets.map((b) => (
                    <li key={b} style={styles.li}>
                      <span style={styles.bulletDot}>•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" style={styles.sectionAlt}>
          <SectionHeader
            title="How it works"
            subtitle="A simple, collaborative process from idea to finished piece."
          />
          <div style={styles.stepsGrid}>
            <Step
              n="01"
              title="Share your idea"
              desc="Tell us what you want, the vibe, colours, size, and any references."
            />
            <Step
              n="02"
              title="Design + quote"
              desc="We’ll confirm materials (resin/felt/3D print/vinyl decals), timeline, and cost."
            />
            <Step
              n="03"
              title="Make + refine"
              desc="We craft your piece with care—sharing progress updates when helpful."
            />
            <Step
              n="04"
              title="Finish + deliver"
              desc="Final details, quality check, and it’s ready for pickup or shipping."
            />
          </div>

          <div style={styles.ctaStrip}>
            <div>
              <div style={styles.ctaTitle}>Not sure what technique you need?</div>
              <div style={styles.ctaText}>Describe the outcome and we’ll recommend the best approach.</div>
            </div>
            <button style={styles.secondaryBtnLarge} onClick={() => scrollTo("contact")}>
              Ask for Recommendations
            </button>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" style={styles.section}>
          <SectionHeader
            title="Gallery"
            subtitle="Examples of the kinds of custom pieces we can create (your order will be unique)."
          />
          <div style={styles.galleryGrid}>
            {gallery.map((g) => (
              <div key={g.title} style={styles.galleryCard}>
                <div style={styles.galleryThumb} aria-hidden="true">
                  <div style={styles.galleryThumbInner}>
                    <span style={styles.galleryTag}>{g.tag}</span>
                    <span style={styles.gallerySparkle}>✦</span>
                  </div>
                </div>
                <div style={styles.galleryBody}>
                  <div style={styles.galleryTitle}>{g.title}</div>
                  <div style={styles.smallText}>{g.note}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={styles.sectionAlt}>
          <SectionHeader
            title="Contact"
            subtitle="Send a request and we’ll reply with questions, options, and a quote."
          />

          <div style={styles.contactGrid}>
            <div style={styles.contactCard}>
              <h3 style={styles.h3}>Custom Order Request</h3>
              <p style={styles.p}>
                This form is front-end only. To make it send emails automatically, connect it to an API (Amplify
                Functions/Lambda).
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks! Wire this form to an API when you're ready.");
                }}
                style={styles.form}
              >
                <label style={styles.label}>
                  Name
                  <input style={styles.input} placeholder="Your name" required />
                </label>
                <label style={styles.label}>
                  Email
                  <input style={styles.input} type="email" placeholder="you@example.com" required />
                </label>
                <label style={styles.label}>
                  What would you like made?
                  <textarea
                    style={styles.textarea}
                    placeholder="Describe your idea, theme/vibe, colours, size, and any references."
                    required
                  />
                </label>

                <div style={styles.inlineRow}>
                  <label style={styles.label} className="w-full">
                    Preferred techniques
                    <input
                      style={styles.input}
                      placeholder="Resin / Needle Felting / 3D Print / Vinyl Decals (or 'not sure')"
                    />
                  </label>
                </div>

                <button style={styles.primaryBtnLarge} type="submit">
                  Send Request
                </button>
              </form>
            </div>

            <div style={styles.contactCard}>
              <h3 style={styles.h3}>Quick Details</h3>
              <div style={styles.infoBlock}>
                <InfoRow label="Turnaround" value="Varies by complexity (we’ll confirm with your quote)" />
                <InfoRow label="Customisation" value="Colours, themes, names, sizes, finishes" />
                <InfoRow label="Styles" value="Fairycore • Gothic • Minimalist • Playful" />
              </div>

              <div style={styles.divider} />

              <h3 style={styles.h3}>Socials</h3>
              <p style={styles.p}>
                Add your real links here:
              </p>
              <div style={styles.socialList}>
                <a style={styles.socialLink} href="#" onClick={(e) => e.preventDefault()}>
                  Instagram → @dreamimporium
                </a>
                <a style={styles.socialLink} href="#" onClick={(e) => e.preventDefault()}>
                  Etsy → DreamImporium
                </a>
                <a style={styles.socialLink} href="#" onClick={(e) => e.preventDefault()}>
                  Email → hello@dreamimporium.com
                </a>
              </div>

              <div style={styles.divider} />

              <div style={styles.smallText}>
                Tip: If you want a storefront + payments, connect this site to Shopify/Etsy links, or build an
                Amplify + Stripe checkout later.
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <div style={styles.footerInner}>
            <div style={styles.footerBrand}>
              <span style={styles.brandMark}>✦</span> Dream Imporium
            </div>
            <div style={styles.footerNote}>© {new Date().getFullYear()} Dream Imporium. All rights reserved.</div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function NavLink({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} style={styles.navLink}>
      {label}
    </button>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={styles.sectionHeader}>
      <h2 style={styles.h2}>{title}</h2>
      <p style={styles.subhead}>{subtitle}</p>
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div style={styles.stepCard}>
      <div style={styles.stepN}>{n}</div>
      <div style={styles.stepTitle}>{title}</div>
      <div style={styles.smallText}>{desc}</div>
    </div>
  );
}

function TrustPill({ label }: { label: string }) {
  return <div style={styles.pill}>{label}</div>;
}

function PreviewTile({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={styles.previewTile}>
      <div style={styles.previewTitle}>{title}</div>
      <div style={styles.previewSub}>{subtitle}</div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={styles.infoRow}>
      <div style={styles.infoLabel}>{label}</div>
      <div style={styles.infoValue}>{value}</div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(1200px 600px at 20% 10%, rgba(123, 97, 255, 0.20), transparent 60%)," +
      "radial-gradient(900px 500px at 80% 20%, rgba(0, 204, 255, 0.14), transparent 55%)," +
      "linear-gradient(180deg, #070714 0%, #0B0B1B 100%)",
    color: "rgba(255,255,255,0.92)",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    backdropFilter: "blur(12px)",
    background: "rgba(9, 9, 22, 0.65)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  headerInner: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "14px 18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "transparent",
    border: "none",
    color: "rgba(255,255,255,0.95)",
    cursor: "pointer",
    padding: 0,
  },
  brandMark: {
    display: "inline-flex",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    background: "linear-gradient(135deg, rgba(123,97,255,0.35), rgba(0,204,255,0.22))",
    border: "1px solid rgba(255,255,255,0.14)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
  },
  brandText: { fontWeight: 700, letterSpacing: 0.2 },
  navDesktop: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  navLink: {
    background: "transparent",
    border: "1px solid transparent",
    color: "rgba(255,255,255,0.85)",
    padding: "10px 10px",
    borderRadius: 12,
    cursor: "pointer",
  },
  burger: {
    display: "none",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "rgba(255,255,255,0.9)",
    borderRadius: 12,
    padding: "10px 12px",
    cursor: "pointer",
  },
  mobileMenu: {
    display: "none",
    maxWidth: 1100,
    margin: "0 auto",
    padding: "10px 18px 16px",
    gap: 10,
  },
  mobileLink: {
    width: "100%",
    textAlign: "left",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    color: "rgba(255,255,255,0.90)",
    padding: "12px 12px",
    borderRadius: 14,
    cursor: "pointer",
  },
  main: { width: "100%" },
  hero: { maxWidth: 1100, margin: "0 auto", padding: "54px 18px 10px" },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.25fr 0.9fr",
    gap: 18,
    alignItems: "stretch",
  },
  kicker: {
    display: "inline-flex",
    padding: "7px 10px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    color: "rgba(255,255,255,0.84)",
    fontSize: 13,
    letterSpacing: 0.2,
  },
  h1: { fontSize: 46, lineHeight: 1.05, margin: "14px 0 10px", letterSpacing: -0.6 },
  h1Accent: { color: "rgba(185, 167, 255, 1)" },
  h1Accent2: { color: "rgba(120, 230, 255, 1)" },
  lead: { fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.80)", maxWidth: 620 },
  heroCtas: { display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" },
  trustRow: { display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" },
  pill: {
    padding: "8px 10px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.10)",
    color: "rgba(255,255,255,0.82)",
    fontSize: 13,
  },
  heroCard: {
    borderRadius: 20,
    border: "1px solid rgba(255,255,255,0.12)",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  heroCardTop: { padding: 18, borderBottom: "1px solid rgba(255,255,255,0.08)" },
  heroCardBadge: {
    display: "inline-flex",
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(123,97,255,0.18)",
    border: "1px solid rgba(123,97,255,0.28)",
    fontSize: 12,
    color: "rgba(240,235,255,0.95)",
  },
  heroCardTitle: { marginTop: 10, fontSize: 18, fontWeight: 700 },
  heroCardSub: { marginTop: 4, fontSize: 13, color: "rgba(255,255,255,0.75)" },
  previewGrid: { padding: 18, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 },
  previewTile: {
    borderRadius: 16,
    padding: 12,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(0,0,0,0.18)",
  },
  previewTitle: { fontWeight: 700 },
  previewSub: { marginTop: 3, fontSize: 12, color: "rgba(255,255,255,0.70)" },
  heroCardBottom: { padding: 18, display: "grid", gap: 12 },
  smallText: { fontSize: 13, lineHeight: 1.55, color: "rgba(255,255,255,0.72)" },

  section: { maxWidth: 1100, margin: "0 auto", padding: "46px 18px" },
  sectionAlt: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "46px 18px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.02)",
  },
  sectionHeader: { marginBottom: 18 },
  h2: { fontSize: 28, margin: 0, letterSpacing: -0.3 },
  subhead: { marginTop: 8, marginBottom: 0, color: "rgba(255,255,255,0.75)", maxWidth: 720 },

  cardsGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 },
  card: {
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(0,0,0,0.18)",
    padding: 16,
    boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
  },
  cardTopRow: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 },
  h3: { margin: 0, fontSize: 16, letterSpacing: -0.2 },
  badge: {
    fontSize: 12,
    padding: "5px 8px",
    borderRadius: 999,
    background: "rgba(0,204,255,0.10)",
    border: "1px solid rgba(0,204,255,0.20)",
    color: "rgba(220,250,255,0.92)",
    whiteSpace: "nowrap",
  },
  p: { marginTop: 10, marginBottom: 10, color: "rgba(255,255,255,0.75)", lineHeight: 1.6 },
  ul: { paddingLeft: 0, margin: 0, listStyle: "none", display: "grid", gap: 8 },
  li: { display: "flex", gap: 10, color: "rgba(255,255,255,0.80)", fontSize: 13, lineHeight: 1.4 },
  bulletDot: { color: "rgba(185,167,255,1)" },

  stepsGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 },
  stepCard: {
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(0,0,0,0.18)",
    padding: 16,
  },
  stepN: { fontWeight: 800, letterSpacing: 1.2, color: "rgba(185,167,255,1)" },
  stepTitle: { marginTop: 8, fontWeight: 700 },

  ctaStrip: {
    marginTop: 18,
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "linear-gradient(135deg, rgba(123,97,255,0.16), rgba(0,204,255,0.10))",
    padding: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
  },
  ctaTitle: { fontWeight: 800 },
  ctaText: { marginTop: 4, color: "rgba(255,255,255,0.78)", fontSize: 13 },

  galleryGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 },
  galleryCard: {
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(0,0,0,0.18)",
    overflow: "hidden",
  },
  galleryThumb: {
    height: 120,
    background:
      "radial-gradient(120px 80px at 20% 30%, rgba(185,167,255,0.28), transparent 60%)," +
      "radial-gradient(120px 80px at 70% 20%, rgba(0,204,255,0.18), transparent 55%)," +
      "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
  },
  galleryThumbInner: {
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: 12,
  },
  galleryTag: {
    fontSize: 12,
    padding: "5px 8px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.16)",
    color: "rgba(255,255,255,0.86)",
  },
  gallerySparkle: { opacity: 0.8 },
  galleryBody: { padding: 12 },
  galleryTitle: { fontWeight: 700 },

  contactGrid: { display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: 14 },
  contactCard: {
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(0,0,0,0.18)",
    padding: 16,
  },
  form: { display: "grid", gap: 12, marginTop: 12 },
  label: { display: "grid", gap: 6, fontSize: 13, color: "rgba(255,255,255,0.85)" },
  input: {
    padding: "12px 12px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(0,0,0,0.25)",
    color: "rgba(255,255,255,0.92)",
    outline: "none",
  },
  textarea: {
    minHeight: 120,
    padding: "12px 12px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(0,0,0,0.25)",
    color: "rgba(255,255,255,0.92)",
    outline: "none",
    resize: "vertical",
  },
  inlineRow: { display: "grid", gridTemplateColumns: "1fr", gap: 12 },

  infoBlock: { display: "grid", gap: 10, marginTop: 10 },
  infoRow: { display: "grid", gap: 4 },
  infoLabel: { fontSize: 12, color: "rgba(255,255,255,0.65)" },
  infoValue: { fontSize: 13, color: "rgba(255,255,255,0.86)" },
  divider: { height: 1, background: "rgba(255,255,255,0.10)", margin: "14px 0" },
  socialList: { display: "grid", gap: 10, marginTop: 8 },
  socialLink: {
    color: "rgba(185,167,255,0.95)",
    textDecoration: "none",
    padding: "10px 10px",
    borderRadius: 14,
    border: "1px solid rgba(185,167,255,0.22)",
    background: "rgba(185,167,255,0.08)",
  },

  footer: { padding: "30px 18px 60px" },
  footerInner: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
  },
  footerBrand: { display: "flex", alignItems: "center", gap: 10, fontWeight: 700 },
  footerNote: { color: "rgba(255,255,255,0.65)", fontSize: 13 },

  primaryBtn: {
    background: "linear-gradient(135deg, rgba(185,167,255,0.95), rgba(120,230,255,0.85))",
    border: "1px solid rgba(255,255,255,0.18)",
    color: "rgba(10,10,20,0.95)",
    padding: "10px 12px",
    borderRadius: 14,
    cursor: "pointer",
    fontWeight: 800,
  },
  primaryBtnFull: {
    width: "100%",
    background: "linear-gradient(135deg, rgba(185,167,255,0.95), rgba(120,230,255,0.85))",
    border: "1px solid rgba(255,255,255,0.18)",
    color: "rgba(10,10,20,0.95)",
    padding: "12px 12px",
    borderRadius: 14,
    cursor: "pointer",
    fontWeight: 800,
  },
  primaryBtnLarge: {
    background: "linear-gradient(135deg, rgba(185,167,255,0.95), rgba(120,230,255,0.85))",
    border: "1px solid rgba(255,255,255,0.18)",
    color: "rgba(10,10,20,0.95)",
    padding: "14px 14px",
    borderRadius: 16,
    cursor: "pointer",
    fontWeight: 900,
  },
  secondaryBtnLarge: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.14)",
    color: "rgba(255,255,255,0.92)",
    padding: "14px 14px",
    borderRadius: 16,
    cursor: "pointer",
    fontWeight: 800,
  },

  // Responsive via simple JS/CSS fallback:
  // For a real project, move this to CSS with media queries.
};

// Simple responsive tweaks (Vite/React runs this fine)
// If you prefer, I can convert to proper CSS media queries.
const mq = window.matchMedia?.("(max-width: 920px)");
if (mq?.matches) {
  styles.heroGrid.gridTemplateColumns = "1fr";
  styles.cardsGrid.gridTemplateColumns = "1fr 1fr";
  styles.stepsGrid.gridTemplateColumns = "1fr 1fr";
  styles.galleryGrid.gridTemplateColumns = "1fr 1fr";
  styles.contactGrid.gridTemplateColumns = "1fr";
  styles.h1.fontSize = 40;
  styles.navDesktop.display = "none";
  styles.burger.display = "inline-flex";
  styles.mobileMenu.display = "grid";
}

const mq2 = window.matchMedia?.("(max-width: 560px)");
if (mq2?.matches) {
  styles.cardsGrid.gridTemplateColumns = "1fr";
  styles.stepsGrid.gridTemplateColumns = "1fr";
  styles.galleryGrid.gridTemplateColumns = "1fr";
  styles.h1.fontSize = 34;
}
