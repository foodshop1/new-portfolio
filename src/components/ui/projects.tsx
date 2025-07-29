import { motion } from 'motion/react';
import type { Variants } from 'motion/react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    image: "🛒",
    link: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "📋",
    link: "#"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website with smooth animations and interactive elements.",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    image: "💼",
    link: "#"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather dashboard with real-time data, charts, and location-based forecasts.",
    technologies: ["React", "Chart.js", "OpenWeather API"],
    image: "🌤️",
    link: "#"
  }
];

export default function Projects() {
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
          <h1 className="text-5xl font-bold text-white mb-6">My Projects</h1>
          <p className="text-xl text-gray-300">
            Here are some of the projects I've worked on recently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors cursor-pointer"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={projectCardVariants}
      transition={{ delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <motion.div
        className="text-6xl mb-4 text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {project.image}
      </motion.div>
      
      <motion.h3 
        className="text-2xl font-bold text-white mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {project.title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-300 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {project.description}
      </motion.p>
      
      <motion.div 
        className="flex flex-wrap gap-2 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {project.technologies.map((tech, techIndex) => (
          <motion.span
            key={tech}
            className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.6 + techIndex * 0.1, duration: 0.3 }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
      
      <motion.button
        className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        View Project
      </motion.button>
    </motion.div>
  );
}

const projectCardVariants: Variants = {
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
