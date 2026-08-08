import { motion } from 'framer-motion'
import { FiInstagram } from 'react-icons/fi'
import { SectionHeader } from './ui'
import { GALLERY_IMAGES } from '../data/content'

const heights = ['tall', 'medium', 'short', 'medium', 'tall', 'short', 'medium', 'tall', 'short']

export default function InstagramGallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <SectionHeader
          label="@sandhyamatching"
          title="Instagram Gallery"
          subtitle="Follow our journey of elegance and style"
        />

        <div className="gallery-grid">
          {GALLERY_IMAGES.map((src, i) => (
            <motion.div
              key={i}
              className={`gallery-item gallery-item--${heights[i]}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <img 
                src={src} 
                alt={`Gallery image ${i + 1}`} 
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x400?text=Gallery+Image'
                }}
              />
              <div className="gallery-item__overlay">
                <FiInstagram className="gallery-item__icon" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="gallery__follow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://instagram.com/sandhyamatching"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            <FiInstagram /> Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
