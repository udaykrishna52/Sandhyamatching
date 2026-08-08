import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiHeart } from 'react-icons/fi'
import { WhatsAppButton } from './ui'

export default function CollectionModal({ collection, onClose }) {
  if (!collection) return null

  return (
    <AnimatePresence>
      <motion.div
        className="collection-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="collection-modal"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="collection-modal__close" onClick={onClose} aria-label="Close">
            <FiX />
          </button>
          
          <div className="collection-modal__header">
            <div className="collection-modal__header-image">
              <img 
                src={collection.image} 
                alt={collection.title}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x600?text=Collection+Image'
                }}
              />
            </div>
            <div className="collection-modal__header-content">
              <span className="collection-modal__subtitle">{collection.subtitle}</span>
              <h2 className="collection-modal__title">{collection.title}</h2>
              <p className="collection-modal__count">{collection.products?.length || 0} Products Available</p>
            </div>
          </div>

          <div className="collection-modal__products">
            {collection.products?.map((product, index) => (
              <motion.div
                key={product.id}
                className="collection-product-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="collection-product-card__image">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available'
                    }}
                  />
                </div>
                <div className="collection-product-card__info">
                  <h3 className="collection-product-card__name">{product.name}</h3>
                  <p className="collection-product-card__price">{product.price}</p>
                  <WhatsAppButton
                    message={`Hi! I'm interested in "${product.name}" from ${collection.title} collection (${product.price}).`}
                    className="collection-product-card__whatsapp"
                  >
                    Inquire Now
                  </WhatsAppButton>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
