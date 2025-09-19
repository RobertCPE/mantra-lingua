export default function PaymentSelections({ title="PaymentSelections", children, className = "" }) {
  return (
    <section className={`paymentselections ${className}`}>
      <h3>{title}</h3>
      {children || <p>Connect to real data / form state here.</p>}
    </section>
  );
}

