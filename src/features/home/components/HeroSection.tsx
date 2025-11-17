export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Prototype</p>
        <h1 className="hero__title">Echo</h1>
        <p className="hero__subtitle">
          Echo is your focused zone. Capture ideas, organise work and come back
          to the same mental state in seconds.
        </p>

        <div className="hero__actions">
          <button className="btn btn--primary">Enter zone</button>
          <button className="btn btn--ghost">Sign up</button>
        </div>

        <p className="hero__note">
          No feeds. No noise. Just the version of you that actually does the
          work.
        </p>
      </div>

      <div className="hero__visual">
        <div className="hero-card">
          <p className="hero-card__label">Session preview</p>
          <p className="hero-card__title">Deep work hour</p>
          <p className="hero-card__meta">Focus · Lo fi · 52 minutes left</p>
        </div>
      </div>
    </section>
  );
}
