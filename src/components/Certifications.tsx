import { assets } from '../data/assets'
import { certs } from '../data/portfolio'
export default function Certifications() {
  return (
    <section id="certs" className="certs" style={{ backgroundImage: `url(${assets.certifications})` }}>
      <div className="certs-shade" />
      <div className="certs-list">
        <h2>Certifications</h2>
        <ul>{certs.map(c => (
          <li key={c.name}><span>{c.year}</span><div><strong>{c.issuer}</strong><br />{c.name}</div></li>
        ))}</ul>
      </div>
    </section>
  )
}
