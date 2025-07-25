import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-400/5 rounded-full blur-2xl"></div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 right-0 p-6 z-10"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl font-bold text-purple-300"
          >
            Elroy Quan
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex space-x-4 text-white"
          >
            <li>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-md bg-transparent text-white hover:text-purple-300 transition-colors focus:outline-none border-none"
                onClick={() => {
                  /* scroll to home */
                }}
              >
                Home
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-md bg-transparent text-white hover:text-purple-300 transition-colors focus:outline-none border-none"
                onClick={() => {
                  /* scroll to about */
                }}
              >
                About
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-md bg-transparent text-white hover:text-purple-300 transition-colors focus:outline-none border-none"
                onClick={() => {
                  /* scroll to projects */
                }}
              >
                Projects
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-md bg-transparent text-white hover:text-purple-300 transition-colors focus:outline-none border-none"
                onClick={() => {
                  /* scroll to skills */
                }}
              >
                Skills
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-md bg-transparent text-white hover:text-purple-300 transition-colors focus:outline-none border-none"
                onClick={() => {
                  /* scroll to contact */
                }}
              >
                Contact
              </motion.button>
            </li>
          </motion.ul>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-4xl">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-6xl font-bold text-white mb-4">
              Hi, I'm{' '}
              <span className="text-purple-400 relative">
                Elroy Quan
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-0 left-0 h-1 bg-purple-400"
                />
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Full Stack Developer passionate about creating amazing digital experiences with modern technologies and
            clean code.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 relative z-10"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg relative z-10"
              onClick={() => {
                alert('placeholder');
                /* scroll to work/projects */
              }}
              type="button"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-purple-400 text-white rounded-lg font-semibold hover:bg-purple-400 hover:text-black transition-colors text-lg relative z-10"
              onClick={() => {
                alert('placeholder');
                /* scroll to contact */
              }}
              type="button"
            >
              Get In Touch
            </motion.button>
          </motion.div>
          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-white hover:text-purple-300 transition-colors z-10"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-white hover:text-purple-300 transition-colors z-10"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-white hover:text-purple-300 transition-colors z-10"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
