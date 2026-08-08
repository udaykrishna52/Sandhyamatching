import { Reveal } from './ui'

const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <Reveal className="about__image-wrap">
          <div className="about__image">
            <img src={ABOUT_IMAGE} alt="Sandhya Matching Collections boutique interior" loading="lazy" />
            <div className="about__image-accent" aria-hidden="true" />
          </div>
        </Reveal>

        <Reveal className="about__content" delay={0.2}>
          <span className="section-label">Our Story</span>
          <h2 className="section-title">A Legacy of Perfect Matches</h2>
          <div className="about__text">
            <p>
              Welcome to <strong>Sandhya Matching Collections</strong> — Hyderabad's premier destination
              for matching blouse materials, designer blouses, and exquisite fashion accessories.
            </p>
            <p>
              For over a decade, we have been the trusted choice for women who seek the perfect harmony
              between their saree and blouse. Our curated collections feature the finest silks, zari work,
              fancy laces, and borders sourced from master artisans across India.
            </p>
            <p>
              Whether you're preparing for a wedding, festival, or a special celebration, our expert team
              provides personalized matching services to ensure every outfit tells your unique story with
              elegance and grace.
            </p>
          </div>
          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-num">10+</span>
              <span className="about__stat-label">Years of Excellence</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num">5000+</span>
              <span className="about__stat-label">Happy Customers</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num">1000+</span>
              <span className="about__stat-label">Unique Designs</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
