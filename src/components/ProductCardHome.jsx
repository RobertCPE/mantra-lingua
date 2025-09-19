import { Media } from "./_common";
export default function ProductCardHome({
  title = "Sample title",
  subtitle = "Short description",
  price = "£12.99",
  imageUrl = "/assets/placeholder.jpg",
  href = "#",
  ctaLabel = "View",
  className = "",
  onClick
}) {
  return (
    <article className={`product-card-home ${className}`}>
      <a href={href} onClick={onClick} className="block">
        <Media src={imageUrl} alt={title} ratio="4/3" />
        <div className="productcardhome__body">
          <h3 className="productcardhome__title">{title}</h3>
          {subtitle && <p className="productcardhome__subtitle">{subtitle}</p>}
          {price && <p className="productcardhome__price">{price}</p>}
          <span className="productcardhome__cta">{ctaLabel}</span>
        </div>
      </a>
    </article>
  );
}

