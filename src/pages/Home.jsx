import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaFilm, FaUsers, FaChartLine, FaRocket, FaBrain, FaEye, FaVideo, FaTiktok } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'
import GoldButton from '../components/GoldButton'
import projects from '../data/projects'

const partners = [
  'Partner 1', 'Partner 2', 'Partner 3', 'Partner 4',
  'Partner 5', 'Partner 6', 'Partner 7', 'Partner 8',
]

const whatWeDo = [
  {
    icon: FaFilm,
    title: 'Original Animated IP',
    description: 'Develop and own original animated IP',
  },
  {
    icon: FaUsers,
    title: 'Characters & Worlds',
    description: 'Create characters and story worlds for long-term franchise growth',
  },
  {
    icon: FaChartLine,
    title: 'Test & Validate',
    description: 'Rapidly test and validate content using digital platforms',
  },
  {
    icon: FaRocket,
    title: 'Scale & Expand',
    description: 'Scale successful concepts into series, publishing, and merchandise',
  },
]

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-light-card-alt via-light-bg to-light-card-alt dark:from-black dark:via-dark-500 dark:to-black transition-colors duration-400" />
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold-700 dark:bg-gold-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gold-700 via-gold-800 to-gold-900 dark:from-gold-300 dark:via-gold-400 dark:to-gold-600 bg-clip-text text-transparent">
              VivaNova Works
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Building original animated worlds using storytelling, data, and AI.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <GoldButton to="/contact">Contact Us</GoldButton>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-gold-700/50 dark:border-gold-400/50 flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-gold-700 dark:bg-gold-400 rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Partners Section */}
      {/* <section className="py-16 md:py-20 bg-light-card-alt/50 dark:bg-black/50 overflow-hidden transition-colors duration-400">
        <AnimatedSection>
          <h2 className="text-center text-3xl md:text-4xl font-heading font-bold text-gold-700 dark:text-gold-400 mb-12">
            Our Partners
          </h2>
        </AnimatedSection>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-light-bg/80 dark:from-black/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-light-bg/80 dark:from-black/80 to-transparent z-10" />
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-20 bg-light-card dark:bg-dark-100 rounded-lg flex items-center justify-center border border-light-border dark:border-gold-500/10 hover:border-gold-700/30 dark:hover:border-gold-500/30 transition-colors duration-300"
              >
                <span className="text-gray-400 dark:text-gray-500 text-sm font-medium">{partner}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* What We Do Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-gold-700 dark:text-gold-400 mb-4">
                What We Do
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                At VivaNova Works, we:
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whatWeDo.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -10, rotateY: 5 }}
                  className="relative group bg-gradient-to-b from-light-card to-light-card-alt dark:from-dark-100 dark:to-dark-300 rounded-2xl p-8 border border-light-border dark:border-gold-500/10 hover:border-gold-700/40 dark:hover:border-gold-500/40 transition-all duration-500 h-full"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gold-700/5 dark:from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-700/20 to-gold-800/10 dark:from-gold-500/20 dark:to-gold-600/10 flex items-center justify-center mb-6"
                    >
                      <item.icon className="text-3xl text-gold-700 dark:text-gold-400" />
                    </motion.div>
                    <h3 className="text-xl font-heading font-semibold text-dark-200 dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AI + Data Section */}
      <section className="py-20 md:py-28 px-4 bg-light-card-alt/30 dark:bg-black/30 transition-colors duration-400">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatedSection direction="left">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-gold-700/10 dark:bg-gold-500/10 border border-gold-700/20 dark:border-gold-500/20">
                  <FaBrain className="text-gold-700 dark:text-gold-400 text-sm" />
                  <span className="text-gold-700 dark:text-gold-400 text-xs font-semibold uppercase tracking-wider">AI + Data</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gold-700 dark:text-gold-400 mb-6">
                  AI-Driven Production &amp; Audience Insights
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  At VivaNova Works, we use AI-assisted tools and data analytics to streamline
                  animation workflows and reduce production time, while analysing audience
                  engagement data to identify high-performing content. These insights directly
                  inform which concepts are developed into full flagship animation projects.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: FaBrain, label: 'AI-Assisted Production' },
                  { icon: FaChartLine, label: 'Data Analytics' },
                  { icon: FaEye, label: 'Audience Insights' },
                  { icon: FaVideo, label: 'Streamlined Workflows' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.03 }}
                    className="bg-light-card dark:bg-dark-200 rounded-2xl p-6 border border-light-border dark:border-gold-500/10 hover:border-gold-700/30 dark:hover:border-gold-500/30 transition-all duration-300 text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-700/20 to-gold-800/10 dark:from-gold-500/20 dark:to-gold-600/10 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="text-2xl text-gold-700 dark:text-gold-400" />
                    </div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-gold-700 dark:text-gold-400 mb-4">
                Early Traction
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { value: '20,000+', label: 'Video Views', icon: FaEye },
              { value: '500+', label: 'Audience Interactions', icon: FaUsers },
              { value: 'Multiple', label: 'Animated Clips in Episodic Format', icon: FaVideo },
              { value: 'Rapid', label: 'Growing Digital Audience on TikTok', icon: FaTiktok },
              { value: '2', label: 'Original IPs Currently in Testing', icon: FaRocket },
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative group bg-light-card dark:bg-dark-200 rounded-2xl p-8 border border-light-border dark:border-gold-500/10 hover:border-gold-700/40 dark:hover:border-gold-500/40 transition-all duration-500 text-center"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gold-700/5 dark:from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-700/20 to-gold-800/10 dark:from-gold-500/20 dark:to-gold-600/10 flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="text-2xl text-gold-700 dark:text-gold-400" />
                    </div>
                    <div className="text-3xl md:text-4xl font-heading font-bold text-gold-700 dark:text-gold-400 mb-2">
                      {stat.value}
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20 md:py-28 px-4 bg-light-card-alt/30 dark:bg-black/30 transition-colors duration-400">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-gold-700 dark:text-gold-400 mb-4">
                Projects
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.15}>
                <Link to={`/projects/${project.id}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group bg-light-card dark:bg-dark-200 rounded-2xl overflow-hidden border border-light-border dark:border-gold-500/10 hover:border-gold-700/30 dark:hover:border-gold-500/30 transition-all duration-500"
                  >
                    <div className="h-48 bg-gray-200 dark:bg-black relative overflow-hidden">
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-light-card dark:from-dark-200 to-transparent opacity-60" /> */}
                      <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-gold-700/10 to-gold-800/5 dark:from-gold-500/10 dark:to-gold-600/5"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-semibold text-dark-200 dark:text-white mb-2 group-hover:text-gold-700 dark:group-hover:text-gold-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                        {project.summary}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.genres.slice(0, 3).map((genre) => (
                          <span
                            key={genre}
                            className="text-xs px-3 py-1 rounded-full bg-gold-700/10 dark:bg-gold-500/10 text-gold-700 dark:text-gold-400 border border-gold-700/20 dark:border-gold-500/20"
                          >
                            {genre}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-gray-400 dark:text-gray-500">
                        Target: {project.targetAudience}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="text-center mt-12">
              <GoldButton to="/projects">View More</GoldButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Partner With Us CTA */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-700/20 via-gold-600/10 to-gold-700/20 dark:from-gold-600/20 dark:via-gold-500/10 dark:to-gold-600/20" />
              <div className="absolute inset-0 border border-gold-700/20 dark:border-gold-500/20 rounded-3xl" />
              <div className="relative z-10 text-center py-16 md:py-20 px-6 md:px-12">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-dark-200 dark:text-white mb-6">
                  Partner With Us
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                  We are currently raising under SEIS and welcome early investors to join us
                  in building the next generation of animated IP.
                </p>
                <GoldButton to="/contact">Contact Us</GoldButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
