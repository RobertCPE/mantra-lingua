import { Media } from "./_common";
export default function ProductCardBlog({
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
    <article className={`product-card-blog ${className}`}>
      <a href={href} onClick={onClick} className="block">
        <Media src={imageUrl} alt={title} ratio="4/3" />
        <div className="productcardblog__body">
          <h3 className="productcardblog__title">{title}</h3>
          {subtitle && <p className="productcardblog__subtitle">{subtitle}</p>}
          {price && <p className="productcardblog__price">{price}</p>}
          <span className="productcardblog__cta">{ctaLabel}</span>
        </div>
      </a>
    </article>
  );
}

