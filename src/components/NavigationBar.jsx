export default function NavigationBar({
  logoUrl = "/assets/logo.svg",
  items = [{ label: "Home", href: "/" }, { label: "Shop", href: "/shop" }],
  onItemClick,
  className = ""
}) {
  return (
    <nav className={`navigationbar ${className}`}>
      <a href="/"><img src={logoUrl} alt="Logo" height="28" /></a>
      <ul>
        {items.map((it, i) => (
          <li key={it.href || i}>
            <a href={it.href} onClick={(e) => onItemClick?.(e, it)}>{it.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

