import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiHeart, FiEye, FiX } from 'react-icons/fi'
import { SectionHeader, WhatsAppButton } from './ui'
import { PRODUCTS } from '../data/content'

export default function BestSellers() {
  const [wishlist, setWishlist] = useState([])
  const [quickView, setQuickView] = useState(null)

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  return (
    <section id="best-sellers" className="section best-sellers">
      <div className="container">
        <SectionHeader
          label="Trending Now"
          title="Best Sellers"
          subtitle="Our most loved pieces, chosen by discerning fashion lovers"
        />

        <div className="products-grid">
          {PRODUCTS.map((product, i) => (
            <motion.article
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="product-card__image-wrap">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=Product+Image'
                  }}
                />
                <div className="product-card__actions">
                  <button
                    className={`product-card__action ${wishlist.includes(product.id) ? 'active' : ''}`}
                    aria-label="Add to wishlist"
                    onClick={() => toggleWishlist(product.id)}
                  >
                    <FiHeart />
                  </button>
                  <button
                    className="product-card__action"
                    aria-label="Quick view"
                    onClick={() => setQuickView(product)}
                  >
                    <FiEye />
                  </button>
                </div>
                <span className="product-card__category">{product.category}</span>
              </div>
              <div className="product-card__info">
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__price">{product.price}</p>
                <WhatsAppButton
                  variant="ghost"
                  className="product-card__whatsapp"
                  message={`Hi! I'm interested in "${product.name}" (${product.price}).`}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Inquiry
                </WhatsAppButton>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {quickView && (
          <motion.div
            className="quick-view-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setQuickView(null)}
          >
            <motion.div
              className="quick-view"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="quick-view__close" onClick={() => setQuickView(null)} aria-label="Close">
                <FiX />
              </button>
              <div className="quick-view__image">
                <img 
                  src={quickView.image} 
                  alt={quickView.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x400?text=Product+Image'
                  }}
                />
              </div>
              <div className="quick-view__details">
                <span className="quick-view__category">{quickView.category}</span>
                <h3>{quickView.name}</h3>
                <p className="quick-view__price">{quickView.price}</p>
                <p className="quick-view__desc">
                  Exquisite craftsmanship with premium materials. Perfect for weddings, festivals, and special occasions.
                </p>
                <WhatsAppButton message={`Hi! I'd like to order "${quickView.name}" (${quickView.price}).`} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
