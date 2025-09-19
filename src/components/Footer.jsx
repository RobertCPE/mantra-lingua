export default function Footer({
  columns = [
    { title:"Shop", links:[{label:"Books", href:"/shop-books"}]},
    { title:"Support", links:[{label:"Contact", href:"/contact"}]}
  ],
  legal = "© Mantra Lingua",
  className = ""
}) {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer__grid">
        {columns.map((col, i) => (
          <section key={col.title || i}>
            {col.title && <h4>{col.title}</h4>}
            <ul>{col.links?.map((l,j)=><li key={l.href || j}><a href={l.href}>{l.label}</a></li>)}</ul>
          </section>
        ))}
      </div>
      <div className="footer__legal">{legal}</div>
    </footer>
  );
}

