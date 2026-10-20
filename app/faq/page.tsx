export default function FaqPage() {
  return (
    <section className="container section content-page">
      <div className="section-header">
        <span className="eyebrow">FAQ</span>
        <h1>Questions fréquentes</h1>
      </div>
      <div className="faq-list">
        <div>
          <h3>Livraison rapide ?</h3>
          <p>Oui, nous livrons sous 48 à 72 heures en France métropolitaine.</p>
        </div>
        <div>
          <h3>Peut-on offrir en cadeau ?</h3>
          <p>Oui, tous nos colis peuvent être livrés en version cadeau avec emballage premium.</p>
        </div>
        <div>
          <h3>Retours ?</h3>
          <p>Vous pouvez retourner votre commande dans les 14 jours suivant réception.</p>
        </div>
      </div>
    </section>
  );
}
