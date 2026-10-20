'use client';

import Link from 'next/link';
import { useCart } from '@/components/CartProvider';

export default function Header() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand">
          <span className="brand-mark">A</span>
          <span>Aurel</span>
        </Link>

        <nav className="main-nav">
          <Link href="/">Accueil</Link>
          <Link href="/produits">Produits</Link>
          <Link href="/about">À propos</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/admin">Admin</Link>
        </nav>

        <Link href="/panier" className="cart-link">
          Panier ({totalItems})
        </Link>
      </div>
    </header>
  );
}
