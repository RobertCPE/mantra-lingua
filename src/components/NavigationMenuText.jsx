export default function NavigationMenuText({ items = [{ label:"Item", href:"#"}], className = "" }) {
  return (
    <ul className={`navigationmenutext ${className}`}>
      {items.map((it,i) => <li key={it.href || i}><a href={it.href}>{it.label}</a></li>)}
    </ul>
  );
}

