export default function OrderSummary({ title="OrderSummary", children, className = "" }) {
  return (
    <section className={`ordersummary ${className}`}>
      <h3>{title}</h3>
      {children || <p>Connect to real data / form state here.</p>}
    </section>
  );
}

