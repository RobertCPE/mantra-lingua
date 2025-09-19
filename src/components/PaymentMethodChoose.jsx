export default function PaymentMethodChoose({ title="PaymentMethodChoose", children, className = "" }) {
  return (
    <section className={`paymentmethodchoose ${className}`}>
      <h3>{title}</h3>
      {children || <p>Connect to real data / form state here.</p>}
    </section>
  );
}

