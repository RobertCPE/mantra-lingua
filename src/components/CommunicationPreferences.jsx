export default function CommunicationPreferences({ title="CommunicationPreferences", children, className = "" }) {
  return (
    <section className={`communicationpreferences ${className}`}>
      <h3>{title}</h3>
      {children || <p>Connect to real data / form state here.</p>}
    </section>
  );
}

