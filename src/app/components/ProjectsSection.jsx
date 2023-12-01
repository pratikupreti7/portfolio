'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

const StatusLegend = () => {
  const statusInfo = {
    completed: { color: 'bg-green-500', text: 'Completed' },
    incomplete: { color: 'bg-red-500', text: 'Incomplete' },
    'under-construction': {
      color: 'bg-yellow-500',
      text: 'Under Construction',
    },
  }

  return (
    <div className="flex justify-center items-center gap-4 my-4">
      {Object.entries(statusInfo).map(([key, { color, text }]) => (
        <div key={key} className="flex items-center">
          <div className={`${color} h-3 w-3 rounded-full mr-2`}></div>
          <span className="text-white">{text}</span>
        </div>
      ))}
    </div>
  )
}

const projectsData = [
  {
    id: 1,
    title: 'NextJs Portfolio Website',
    description: 'My portfolio website',
    image: '/images/projects/1.0.png',
    tag: ['All', 'NextJs', 'Tailwind CSS'],
    gitUrl: 'https://github.com/pratikupreti7/portfolio',
    previewUrl: '/',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Razors N Reviews - Rating App',
    description: 'Full Stack Rating App for salons and hospitals',
    image: '/images/projects/3.jpeg',
    tag: ['All', 'Full Stack', 'React', 'Tailwind CSS', 'Nodejs', 'Databases'],
    gitUrl: 'https://github.com/pratikupreti7/razors-reviews_',
    previewUrl: 'https://razorsnreview.onrender.com/',
    status: 'completed',
  },
  {
    id: 3,
    title: 'BootUp- To boot is to restart',
    description: 'A single page website for a fintech startup',
    image: '/images/projects/2.png',
    tag: ['All', 'HTML/CSS'],
    gitUrl: 'https://github.com/pratikupreti7/bootup',
    previewUrl: 'https://pratikupreti7.github.io/bootup/',
    status: 'completed',
  },
  {
    id: 4,
    title: 'Mini Movie Recommender System',
    description: 'Based on current movie, recommends similar movies',
    image: '/images/projects/5.0.png',
    tag: ['All', 'Machine Learning', 'Python'],
    gitUrl: 'https://github.com/pratikupreti7/RecommenderSystem',
    status: 'completed',
  },
  {
    id: 14,
    title: 'Workout App',
    description: 'Full Stack Workout App using React and NodeJs',
    image: '/images/projects/16.png',
    tag: ['All', 'Full Stack', 'React', 'Tailwind CSS', 'Nodejs', 'Databases'],
    gitUrl: 'https://github.com/pratikupreti7/WorkoutApp',
    // previewUrl: 'https://pratikupreti7.github.io/webpage-portfolio/',
    status: 'completed',
  },

  {
    id: 12,
    title: 'Yumify :React Js Resturant Cart Functionalities',
    description:
      'Frontend foucsed website for Resturant to display menues and cart functionalities',
    image: '/images/projects/14.png',
    tag: ['All', 'React', 'Tailwind CSS'],
    gitUrl: 'https://github.com/pratikupreti7/yumify',
    previewUrl: 'https://www.youtube.com/watch?v=vyjA5dwqQpg',
    status: 'completed',
  },
  {
    id: 13,
    title: 'Couch Potato ',
    description: 'Full Stack Movie Rating and Comments App',
    image: '/images/projects/13.png',
    tag: ['All', 'Full Stack', 'React', 'Tailwind CSS', 'Nodejs', 'Databases'],
    gitUrl: 'https://github.com/pratikupreti7/couchpotato',
    // previewUrl: 'https://pratikupreti7.github.io/webpage-portfolio/',
    status: 'under-construction',
  },

  {
    id: 14,
    title: 'Twitter Clone using NextJs',
    description:
      'FullStack Twitter Clone that allows users to create and post tweets, follow other users, like, and view their own profile and the profiles of other users.',
    image: '/images/projects/18.png',
    tag: ['All', 'Full Stack', 'NextJs', 'Tailwind CSS', 'Nodejs', 'Databases'],
    gitUrl: 'https://github.com/pratikupreti7/twitter-clone',
    // previewUrl: 'https://pratikupreti7.github.io/webpage-portfolio/',
    status: 'completed',
  },

  {
    id: 6,
    title: 'Data Analysis using Python Package ',
    description: 'XML Parsing ,API ,Web Scraping ,Data Analysis using Python',
    image: '/images/projects/8.png',
    tag: ['All', 'Python', 'Data Analysis'],
    gitUrl: 'https://github.com/pratikupreti7/PythonPackage-DataAnalytics',
    status: 'completed',
  },
  {
    id: 7,
    title: 'Todo List using Django',
    description: 'Crud operations for Todo List using Django',
    image: '/images/projects/2.task.png',
    tag: ['All', 'HTML/CSS', 'Django', 'Python'],
    gitUrl: 'https://github.com/pratikupreti7/Django_todo',
    status: 'completed',
  },
  {
    id: 11,
    title: 'Sentiment Analysis',
    description: 'Analysis of sentiment of sentences using Python',
    image: '/images/projects/7.png',
    tag: ['All', 'Python', 'NLP'],
    gitUrl: 'https://github.com/pratikupreti7/sentimentanalysis',
    status: 'completed',
  },
  {
    id: 20,
    title: 'Yum : Food Ordering Website using Django',
    description: 'Django based website for Resturant',
    image: '/images/projects/11.png',
    tag: ['All', 'HTML/CSS', 'Django', 'Python'],
    gitUrl: 'https://github.com/pratikupreti7/Django_based_Website',
    status: 'completed',
  },
  {
    id: 8,
    title: 'Run Length Encoding',
    description: 'Encodes and decodes text using Python',
    image: '/images/projects/9.png',
    tag: ['All', 'Python'],
    gitUrl: 'https://github.com/pratikupreti7/run-length-encoding',
    status: 'completed',
  },

  {
    id: 9,
    title: 'Food Filtering App',
    description: 'Filter, Seach and Sort using React Js',
    image: '/images/projects/10.jpeg',
    tag: ['All', 'Tailwind CSS', 'React'],
    gitUrl: 'https://github.com/pratikupreti7/react-search-filter-app/',
    status: 'completed',
  },
  {
    id: 10,
    title: 'Responsive Navbar Design',
    description: 'Demo of a responsive navbar using HTML/CSS',
    image: '/images/projects/6.png',
    tag: ['All', 'HTML/CSS'],
    gitUrl: 'https://github.com/pratikupreti7/navbar',
    previewUrl: 'https://pratikupreti7.github.io/navbar/',
    status: 'completed',
  },
  {
    id: 5,
    title: 'Todo List',
    description: 'A simple todo list app using JavaScript',
    image: '/images/projects/5.png',
    tag: ['All', 'JavaScript', 'HTML/CSS'],
    gitUrl: 'https://github.com/pratikupreti7/todo',
    previewUrl: 'https://pratikupreti7.github.io/todo/',
    status: 'completed',
  },
  {
    id: 100,
    title: 'Single Page Portfolio Website ',
    description: 'Responsive Portfolio Website using HTML/CSS',
    image: '/images/projects/12.png',
    tag: ['All', 'HTML/CSS'],
    gitUrl: 'https://github.com/pratikupreti7/webpage-portfolio',
    previewUrl: 'https://pratikupreti7.github.io/webpage-portfolio/',
    status: 'completed',
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
          name="JavaScript"
          isSelected={tag === 'JavaScript'}
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

        <ProjectTag
          onClick={handleTagChange}
          name="Data Analysis"
          isSelected={tag === 'Data Analysis'}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="NLP"
          isSelected={tag === 'NLP'}
        />
      </div>
      <StatusLegend />
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
              status={project.status}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection
