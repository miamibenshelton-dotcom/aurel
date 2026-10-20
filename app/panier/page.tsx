'use client';

import Link from 'next/link';
import { useCart } from '@/components/CartProvider';

export default function PanierPage() {
  const { cartItems, removeFromCart, updateQuantity, total } = useCart();

  return (
    <section className="container section cart-page">
      <div className="section-header">
        <span className="eyebrow">Panier</span>
        <h1>Votre sélection</h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Votre panier est vide pour l’instant.</p>
          <Link href="/produits" className="button primary">
            Découvrir les parfums
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-image" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.price} €</p>
                </div>
                <div className="qty-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button className="link-button" onClick={() => removeFromCart(item.id)}>
                  Retirer
                </button>
              </div>
            ))}
          </div>

          <aside className="summary-box">
            <h3>Résumé</h3>
            <div className="summary-row">
              <span>Sous-total</span>
              <strong>{total} €</strong>
            </div>
            <div className="summary-row">
              <span>Livraison</span>
              <strong>Gratuite</strong>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <strong>{total} €</strong>
            </div>
            <Link href="/checkout" className="button primary full-width">
              Passer au paiement
            </Link>
          </aside>
        </div>
      )}
    </section>
  );
}
