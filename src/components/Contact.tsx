import { useState } from 'react'
import { Check, Copy, Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import { assets } from '../data/assets'
import { profile } from '../data/portfolio'
export default function Contact() {
  const [done, setDone] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setDone(true); setTimeout(() => setDone(false), 1800) } catch { window.location.href = `mailto:${profile.email}` }
  }
  const rows = [
    { icon: <Mail />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: <Phone />, label: 'Mobile', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: <Linkedin />, label: 'LinkedIn', value: profile.linkedin, href: profile.linkedin },
    { icon: <Github />, label: 'GitHub', value: profile.github, href: profile.github },
    { icon: <Instagram />, label: 'Instagram', value: profile.instagram, href: profile.instagram },
  ]
  return (
    <section id="contact" className="contact" style={{ backgroundImage: `linear-gradient(#000a,#000b), url(${assets.contact})` }}>
      <h2>Let's build something</h2>
      <p>Open to backend and full-stack roles and project work.</p>
      <ul className="crows">
        {rows.map(r => (
          <li key={r.label}>
            {r.icon}<span className="lbl">{r.label}</span>
            {r.value ? <a href={r.href} target={r.label === 'Email' || r.label === 'Mobile' ? undefined : '_blank'} rel="noreferrer">{r.value.replace(/^https?:\/\/(www\.)?/, '')}</a> : <em>add in portfolio.ts</em>}
          </li>
        ))}
      </ul>
      <button className="btn" onClick={copy}>{done ? <><Check size={16} /> Copied</> : <><Copy size={16} /> Copy email</>}</button>
    </section>
  )
}
