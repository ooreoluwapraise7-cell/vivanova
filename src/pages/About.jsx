import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-light-card-alt via-light-bg to-light-bg dark:from-black dark:via-dark-500 dark:to-dark-500 transition-colors duration-400" />
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-gold-700/5 dark:bg-gold-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gold-700 via-gold-800 to-gold-900 dark:from-gold-300 dark:via-gold-400 dark:to-gold-600 bg-clip-text text-transparent">
              About Us
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Discover the story behind VivaNova Works
          </motion.p>
        </div>
      </section>

      {/* About the Company */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="w-full h-80 md:h-96 bg-gray-200 dark:bg-black rounded-2xl border border-light-border dark:border-gold-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-700/10 dark:from-gold-500/10 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-gold-700 to-gold-800 dark:from-gold-500 dark:to-gold-600 rounded-2xl opacity-20 blur-xl" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gold-700 dark:text-gold-400 mb-6">
                  About the Company
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  VivaNova Works was founded on 26 January 2026 with a mission to create
                  original animated worlds that inspire global audiences.
                </p>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                  We are a digital-first animation company focused on developing and owning
                  original intellectual property for distribution across global platforms. By
                  combining compelling storytelling with AI-assisted production and
                  audience-driven insights, we build scalable animated franchises designed for
                  long-term growth.
                </p>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  The global demand for animated content continues to grow, but production
                  remains high-risk. VivaNova Works reduces this risk by combining audience
                  data and AI-assisted production to build scalable, commercially viable IPs.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 md:py-28 px-4 bg-light-card-alt/30 dark:bg-black/30 transition-colors duration-400">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatedSection direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gold-700 dark:text-gold-400 mb-6">
                  Our Vision
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                  To build globally recognised animated franchises that generate long-term
                  revenue across streaming, publishing, and branded consumer products.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { number: '2026', label: 'Year Founded' },
                    { number: 'Global', label: 'Audience Reach' },
                    { number: 'AI', label: 'Assisted Production' },
                    { number: 'IP', label: 'Original Content' },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-light-card dark:bg-dark-200 rounded-xl p-6 border border-light-border dark:border-gold-500/10 hover:border-gold-700/30 dark:hover:border-gold-500/30 transition-all duration-300"
                    >
                      <div className="text-2xl font-heading font-bold text-gold-700 dark:text-gold-400 mb-1">
                        {stat.number}
                      </div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="w-full h-80 md:h-96 bg-gray-200 dark:bg-black rounded-2xl border border-light-border dark:border-gold-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tl from-gold-700/10 dark:from-gold-500/10 to-transparent" />
                </div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-gold-700 to-gold-800 dark:from-gold-500 dark:to-gold-600 rounded-full opacity-20 blur-xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default About
