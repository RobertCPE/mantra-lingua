export default function LanguageDropdown({ label="Language", value="en", options=[{label:"English", value:"en"}], onChange, className="" }) {
  return (
    <label className={`languagedropdown ${className}`}>
      <span>{label}</span>
      <select value={value} onChange={e => onChange?.(e.target.value)}>
        {options.map((o,i) => <option key={o.value || i} value={o.value}>{o.label}</option>)}
      </select>
    </label>
  );
}

