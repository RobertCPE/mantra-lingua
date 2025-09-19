export default function Product({ title="Product", children, className = "" }) {
  return (
    <section className={`product ${className}`}>
      <h3>{title}</h3>
      <div>{children}</div>
    </section>
  );
}

