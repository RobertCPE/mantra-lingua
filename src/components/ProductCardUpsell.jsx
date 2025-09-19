import { Media } from "./_common";
export default function ProductCardUpsell({
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
    <article className={`product-card-upsell ${className}`}>
      <a href={href} onClick={onClick} className="block">
        <Media src={imageUrl} alt={title} ratio="4/3" />
        <div className="productcardupsell__body">
          <h3 className="productcardupsell__title">{title}</h3>
          {subtitle && <p className="productcardupsell__subtitle">{subtitle}</p>}
          {price && <p className="productcardupsell__price">{price}</p>}
          <span className="productcardupsell__cta">{ctaLabel}</span>
        </div>
      </a>
    </article>
  );
}

