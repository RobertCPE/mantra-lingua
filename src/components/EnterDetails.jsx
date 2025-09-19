export default function EnterDetails({ title="EnterDetails", children, className="" }) {
  return (
    <fieldset className={`enterdetails ${className}`}>
      <legend>{title}</legend>
      {children}
    </fieldset>
  );
}

