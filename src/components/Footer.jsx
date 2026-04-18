import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaTiktok, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Projects', path: '/projects' },
]

const socialLinks = [
  { icon: FaTiktok, href: 'https://www.tiktok.com/@vivanova.works', label: 'TikTok' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
]

function Footer() {
  return (
    <footer className="bg-light-card-alt dark:bg-black border-t border-light-border dark:border-gold-500/20 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src="/logo.jpeg"
                alt="VivaNova Works"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="text-xl font-heading font-bold text-gold-700 dark:text-gold-400">
                VivaNova Works
              </span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Building original animated worlds using storytelling, data, and AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold-700 dark:text-gold-400 font-heading font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-500 dark:text-gray-400 hover:text-gold-700 dark:hover:text-gold-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-gold-700 dark:text-gold-400 font-heading font-semibold text-lg mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-light-bg dark:bg-dark-50 flex items-center justify-center text-gold-700 dark:text-gold-400 hover:bg-gold-700 dark:hover:bg-gold-500 hover:text-white dark:hover:text-black transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-gold-700 dark:text-gold-400 font-heading font-semibold text-lg mb-4">
              Address
            </h3>
            <address className="text-gray-500 dark:text-gray-400 text-sm not-italic leading-relaxed">
              96–98 Corporation Road<br />
              Middlesbrough, TS1 2RB<br />
              United Kingdom
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-light-border dark:border-gold-500/10 text-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} VivaNova Works. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
