export default function AdminPage() {
  return (
    <section className="container section content-page">
      <div className="section-header">
        <span className="eyebrow">Admin</span>
        <h1>Tableau de bord</h1>
      </div>
      <div className="admin-grid">
        <div className="admin-card">
          <strong>214</strong>
          <span>Commandes</span>
        </div>
        <div className="admin-card">
          <strong>18</strong>
          <span>Produits actifs</span>
        </div>
        <div className="admin-card">
          <strong>4.9/5</strong>
          <span>Note moyenne</span>
        </div>
      </div>
    </section>
  );
}
