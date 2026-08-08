import { FiInstagram, FiFacebook, FiMapPin } from 'react-icons/fi'
import { WHATSAPP_LINK } from '../data/content'

const FOOTER_LINKS = {
  quick: [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ],
  collections: [
    { label: 'Designer Blouses', href: '#collections' },
    { label: 'Matching Fabrics', href: '#collections' },
    { label: 'Fancy Laces', href: '#collections' },
    { label: 'Bridal Collection', href: '#bridal' },
    { label: 'Accessories', href: '#collections' },
  ],
  support: [
    { label: 'WhatsApp Order', href: WHATSAPP_LINK, external: true },
    { label: 'Size Guide', href: '#about' },
    { label: 'Shipping Info', href: '#contact' },
    { label: 'Returns Policy', href: '#contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__divider" aria-hidden="true" />
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <span className="navbar__logo-mark">S</span>
            <span>
              <strong>Sandhya</strong>
              <small>Matching Collections</small>
            </span>
          </a>
          <p className="footer__desc">
            Premium matching blouse materials, designer blouses, sarees, and fashion accessories.
            Your trusted boutique for every occasion.
          </p>
          <div className="footer__social">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a href="https://instagram.com/sandhyamatching" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href="https://facebook.com/sandhyamatching" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FiFacebook />
            </a>
            <a href="#contact" aria-label="Location">
              <FiMapPin />
            </a>
          </div>
        </div>

        <div className="footer__links">
          <h4>Quick Links</h4>
          <ul>
            {FOOTER_LINKS.quick.map((l) => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__links">
          <h4>Collections</h4>
          <ul>
            {FOOTER_LINKS.collections.map((l) => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__links">
          <h4>Customer Support</h4>
          <ul>
            {FOOTER_LINKS.support.map((l) => (
              <li key={l.label}>
                <a href={l.href} {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe for new arrivals and exclusive offers.</p>
          <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" aria-label="Email for newsletter" />
            <button type="submit" className="btn btn--gold btn--sm">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer__divider" aria-hidden="true" />

      <div className="container footer__bottom">
        <p>&copy; {new Date().getFullYear()} Sandhya Matching Collections. All rights reserved.</p>
        <p className="footer__credit">Crafted with elegance</p>
      </div>
    </footer>
  )
}
