import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from './ui'
import { COLLECTIONS } from '../data/content'
import CollectionModal from './CollectionModal'

export default function FeaturedCollections() {
  const [selectedCollection, setSelectedCollection] = useState(null)

  return (
    <section id="collections" className="section featured-collections">
      <div className="container">
        <SectionHeader
          label="Curated For You"
          title="Featured Collections"
          subtitle="Discover our handpicked selection of premium fabrics, blouses, and accessories"
        />

        <div className="collections-grid">
          {COLLECTIONS.map((item, i) => (
            <motion.button
              key={item.id}
              onClick={() => setSelectedCollection(item)}
              className={`collection-card ${i === 0 || i === 3 ? 'collection-card--large' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
            >
              <div className="collection-card__image">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x600?text=Collection+Image'
                  }}
                />
                <div className="collection-card__overlay" />
              </div>
              <div className="collection-card__content">
                <span className="collection-card__subtitle">{item.subtitle}</span>
                <h3 className="collection-card__title">{item.title}</h3>
                <span className="collection-card__cta">Explore →</span>
              </div>
              <div className="collection-card__border" aria-hidden="true" />
            </motion.button>
          ))}
        </div>
      </div>

      <CollectionModal 
        collection={selectedCollection} 
        onClose={() => setSelectedCollection(null)} 
      />
    </section>
  )
}
