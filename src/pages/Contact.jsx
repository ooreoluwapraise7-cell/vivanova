import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaTiktok } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'
import GoldButton from '../components/GoldButton'
import { form } from 'framer-motion/client'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: 'service_puen6eu',
        template_id: 'template_6f7mduc',
        user_id: 'rvQEzVdED_xAUf81w',
        template_params: {
            'title': 'VivaNovaWorks',
            'name': formData.name,
            'email': formData.email,
            'message': formData.message,
        }
    }),
    })
      .then((response) => {
      setLoading(false)
        if (response.ok) {
          console.log('Email sent successfully!')
          setSubmitted(true)
          setFormData({ name: '', email: '', message: '' })
          setTimeout(() => setSubmitted(false), 3000)
        } else {
          // console.error('Failed to send email:', response.statusText)
        }
      })
      .catch((error) => {
        setLoading(false)
        // console.error('Error sending email:', error)
      })  
  }

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
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gold-700 via-gold-800 to-gold-900 dark:from-gold-300 dark:via-gold-400 dark:to-gold-600 bg-clip-text text-transparent">
              Contact Us
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            For investment enquiries
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="text-center text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
              We welcome enquiries from investors, partners, and collaborators interested in
              building the future of animation with us.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Form */}
            <AnimatedSection direction="left">
              <div className="bg-light-card dark:bg-dark-200 rounded-2xl p-8 md:p-10 border border-light-border dark:border-gold-500/10 transition-colors duration-400">
                <h2 className="text-2xl font-heading font-semibold text-gold-700 dark:text-gold-400 mb-8">
                  Send us a message
                </h2>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-gold-700/10 dark:bg-gold-500/10 border border-gold-700/30 dark:border-gold-500/30 rounded-lg text-gold-700 dark:text-gold-400 text-sm"
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-500 dark:text-gray-400 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-light-bg dark:bg-dark-400 border border-light-border dark:border-gold-500/10 rounded-lg text-dark-200 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-gold-700/50 dark:focus:border-gold-500/50 transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 dark:text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-light-bg dark:bg-dark-400 border border-light-border dark:border-gold-500/10 rounded-lg text-dark-200 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-gold-700/50 dark:focus:border-gold-500/50 transition-colors duration-300"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 dark:text-gray-400 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-light-bg dark:bg-dark-400 border border-light-border dark:border-gold-500/10 rounded-lg text-dark-200 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-gold-700/50 dark:focus:border-gold-500/50 transition-colors duration-300 resize-none"
                      placeholder="Your message"
                    />
                  </div>
                  <GoldButton type="submit" disabled={loading}>
                    {loading ? "Please Wait..." : "Send Message"}
                  </GoldButton>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection direction="right">
              <div className="space-y-8">
                {/* Email */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="bg-light-card dark:bg-dark-200 rounded-2xl p-8 border border-light-border dark:border-gold-500/10 hover:border-gold-700/30 dark:hover:border-gold-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-700/10 dark:bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-gold-700 dark:text-gold-400 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-dark-200 dark:text-white mb-2">
                        Email
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">hello@vivanova-works.com</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">info@vivanova-works.com</p>
                    </div>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="bg-light-card dark:bg-dark-200 rounded-2xl p-8 border border-light-border dark:border-gold-500/10 hover:border-gold-700/30 dark:hover:border-gold-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-700/10 dark:bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-gold-700 dark:text-gold-400 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-dark-200 dark:text-white mb-2">
                        Address
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        96–98 Corporation Road<br />
                        Middlesbrough, TS1 2RB<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* TikTok */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="bg-light-card dark:bg-dark-200 rounded-2xl p-8 border border-light-border dark:border-gold-500/10 hover:border-gold-700/30 dark:hover:border-gold-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-700/10 dark:bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                      <FaTiktok className="text-gold-700 dark:text-gold-400 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-dark-200 dark:text-white mb-2">
                        Watch Our Work
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                        Discover our latest original animations and follow our creative
                        journey on TikTok:
                      </p>
                      <a
                        href="https://www.tiktok.com/@vivanova.works"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold-700 dark:text-gold-400 text-sm hover:text-gold-600 dark:hover:text-gold-300 transition-colors underline"
                      >
                        @vivanova.works
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact
