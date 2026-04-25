import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import projects from '../data/projects'

function Projects() {
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
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-700/5 dark:bg-gold-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gold-700 via-gold-800 to-gold-900 dark:from-gold-300 dark:via-gold-400 dark:to-gold-600 bg-clip-text text-transparent">
              Our Projects
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            At VivaNova Works, we are currently in a strategic development phase, focused on
            exploring and validating original intellectual properties (IPs). We are actively
            producing two original animated series, both developed in-house as part of our
            long-term content vision.
          </motion.p>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.1}>
                <Link to={`/projects/${project.id}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group bg-light-card dark:bg-dark-200 rounded-2xl overflow-hidden border border-light-border dark:border-gold-500/10 hover:border-gold-700/30 dark:hover:border-gold-500/30 transition-all duration-500"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="h-64 md:h-auto bg-gray-200 dark:bg-black relative overflow-hidden">
                        {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent to-light-card/50 dark:to-dark-200/50 hidden md:block" /> */}
                        <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-gold-700/10 to-gold-800/5 dark:from-gold-500/10 dark:to-gold-600/5"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        />
                      </div>
                      <div className="md:col-span-2 p-8 md:p-10">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-dark-200 dark:text-white mb-4 group-hover:text-gold-700 dark:group-hover:text-gold-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                          {project.summary}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.genres.map((genre) => (
                            <span
                              key={genre}
                              className="text-xs px-3 py-1.5 rounded-full bg-gold-700/10 dark:bg-gold-500/10 text-gold-700 dark:text-gold-400 border border-gold-700/20 dark:border-gold-500/20"
                            >
                              {genre}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-gray-400 dark:text-gray-500">
                          Target Audience: {project.targetAudience}
                        </p>
                        <div className="mt-6">
                          <span className="text-gold-700 dark:text-gold-400 text-sm font-medium group-hover:underline">
                            View Details &rarr;
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Projects
