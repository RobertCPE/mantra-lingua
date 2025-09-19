import { Media } from "./_common";
export default function ProductCardUpsellSet({
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
    <article className={`product-card-upsell-set ${className}`}>
      <a href={href} onClick={onClick} className="block">
        <Media src={imageUrl} alt={title} ratio="4/3" />
        <div className="productcardupsellset__body">
          <h3 className="productcardupsellset__title">{title}</h3>
          {subtitle && <p className="productcardupsellset__subtitle">{subtitle}</p>}
          {price && <p className="productcardupsellset__price">{price}</p>}
          <span className="productcardupsellset__cta">{ctaLabel}</span>
        </div>
      </a>
    </article>
  );
}

