'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/components/CartProvider';

export type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  badge: string;
  description: string;
  notes: string[];
  rating: number;
  reviewCount: number;
  image: string;
  featured: boolean;
};

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Image src={product.image} alt={product.name} width={500} height={600} />
      </div>
      <div className="product-info">
        <span className="eyebrow mini">{product.category}</span>
        <h3>{product.name}</h3>
        <div className="rating-row small">
          <span>★ {product.rating}</span>
          <span>({product.reviewCount})</span>
        </div>
        <div className="product-meta">
          <strong>{product.price} €</strong>
          <span>{product.badge}</span>
        </div>
        <div className="product-actions">
          <Link href={`/produits/${product.slug}`} className="button secondary small">
            Voir le produit
          </Link>
          <button className="button primary small" onClick={() => addToCart(product)}>
            Ajouter
          </button>
        </div>
      </div>
    </article>
  );
}
