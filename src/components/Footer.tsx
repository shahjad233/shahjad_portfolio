import { ArrowUp } from 'lucide-react'
import { nav, profile } from '../data/portfolio'
export default function Footer() {
  return (
    <footer className="footer">
      <strong>{profile.name.toUpperCase()}</strong>
      <nav aria-label="Footer">{nav.map(n => <a key={n.id} href={`#${n.id}`}>{n.label}</a>)}</nav>
      <small>© {new Date().getFullYear()} {profile.name}. All rights reserved.</small>
      <button className="btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp size={16} /> Back to top</button>
    </footer>
  )
}
