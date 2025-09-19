/** Generic media block used in several components */
export function Media({ src, alt, ratio = "16/9", className = "" }) {
  return (
    <div className={`media ${className}`} style={{ aspectRatio: ratio, overflow: "hidden", borderRadius: 12 }}>
      {src ? <img src={src} alt={alt || ""} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <div style={{background:"#eee", width:"100%", height:"100%"}}/>}
    </div>
  );
}
