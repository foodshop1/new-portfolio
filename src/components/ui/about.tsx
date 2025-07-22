import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">About Me</h1>
          <p className="text-xl text-gray-300">
            Full Stack Developer passionate about creating amazing digital experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Skills</h3>
            <ul className="text-gray-300 space-y-2">
              <li>React & Next.js</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>Database Design</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Experience</h3>
            <ul className="text-gray-300 space-y-2">
              <li>3+ years Full Stack Development</li>
              <li>Web Application Development</li>
              <li>API Design & Implementation</li>
              <li>UI/UX Design</li>
              <li>Agile Development</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
