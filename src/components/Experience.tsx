import { useState } from 'react'
import { assets } from '../data/assets'
import { timeline } from '../data/portfolio'
export default function Experience() {
  const [i, setI] = useState(timeline.length - 1)
  const t = timeline[i]
  return (
    <section id="journey" className="journey" style={{ backgroundImage: `linear-gradient(#000c,#000e), url(${assets.journey})` }}>
      <h2>A journey through time</h2>
      <div className="years" role="tablist" aria-label="Timeline years">
        {timeline.map((y, k) => (
          <button key={y.year} role="tab" aria-selected={k === i} onClick={() => setI(k)} onMouseEnter={() => setI(k)} onFocus={() => setI(k)}>{y.year}</button>
        ))}
      </div>
      <article className="year-card" aria-live="polite">
        <h3>{t.year} · {t.title}</h3>
        <p>{t.text}</p>
      </article>
      <p className="note">Education: Diploma in Computer Science (2019–2022), B.Tech in Computer Science (2022–2026). Experience: Backend Developer, 6 months.</p>
    </section>
  )
}
