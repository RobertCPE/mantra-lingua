export default function OuterContainer({ children, className = "", style }) {
  return (
    <div className={`outer-container ${className}`} style={style}>
      {children}
    </div>
  );
}

