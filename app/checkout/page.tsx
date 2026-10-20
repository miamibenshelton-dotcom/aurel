'use client';

import Link from 'next/link';
import { useCart } from '@/components/CartProvider';

export default function CheckoutPage() {
  const { cartItems, total } = useCart();

  return (
    <section className="container section checkout-page">
      <div className="section-header">
        <span className="eyebrow">Checkout</span>
        <h1>Finaliser votre commande</h1>
      </div>

      <div className="checkout-layout">
        <div className="checkout-form-box">
          <h3>Informations</h3>
          <form className="checkout-form">
            <input type="text" placeholder="Prénom" />
            <input type="text" placeholder="Nom" />
            <input type="email" placeholder="E-mail" />
            <input type="text" placeholder="Adresse" />
            <input type="text" placeholder="Ville" />
            <input type="text" placeholder="Code postal" />
          </form>
        </div>

        <aside className="summary-box">
          <h3>Votre commande</h3>
          {cartItems.map((item) => (
            <div className="summary-product" key={item.id}>
              <span>
                {item.name} x {item.quantity}
              </span>
              <strong>{item.quantity * item.price} €</strong>
            </div>
          ))}
          <div className="summary-row total">
            <span>Total</span>
            <strong>{total} €</strong>
          </div>
          <Link href="/checkout" className="button primary full-width">
            Valider la commande
          </Link>
        </aside>
      </div>
    </section>
  );
}
