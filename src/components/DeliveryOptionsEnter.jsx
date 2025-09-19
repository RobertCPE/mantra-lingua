export default function DeliveryOptionsEnter({ title="DeliveryOptionsEnter", children, className="" }) {
  return (
    <fieldset className={`deliveryoptionsenter ${className}`}>
      <legend>{title}</legend>
      {children}
    </fieldset>
  );
}

