import { useMemo, useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";

// ✅ add these
import g1 from "./assets/gallery/coasters.png";
import g2 from "./assets/gallery/bunny.png";
import g3 from "./assets/gallery/charm.png";
import g4 from "./assets/gallery/decals.png";


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
  url: string;
  store: "Etsy" | "Made.me";
  imageSrc: string; // ✅ thumbnail
  imageAlt: string; // ✅ accessibility
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

  const ETSY_SHOP_URL = "https://www.etsy.com/shop/Dreamimporium";
  const MADE_SHOP_URL = "https://made.me/your-shop"; // ⬅️ replace when you have it
  const gallery: GalleryItem[] = useMemo(
  () => [
    {
      title: "Moonlit Resin Coasters",
      tag: "Resin",
      note: "Deep blues + gold flecks",
      store: "Etsy",
      url: "https://www.etsy.com/listing/XXXXXXXXXX",
      imageSrc: g1,
      imageAlt: "Moonlit resin coasters with deep blue tones and gold flecks",
    },
    {
      title: "Felted Bunny Keepsake",
      tag: "Needle Felt",
      note: "Soft texture, tiny details",
      store: "Made.me",
      url: "https://made.me/your-shop/your-item-slug",
      imageSrc: g2,
      imageAlt: "Needle-felted bunny keepsake with soft texture",
    },
    {
      title: "Custom 3D Printed Charm",
      tag: "3D Print",
      note: "Designed from sketch to print",
      store: "Etsy",
      url: "https://www.etsy.com/listing/YYYYYYYYYY",
      imageSrc: g3,
      imageAlt: "Custom 3D printed charm",
    },
    {
      title: "Personalised Name Decals",
      tag: "Vinyl Decal",
      note: "Clean cut + durable",
      store: "Made.me",
      url: "https://made.me/your-shop/another-item",
      imageSrc: g4,
      imageAlt: "Vinyl decal name labels in a clean style",
    },
    ],
    []
  );


  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <div className="container headerInner">
          <button onClick={() => scrollTo("top")} className="brand" aria-label="Dream Imporium home">
            <img src={logo} className="brandLogo" alt="Dream Imporium logo" />
            <span className="brandText">Dream Imporium</span>
          </button>

          <nav className="navDesktop" aria-label="Primary navigation">
            <a className="shopBtn" href={ETSY_SHOP_URL} target="_blank" rel="noreferrer">
              Shop on Etsy ↗
            </a>
            <a className="shopBtn" href={MADE_SHOP_URL} target="_blank" rel="noreferrer">
              Shop on Made.me ↗
            </a>
            <button className="navLink" onClick={() => scrollTo("services")}>Services</button>
            <button className="navLink" onClick={() => scrollTo("process")}>Process</button>
            <button className="navLink" onClick={() => scrollTo("gallery")}>Gallery</button>
            <button className="navLink" onClick={() => scrollTo("contact")}>Contact</button>
            <button className="primaryBtn" onClick={() => scrollTo("contact")}>Request a Quote</button>
          </nav>

          <button
            className="burger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="container mobileMenu" role="dialog" aria-label="Mobile menu">
            <button className="mobileLink" onClick={() => scrollTo("services")}>Services</button>
            <button className="mobileLink" onClick={() => scrollTo("process")}>Process</button>
            <button className="mobileLink" onClick={() => scrollTo("gallery")}>Gallery</button>
            <button className="mobileLink" onClick={() => scrollTo("contact")}>Contact</button>
            <button className="primaryBtnFull" onClick={() => scrollTo("contact")}>Request a Quote</button>
          </div>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="container hero">
          <div className="heroGrid">
            <div>
              <div className="kicker">Bespoke arts • Handmade + tech-crafted</div>
              <h1 className="h1">
                Custom creations where <span className="h1Accent">imagination</span> meets{" "}
                <span className="h1Accent2">precision</span>.
              </h1>
              <p className="lead">
                Dream Imporium crafts one-of-a-kind pieces using resin art, needle felting, 3D printing,
                and vinyl decals—made to your theme, your colours, and your story.
              </p>

              <div className="heroCtas">
                <button className="primaryBtnLarge" onClick={() => scrollTo("contact")}>
                  Start a Custom Order
                </button>
                <button className="secondaryBtnLarge" onClick={() => scrollTo("gallery")}>
                  View Gallery
                </button>
              </div>

              <div className="trustRow">
                <div className="pill">Made to order</div>
                <div className="pill">Hand-finished details</div>
                <div className="pill">Design help included</div>
              </div>
            </div>

            <div className="heroCard">
              <div className="heroCardTop">
                <div className="heroCardBadge">Featured</div>
                <div className="heroCardTitle">Signature Dream Set</div>
                <div className="heroCardSub">Resin + felt + decal accents</div>
              </div>

              <div className="previewGrid">
                <div className="previewTile">
                  <div className="previewTitle">Resin</div>
                  <div className="previewSub">Depth + shine</div>
                </div>
                <div className="previewTile">
                  <div className="previewTitle">Needle Felt</div>
                  <div className="previewSub">Soft textures</div>
                </div>
                <div className="previewTile">
                  <div className="previewTitle">3D Print</div>
                  <div className="previewSub">Precise forms</div>
                </div>
                <div className="previewTile">
                  <div className="previewTitle">Vinyl Decals</div>
                  <div className="previewSub">Crisp details</div>
                </div>
              </div>

              <div className="heroCardBottom">
                <div className="smallText">
                  Tell us your vibe (fairycore, gothic, minimalist, playful) and we’ll design around it.
                </div>
                <button className="primaryBtnFull" onClick={() => scrollTo("contact")}>
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="container section">
          <div className="sectionHeader">
            <h2 className="h2">Services</h2>
            <p className="subhead">Pick a technique—or combine them for a truly unique piece.</p>
          </div>

          <div className="cardsGrid">
            {services.map((s) => (
              <div key={s.title} className="card">
                <div className="cardTopRow">
                  <h3 className="h3">{s.title}</h3>
                  <span className="badge">{s.badge}</span>
                </div>
                <p className="p">{s.desc}</p>
                <ul className="ul">
                  {s.bullets.map((b) => (
                    <li key={b} className="li">
                      <span className="bulletDot">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" className="sectionAlt">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="h2">How it works</h2>
              <p className="subhead">A simple, collaborative process from idea to finished piece.</p>
            </div>

            <div className="stepsGrid">
              <div className="stepCard">
                <div className="stepN">01</div>
                <div className="stepTitle">Share your idea</div>
                <div className="smallText">Tell us what you want, the vibe, colours, size, and any references.</div>
              </div>
              <div className="stepCard">
                <div className="stepN">02</div>
                <div className="stepTitle">Design + quote</div>
                <div className="smallText">We’ll confirm materials, timeline, and cost.</div>
              </div>
              <div className="stepCard">
                <div className="stepN">03</div>
                <div className="stepTitle">Make + refine</div>
                <div className="smallText">We craft your piece with care—sharing progress updates when helpful.</div>
              </div>
              <div className="stepCard">
                <div className="stepN">04</div>
                <div className="stepTitle">Finish + deliver</div>
                <div className="smallText">Final details, quality check, and it’s ready for pickup or shipping.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="container section">
          <div className="sectionHeader">
            <h2 className="h2">Gallery</h2>
            <p className="subhead">Click a product to view it in your Etsy / Made.me shop.</p>
          </div>

          <div className="galleryGrid">
            {gallery.map((g) => (
              <a
                key={g.title}
                href={g.url}
                target="_blank"
                rel="noreferrer"
                className="galleryCard galleryLink"
                aria-label={`Open ${g.title} on ${g.store}`}
                title={`View on ${g.store}`}
              >
                <div className="galleryImageWrap">
                  <img className="galleryImage" src={g.imageSrc} alt={g.imageAlt} loading="lazy" />
                  <div className="galleryOverlay">
                    <span className="galleryTag">{g.tag}</span>
                    <span className="storePill">{g.store}</span>
                  </div>
                </div>

                <div className="galleryBody">
                  <div className="galleryTitle">{g.title}</div>
                  <div className="smallText">{g.note}</div>
                  <div className="viewLink">View item →</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="sectionAlt">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="h2">Contact</h2>
              <p className="subhead">Send a request and we’ll reply with questions, options, and a quote.</p>
            </div>

            <div className="contactGrid">
              <div className="contactCard">
                <h3 className="h3">Custom Order Request</h3>
                <p className="p">
                  If you’ve wired your form to Amplify (DB + email), replace this placeholder submit handler.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Hook this form up to your Amplify API endpoint when ready.");
                  }}
                  className="form"
                >
                  <label className="label">
                    Name
                    <input className="input" placeholder="Your name" required />
                  </label>
                  <label className="label">
                    Email
                    <input className="input" type="email" placeholder="you@example.com" required />
                  </label>
                  <label className="label">
                    What would you like made?
                    <textarea
                      className="textarea"
                      placeholder="Describe your idea, theme/vibe, colours, size, and any references."
                      required
                    />
                  </label>
                  <label className="label">
                    Preferred techniques
                    <input className="input" placeholder="Resin / Needle Felting / 3D Print / Vinyl Decals (or 'not sure')" />
                  </label>

                  <button className="primaryBtnLarge" type="submit">
                    Send Request
                  </button>
                </form>
              </div>

              <div className="contactCard">
                <h3 className="h3">Quick Details</h3>
                <div className="infoBlock">
                  <div className="infoRow">
                    <div className="infoLabel">Turnaround</div>
                    <div className="infoValue">Varies by complexity (confirmed with your quote)</div>
                  </div>
                  <div className="infoRow">
                    <div className="infoLabel">Customisation</div>
                    <div className="infoValue">Colours, themes, names, sizes, finishes</div>
                  </div>
                  <div className="infoRow">
                    <div className="infoLabel">Styles</div>
                    <div className="infoValue">Fairycore • Gothic • Minimalist • Playful</div>
                  </div>
                </div>

                <div className="divider" />

                <h3 className="h3">Socials</h3>
                <div className="socialList">
                  <a className="socialLink" href="#" onClick={(e) => e.preventDefault()}>
                    Instagram → @dreamimporium
                  </a>
                  <a className="socialLink" href="#" onClick={(e) => e.preventDefault()}>
                    Etsy → DreamImporium
                  </a>
                  <a className="socialLink" href="mailto:contact@dreamimporium.com">
                    Email → contact@dreamimporium.com
                  </a>
                </div>
              </div>
            </div>

            <footer className="footer">
              <div className="footerInner">
                <div className="footerBrand">
                  <img src={logo} className="footerLogo" alt="" />
                  Dream Imporium
                </div>
                <div className="footerNote">© {new Date().getFullYear()} Dream Imporium. All rights reserved.</div>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
