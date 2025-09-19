import { Media } from "./_common";
export default function ProductCardInformation({
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
    <article className={`product-card-information ${className}`}>
      <a href={href} onClick={onClick} className="block">
        <Media src={imageUrl} alt={title} ratio="4/3" />
        <div className="productcardinformation__body">
          <h3 className="productcardinformation__title">{title}</h3>
          {subtitle && <p className="productcardinformation__subtitle">{subtitle}</p>}
          {price && <p className="productcardinformation__price">{price}</p>}
          <span className="productcardinformation__cta">{ctaLabel}</span>
        </div>
      </a>
    </article>
  );
}

