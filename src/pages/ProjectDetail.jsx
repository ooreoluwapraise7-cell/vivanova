import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowLeft } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'
import projects from '../data/projects'

function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-gold-700 dark:text-gold-400 mb-4">
            Project Not Found
          </h1>
          <Link
            to="/projects"
            className="text-gold-700 dark:text-gold-400 hover:text-gold-600 dark:hover:text-gold-300 transition-colors"
          >
            &larr; Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Image */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        <div className="w-full h-64 sm:h-80 md:h-[28rem] bg-gray-200 dark:bg-black relative">
          <div className="absolute inset-0 bg-gradient-to-t from-light-bg dark:from-dark-500 via-transparent to-light-card-alt/50 dark:to-black/50 transition-colors duration-400" />
          <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Content */}
      <section className="relative -mt-20 pb-20 md:pb-28 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <AnimatedSection>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-gold-700 dark:text-gold-400 hover:text-gold-600 dark:hover:text-gold-300 transition-colors mb-8 text-sm"
            >
              <FaArrowLeft />
              Back to Projects
            </Link>
          </AnimatedSection>

          {/* Title & Genres */}
          <AnimatedSection delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-dark-200 dark:text-white mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.genres.map((genre) => (
                <span
                  key={genre}
                  className="text-sm px-4 py-1.5 rounded-full bg-gold-700/10 dark:bg-gold-500/10 text-gold-700 dark:text-gold-400 border border-gold-700/20 dark:border-gold-500/20"
                >
                  {genre}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Story Summary */}
          <AnimatedSection delay={0.2}>
            <div className="bg-light-card dark:bg-dark-200 rounded-2xl p-8 md:p-10 border border-light-border dark:border-gold-500/10 mb-8 transition-colors duration-400">
              <h2 className="text-2xl font-heading font-semibold text-gold-700 dark:text-gold-400 mb-4">
                Story Summary
              </h2>
              {project.fullDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Target Audience */}
          <AnimatedSection delay={0.3}>
            <div className="bg-light-card dark:bg-dark-200 rounded-2xl p-8 md:p-10 border border-light-border dark:border-gold-500/10 mb-8 transition-colors duration-400">
              <h2 className="text-2xl font-heading font-semibold text-gold-700 dark:text-gold-400 mb-4">
                Target Audience
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{project.targetAudience}</p>
              {project.secondaryAudience && (
                <p className="text-gray-400 dark:text-gray-500 text-sm">
                  Secondary: {project.secondaryAudience}
                </p>
              )}
            </div>
          </AnimatedSection>

          {/* Characters */}
          {project.characters && (
            <AnimatedSection delay={0.4}>
              <div className="bg-light-card dark:bg-dark-200 rounded-2xl p-8 md:p-10 border border-light-border dark:border-gold-500/10 transition-colors duration-400">
                <h2 className="text-2xl font-heading font-semibold text-gold-700 dark:text-gold-400 mb-6">
                  Main Characters
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.characters.map((character, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="bg-light-card-alt dark:bg-dark-400 rounded-xl p-5 border border-light-border dark:border-gold-500/5 hover:border-gold-700/20 dark:hover:border-gold-500/20 transition-all duration-300"
                    >
                      <h4 className="text-lg font-heading font-semibold text-dark-200 dark:text-white mb-1">
                        {character.name}
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{character.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </motion.div>
  )
}

export default ProjectDetail
