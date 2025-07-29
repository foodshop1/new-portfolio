import { motion } from 'motion/react';
import type { Variants } from 'motion/react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

const skills: Skill[] = [
  { name: "React", level: 90, icon: "⚛️", color: "from-blue-500 to-cyan-500" },
  { name: "TypeScript", level: 85, icon: "📘", color: "from-blue-600 to-blue-700" },
  { name: "Next.js", level: 88, icon: "⚡", color: "from-black to-gray-800" },
  { name: "Node.js", level: 82, icon: "🟢", color: "from-green-500 to-green-600" },
  { name: "Python", level: 78, icon: "🐍", color: "from-yellow-500 to-orange-500" },
  { name: "MongoDB", level: 75, icon: "🍃", color: "from-green-400 to-green-500" },
  { name: "PostgreSQL", level: 80, icon: "🐘", color: "from-blue-400 to-blue-500" },
  { name: "Docker", level: 70, icon: "🐳", color: "from-blue-500 to-blue-600" },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">Skills & Technologies</h1>
          <p className="text-xl text-gray-300">
            Here are the technologies I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Other Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={categoryVariants}
            >
              <h3 className="text-xl font-bold text-white mb-4">Frontend</h3>
              <div className="space-y-2">
                {["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Material-UI", "Redux"].map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={categoryVariants}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Backend</h3>
              <div className="space-y-2">
                {["Express.js", "FastAPI", "GraphQL", "REST APIs", "JWT", "OAuth"].map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={categoryVariants}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Tools & Others</h3>
              <div className="space-y-2">
                {["Git", "AWS", "Vercel", "Figma", "Jest", "CI/CD"].map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={skillCardVariants}
      transition={{ delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <motion.div
        className="text-4xl mb-4 text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {skill.icon}
      </motion.div>
      
      <motion.h3 
        className="text-lg font-bold text-white mb-3 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {skill.name}
      </motion.h3>
      
      <motion.div 
        className="w-full bg-white/20 rounded-full h-2 mb-2"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <motion.div
          className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.6, duration: 1 }}
        />
      </motion.div>
      
      <motion.p 
        className="text-sm text-gray-300 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        {skill.level}%
      </motion.p>
    </motion.div>
  );
}

const skillCardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const categoryVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
}; 