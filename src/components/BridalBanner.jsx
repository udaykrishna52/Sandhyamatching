import { motion } from 'framer-motion'

const BRIDAL_IMAGE = 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1920&q=85'

export default function BridalBanner() {
  return (
    <section id="bridal" className="bridal-banner">
      <div className="bridal-banner__bg">
        <img 
          src={BRIDAL_IMAGE} 
          alt="Bridal fashion collection" 
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/1920x600?text=Bridal+Collection'
          }}
        />
        <div className="bridal-banner__overlay" />
      </div>

      <motion.div
        className="bridal-banner__content container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section-label section-label--light">Bridal Collection</span>
        <h2 className="bridal-banner__title">
          Designed for Your <em>Special Moments</em>
        </h2>
        <p className="bridal-banner__text">
          Exquisite bridal blouses, matching fabrics, and accessories crafted to make your wedding day unforgettable.
        </p>
        <a href="#collections" className="btn btn--gold">
          Explore Bridal Collection
        </a>
      </motion.div>
    </section>
  )
}
