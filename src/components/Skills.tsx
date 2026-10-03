import { useEffect, useRef } from 'react'
import { assets } from '../data/assets'
import { skillGroups } from '../data/portfolio'
export default function Skills() {
  const v = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const el = v.current; if (!el) return
    const io = new IntersectionObserver(([e]) => { e.isIntersecting ? el.play().catch(() => {}) : el.pause() }, { threshold: 0.25 })
    io.observe(el); return () => io.disconnect()
  }, [])
  return (
    <section id="universe" className="universe">
      <video ref={v} src={assets.universe.video} poster={assets.universe.poster} muted loop playsInline preload="none"
        aria-label="Animated scene of a developer surrounded by floating technology logos" />
      <div className="universe-panel">
        <h2>The developer universe</h2>
        <p>Build, deploy, scale, iterate. The tools I reach for every day.</p>
        <dl>
          {skillGroups.map(g => (<div key={g.name}><dt>{g.name}</dt><dd>{g.items.join(', ')}</dd></div>))}
        </dl>
      </div>
    </section>
  )
}
