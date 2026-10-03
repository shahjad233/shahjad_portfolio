import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { nav, profile } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
const ids = nav.map(n => n.id)
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)
  const go = (id: string) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  return (
    <header className="nav">
      <button className="brand" onClick={() => go('home')} aria-label="Back to top">{profile.name.toUpperCase()}</button>
      <p className="nav-sub">Creative<br />code deployment</p>
      <nav aria-label="Primary" className="nav-links">
        {nav.map(n => (
          <button key={n.id} onClick={() => go(n.id)} aria-current={active === n.id ? 'true' : undefined}>{n.label}</button>
        ))}
      </nav>
      <p className="nav-status"><span className="pulse" />{profile.availability}</p>
      <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div className="drawer" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
            {nav.map(n => <button key={n.id} onClick={() => go(n.id)}>{n.label}</button>)}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
