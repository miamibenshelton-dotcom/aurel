import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand-wrap">
            <div className="brand-mark">A</div>
            <div>
              <strong>Aurel</strong>
              <span>Parfums premium</span>
            </div>
          </div>
        </div>
        <div>
          <h4>Navigation</h4>
          <ul>
            <li>Accueil</li>
            <li>Produits</li>
            <li>À propos</li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Contact</li>
            <li>FAQ</li>
            <li>Livraison</li>
          </ul>
        </div>
        <div>
          <h4>Suivez-nous</h4>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Newsletter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
