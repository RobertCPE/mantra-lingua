export default function InnerContainer({ children, className = "", style }) {
  return (
    <div className={`inner-container ${className}`} style={style}>
      {children}
    </div>
  );
}

