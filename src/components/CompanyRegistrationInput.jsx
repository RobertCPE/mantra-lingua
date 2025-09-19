export default function CompanyRegistrationInput({ label="CompanyRegistrationInput", name="field", value="", onChange, placeholder="", className="" }) {
  return (
    <label className={`companyregistrationinput ${className}`}>
      <span>{label}</span>
      <input name={name} value={value} onChange={e=>onChange?.(e.target.value)} placeholder={placeholder} />
    </label>
  );
}

