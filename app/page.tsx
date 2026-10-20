import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const featured = products.filter((product) => product.featured).slice(0, 3);

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="eyebrow">Maison Aurel</span>
            <h1>Des parfums qui laissent une présence.</h1>
            <p>
              Une signature olfactive pensée pour les moments qui comptent. Des fragrances
              légères, élégantes et profondément mémorables.
            </p>
            <div className="cta-row">
              <Link href="/produits" className="button primary">
                Découvrir nos parfums
              </Link>
              <Link href="/about" className="button secondary">
                Notre histoire
              </Link>
            </div>
            <div className="stats">
              <div>
                <strong>12k+</strong>
                <span>clients satisfaits</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>note moyenne</span>
              </div>
              <div>
                <strong>2j</strong>
                <span>livraison rapide</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="glass-card">
              <div className="bottle">
                <div className="cap" />
                <div className="body" />
              </div>
              <div className="floating-note">
                <span>Signature N°7</span>
                <strong>85 €</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-header">
          <span className="eyebrow">Collections</span>
          <h2>Choisissez votre signature</h2>
        </div>
        <div className="category-grid">
          <div className="category-card women">
            <span>Femme</span>
            <strong>Florales & sensuelles</strong>
          </div>
          <div className="category-card men">
            <span>Homme</span>
            <strong>Boisés & élégants</strong>
          </div>
          <div className="category-card unisex">
            <span>Unisex</span>
            <strong>Modernes & intemporels</strong>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-header">
          <span className="eyebrow">Best sellers</span>
          <h2>Parfums les plus appréciés</h2>
        </div>
        <div className="product-grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="features-block">
        <div className="container features-grid">
          <div>
            <span className="eyebrow">Pourquoi Aurel</span>
            <h2>Une expérience parfumée premium</h2>
          </div>
          <div className="feature-list">
            <div>
              <strong>01</strong>
              <span>Formules élégantes et durables</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Livraison rapide et discrète</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Packaging cadeau premium</span>
            </div>
            <div>
              <strong>04</strong>
              <span>Service client réactif</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container section reviews">
        <div className="section-header">
          <span className="eyebrow">Avis clients</span>
          <h2>La satisfaction est au cœur de notre maison</h2>
        </div>
        <div className="review-grid">
          <article>
            <p>“Le parfum est magnifique, le packaging est premium, et la durée est impressionnante.”</p>
            <strong>— Amélie K.</strong>
          </article>
          <article>
            <p>“J’ai offert un coffret à mon partenaire. L’expérience client était fluide et élégante.”</p>
            <strong>— Paul D.</strong>
          </article>
          <article>
            <p>“Très belle marque. Le parfum tient toute la journée sans être envahissant.”</p>
            <strong>— Sarah M.</strong>
          </article>
        </div>
      </section>

      <section className="newsletter section">
        <div className="container newsletter-box">
          <div>
            <span className="eyebrow">Newsletter</span>
            <h2>Recevez nos nouveautés et offres exclusives</h2>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="Votre e-mail" aria-label="Votre e-mail" />
            <button type="button" className="button primary">S’inscrire</button>
          </form>
        </div>
      </section>
    </>
  );
}
