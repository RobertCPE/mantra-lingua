export default function RadioButton({ name="group", value="a", label="Option", checked=false, onChange, className="" }) {
  return (
    <label className={`radiobutton ${className}`}>
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
}

