import { assets } from '../data/assets'
import { about } from '../data/portfolio'
export default function About() {
  return (
    <section id="about" className="about">
      <img src={assets.about} alt="Shahjad seated at his desk with a laptop showing code" loading="lazy" />
      <div>
        <h2>About me</h2>
        <h3>{about.heading}</h3>
        {about.paragraphs.map(t => <p key={t}>{t}</p>)}
        <div className="focus">
          {about.focus.map(f => <div key={f.title}><h3>{f.title}</h3><p>{f.text}</p></div>)}
        </div>
      </div>
    </section>
  )
}
