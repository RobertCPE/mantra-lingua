export default function FooterCTA({
  title="Personalize your book with a pronunciation of the language",
  body="Example footer CTA block.",
  ctaLabel="Get started",
  href="#",
  className = ""
}) {
  return (
    <section className={`footercta ${className}`}>
      <h3>{title}</h3>
      {body && <p>{body}</p>}
      {ctaLabel && href && <a className="footercta__cta" href={href}>{ctaLabel}</a>}
    </section>
  );
}

