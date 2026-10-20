import Link from 'next/link';
import Image from 'next/image';
import ProductDetailClient from '@/components/ProductDetailClient';
import { products } from '@/data/products';
import { notFound } from 'next/navigation';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="container section product-detail-page">
      <Link href="/produits" className="back-link">
        ← Retour aux parfums
      </Link>
      <div className="product-detail-grid">
        <div className="product-detail-image">
          <Image src={product.image} alt={product.name} width={600} height={700} priority />
        </div>
        <div className="product-detail-copy">
          <span className="eyebrow">{product.category}</span>
          <h1>{product.name}</h1>
          <div className="rating-row">
            <span>★ {product.rating}</span>
            <span>({product.reviewCount} avis)</span>
          </div>
          <div className="price-row">
            <strong>{product.price} €</strong>
            <span>{product.badge}</span>
          </div>
          <p>{product.description}</p>
          <ul className="notes-list">
            {product.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <ProductDetailClient product={product} />
        </div>
      </div>
    </section>
  );
}
