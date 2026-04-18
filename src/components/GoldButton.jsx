import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function GoldButton({ to, children, className = '', type = 'link' }) {
  const baseClasses = `
    relative inline-flex items-center justify-center px-8 py-3.5
    bg-gradient-to-r from-gold-700 to-gold-800 dark:from-gold-500 dark:to-gold-600
    text-white dark:text-black font-semibold text-sm tracking-wide uppercase
    rounded-full overflow-hidden
    transition-all duration-300
    hover:shadow-[0_0_30px_rgba(139,105,20,0.4)] dark:hover:shadow-[0_0_30px_rgba(212,160,23,0.4)]
    ${className}
  `

  const content = (
    <>
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-500 dark:from-gold-400 dark:to-gold-300"
        initial={{ x: '-100%' }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      />
      <span className="relative z-10">{children}</span>
    </>
  )

  if (type === 'submit') {
    return (
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={baseClasses}
      >
        {content}
      </motion.button>
    )
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link to={to} className={baseClasses}>
        {content}
      </Link>
    </motion.div>
  )
}

export default GoldButton
