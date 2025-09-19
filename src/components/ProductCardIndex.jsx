import { Media } from "./_common";
export default function ProductCardIndex({
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
    <article className={`product-card-index ${className}`}>
      <a href={href} onClick={onClick} className="block">
        <Media src={imageUrl} alt={title} ratio="4/3" />
        <div className="productcardindex__body">
          <h3 className="productcardindex__title">{title}</h3>
          {subtitle && <p className="productcardindex__subtitle">{subtitle}</p>}
          {price && <p className="productcardindex__price">{price}</p>}
          <span className="productcardindex__cta">{ctaLabel}</span>
        </div>
      </a>
    </article>
  );
}

