import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { assets } from '../data/assets'
import { profile } from '../data/portfolio'
export default function Hero() {
  // Browsers without VP9 alpha get the plain MP4; white is removed with a multiply blend instead.
  const alpha = useMemo(() => !!document.createElement('video').canPlayType('video/webm; codecs="vp9"'), [])
  return (
    <section id="home" className="hero">
      <h1 className="sr">{profile.name}, {profile.title}</h1>
      <p className="welcome" aria-hidden>••• Welcome to my world •••</p>
      <motion.img className="wordmark" src={assets.wordmark} alt="" aria-hidden
        initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} />
      <motion.video className={alpha ? 'man' : 'man multiply'} autoPlay muted loop playsInline preload="auto" aria-hidden
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.5 }}>
        {alpha ? <source src={assets.heroMan.webm} type="video/webm" /> : <source src={assets.heroMan.mp4} type="video/mp4" />}
      </motion.video>
      <div className="hero-ctas">
        <button className="btn solid" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>Explore my work</button>
        <button className="btn" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact me</button>
      </div>
    </section>
  )
}
