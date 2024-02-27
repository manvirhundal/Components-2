export default function ProductCard({ name, description, price, imageUrl, isInStock, style }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', ...style }}>
      <img src={imageUrl} alt={name} style={{ width: '100%' }} />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="price">{isInStock ? `$${price}` : 'Unavailable'}</div>
      <button>Add to Cart</button>
    </div>
  );
}
