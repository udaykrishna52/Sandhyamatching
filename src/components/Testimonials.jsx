import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import { SectionHeader } from './ui'
import { TESTIMONIALS } from '../data/content'

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <SectionHeader
          label="Client Love"
          title="What Our Customers Say"
          subtitle="Trusted by thousands of fashion-forward women"
        />

        <div className="testimonials-grid">
          {TESTIMONIALS.map((item, i) => (
            <motion.blockquote
              key={item.name}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="testimonial-card__stars">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <FiStar key={j} className="star-filled" />
                ))}
              </div>
              <p className="testimonial-card__text">&ldquo;{item.text}&rdquo;</p>
              <footer className="testimonial-card__author">
                <img 
                  src={item.image} 
                  alt={item.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/100x100?text=Avatar'
                  }}
                />
                <div>
                  <cite>{item.name}</cite>
                  <span>{item.location}</span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
