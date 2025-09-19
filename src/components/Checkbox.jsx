export default function Checkbox({ label="Accept", checked=false, onChange, className="" }) {
  return (
    <label className={`checkbox ${className}`}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
}

