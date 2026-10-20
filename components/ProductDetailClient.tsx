'use client';

import { useCart } from '@/components/CartProvider';

export default function ProductDetailClient({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <div className="detail-actions">
      <button className="button primary" onClick={() => addToCart(product)}>
        Ajouter au panier
      </button>
      <button className="button secondary">Ajouter à la liste</button>
    </div>
  );
}
