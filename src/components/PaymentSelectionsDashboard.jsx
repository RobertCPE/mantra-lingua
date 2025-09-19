export default function PaymentSelectionsDashboard({ title="PaymentSelectionsDashboard", children, className = "" }) {
  return (
    <section className={`paymentselectionsdashboard ${className}`}>
      <h3>{title}</h3>
      {children || <p>Connect to real data / form state here.</p>}
    </section>
  );
}

