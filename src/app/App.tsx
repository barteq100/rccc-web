export function App() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">Remote Career Command Center</p>
        <h1>MVP workspace scaffold</h1>
        <p className="lede">
          The web app will expose the job feed, saved jobs, application tracker,
          profile preferences, and fit score presentation.
        </p>
      </section>

      <section className="grid">
        <article className="card">
          <h2>Jobs</h2>
          <p>Feed, filters, and job detail review flow.</p>
        </article>
        <article className="card">
          <h2>Applications</h2>
          <p>Saved, applied, interview, offer, and rejected states.</p>
        </article>
        <article className="card">
          <h2>Profile</h2>
          <p>Preferred stack, remote flag, locations, and seniority.</p>
        </article>
      </section>
    </main>
  );
}
