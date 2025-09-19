export default function StaticHeader({
  eyebrow = "New",
  headline = "Welcome to Mantra Lingua",
  body = "Beautifully designed, prop-driven header component.",
  ctaLabel = "Learn more",
  href = "#",
  className = ""
}) {
  return (
    <header className={`staticheader ${className}`}>
      {eyebrow && <p className="staticheader__eyebrow">{eyebrow}</p>}
      {headline && <h1 className="staticheader__headline">{headline}</h1>}
      {body && <p className="staticheader__body">{body}</p>}
      {ctaLabel && href && <a className="staticheader__cta" href={href}>{ctaLabel}</a>}
    </header>
  );
}

