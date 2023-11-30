'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

const projectsData = [
  {
    id: 1,
    title: 'NextJs Portfolio Website',
    description: 'My portfolio website',
    image: '/images/projects/1.0.png',
    tag: ['All', 'NextJs', 'Tailwind CSS'],
    gitUrl: '/',
    previewUrl: '/',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Potography Portfolio Website',
    description: 'Project 2 description',
    image: '/images/projects/2.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
    status: 'completed',
  },
  {
    id: 3,
    title: 'E-commerce Application',
    description: 'Project 3 description',
    image: '/images/projects/3.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
    status: 'completed',
  },
  {
    id: 4,
    title: 'Food Ordering Application',
    description: 'Project 4 description',
    image: '/images/projects/4.png',
    tag: ['All', 'Mobile'],
    gitUrl: '/',
    previewUrl: '/',
    status: 'completed',
  },
  {
    id: 5,
    title: 'React Firebase Template',
    description: 'Authentication and CRUD operations',
    image: '/images/projects/5.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 6,
    title: 'Full-stack Roadmap',
    description: 'Project 5 description',
    image: '/images/projects/6.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 6,
    title: 'Python  Roadmap',
    description: 'Project 5 description',
    image: '/images/projects/6.png',
    tag: ['All', 'Python'],
    gitUrl: '/',
    previewUrl: '/',
  },

  {
    id: 6,
    title: 'Python BootCamp',
    description: 'Project 5 description',
    image: '/images/projects/6.png',
    tag: ['All', 'Python'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 7,
    title: 'Python BootCamp',
    description: 'Project 5 description',
    image: '/images/projects/6.png',
    tag: ['All', 'Python'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 8,
    title: 'BootUp',
    description: 'Project 5 description',
    image: '/images/projects/6.png',
    tag: ['All', 'Python'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 6,
    title: 'Python BootCamp',
    description: 'Project 5 description',
    image: '/images/projects/6.png',
    tag: ['All', 'Python'],
    gitUrl: '/',
    previewUrl: '/',
  },

  {
    id: 6,
    title: 'Python BootCamp',
    description: 'Project 5 description',
    image: '/images/projects/6.png',
    tag: ['All', 'Python'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 6,
    title: 'Python BootCamp',
    description: 'Project 5 description',
    image: '/images/projects/6.png',
    tag: ['All', 'Python'],
    gitUrl: '/',
    previewUrl: '/',
  },
]

const ProjectsSection = () => {
  const [tag, setTag] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  )

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="  text-white flex flex-wrap justify-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === 'React'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Full Stack"
          isSelected={tag === 'Full Stack'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="NextJs"
          isSelected={tag === 'NextJs'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="HTML/CSS"
          isSelected={tag === 'HTML/CSS'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Tailwind CSS"
          isSelected={tag === 'Tailwind CSS'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === 'Python'}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Machine Learning"
          isSelected={tag === 'Machine Learning'}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection
