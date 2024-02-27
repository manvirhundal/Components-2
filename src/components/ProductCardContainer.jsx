import ProductCard from "./ProductCard";

export default function ProductCardContainer({products}) {
  return (
    <>
      <h1>Discover Your Favorites</h1>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          description={product.description}
          price={product.price}
          imageUrl={product.imageUrl}
          isInStock={product.isInStock}
          style={{ marginBottom: '20px' }} // Add some spacing between cards
        />
      ))}
    </>
  );
}
