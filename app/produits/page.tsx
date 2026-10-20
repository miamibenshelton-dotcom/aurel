import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function ProduitsPage() {
  return (
    <section className="container section">
      <div className="section-header">
        <span className="eyebrow">Collection</span>
        <h1>Nos parfums</h1>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
