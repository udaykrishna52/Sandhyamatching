import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { WhatsAppButton } from './ui'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1610030469983-98e5507832b8?w=1920&q=85'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="home" className="hero" ref={ref}>
      <motion.div className="hero__bg" style={{ y }}>
        <img 
          src={HERO_IMAGE} 
          alt="Woman wearing premium silk saree" 
          loading="eager"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/1920x1080?text=Hero+Image'
          }}
        />
        <div className="hero__overlay" />
      </motion.div>

      <div className="hero__floral hero__floral--1" aria-hidden="true" />
      <div className="hero__floral hero__floral--2" aria-hidden="true" />
      <div className="hero__floral hero__floral--3" aria-hidden="true" />

      <motion.div className="hero__content container" style={{ opacity }}>
        <motion.span
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Luxury Women's Fashion Boutique
        </motion.span>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
        >
          Every Outfit Deserves
          <em> the Perfect Match</em>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Premium Matching Collections for Every Occasion
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <a href="#collections" className="btn btn--primary">
            Explore Collection
          </a>
          <WhatsAppButton variant="outline-light" />
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        aria-hidden="true"
      >
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  )
}
