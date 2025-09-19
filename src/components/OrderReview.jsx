export default function OrderReview({ title="OrderReview", children, className = "" }) {
  return (
    <section className={`orderreview ${className}`}>
      <h3>{title}</h3>
      {children || <p>Connect to real data / form state here.</p>}
    </section>
  );
}

