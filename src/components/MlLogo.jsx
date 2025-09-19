export default function MlLogo({ src = "/assets/logo.svg", alt = "Logo", className = "", width, height }) {
  return <img className={className} src={src} alt={alt} width={width} height={height} />;
}

