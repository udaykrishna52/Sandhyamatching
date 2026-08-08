import { motion } from 'framer-motion'

export default function LoadingScreen({ onComplete }) {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.8, duration: 0.6, ease: 'easeInOut' }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        className="loading-screen__logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="loading-screen__mark">S</span>
        <span className="loading-screen__text">Sandhya</span>
      </motion.div>
      <motion.div
        className="loading-screen__line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  )
}
