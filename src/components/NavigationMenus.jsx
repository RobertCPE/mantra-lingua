export default function NavigationMenus({
  groups = [
    { title: "Books", links: [{label:"0–4 Years", href:"/books/0-4"}, {label:"5–7 Years", href:"/books/5-7"}] },
    { title: "Resources", links: [{label:"Teacher guides", href:"/guides"}] }
  ],
  className = ""
}) {
  return (
    <div className={`navigationmenus ${className}`}>
      {groups.map((g, i) => (
        <section key={g.title || i}>
          {g.title && <h4>{g.title}</h4>}
          <ul>{g.links?.map((l, j) => <li key={l.href || j}><a href={l.href}>{l.label}</a></li>)}</ul>
        </section>
      ))}
    </div>
  );
}

