import { motion } from 'framer-motion'
import { SectionHeader } from './ui'
import { WHY_CHOOSE_US } from '../data/content'

export default function WhyChooseUs() {
  return (
    <section className="section why-choose">
      <div className="container">
        <SectionHeader
          label="The Sandhya Difference"
          title="Why Choose Us"
          subtitle="Experience boutique luxury with every purchase"
        />

        <div className="why-grid">
          {WHY_CHOOSE_US.map((item, i) => (
            <motion.div
              key={item.title}
              className="why-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <span className="why-card__icon">{item.icon}</span>
              <h3 className="why-card__title">{item.title}</h3>
              <p className="why-card__desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
