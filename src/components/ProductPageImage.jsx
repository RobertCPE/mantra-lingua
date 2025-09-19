import { Media } from "./_common";
export default function ProductPageImage({ imageUrl="/assets/placeholder.jpg", alt="Product image", className="" }) {
  return <Media src={imageUrl} alt={alt} className={className} ratio="1/1" />;
}

