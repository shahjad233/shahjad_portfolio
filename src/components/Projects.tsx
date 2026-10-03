import { ArrowUpRight } from 'lucide-react'
import { assets } from '../data/assets'
import { projects } from '../data/portfolio'
export default function Projects() {
  return (
    <section id="work" className="work">
      <h2>Selected work</h2>
      <img className="work-img" src={assets.projects} alt="A wall of project screens: Whisper App, Online Book Store, Netflix Clone, Education Website, Hotel Management and more" loading="lazy" />
      <ul className="plist">
        {projects.map(p => (
          <li key={p.title}>
            <strong>{p.title}</strong> <span className="cat">({p.category})</span>
            <p>{p.text}</p>
            <p className="tech">Technology: {p.stack.join(', ')}</p>
            {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a>}
            {p.code && <a href={p.code} target="_blank" rel="noreferrer">Code <ArrowUpRight size={14} /></a>}
          </li>
        ))}
      </ul>
    </section>
  )
}
