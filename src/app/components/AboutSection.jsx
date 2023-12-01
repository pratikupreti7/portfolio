'use client'

import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import Accordion from './Accordian'
const skillsCategories = {
  'Languages & Database Technologies': [
    'C#',
    '.Net',
    'Java',
    'JavaScript',
    'Python',
    'SQL',
    'MySQL',
  ],
  'Backend & Server Technologies': [
    'Node.js',
    'Django',
    'GraphQL',
    'Prisma ORM',
    'Redis',
    'JSON Web Tokens',
    'Google OAuth',
  ],
  'Frontend & User Interface': [
    'React',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'React-Query',
  ],
  'Tools and Frameworks': [
    'Object-Oriented Programming',
    'Jira',
    'Confluence',
    'Postman',
    'Microservices',
  ],
  'DevOps & Cloud Infrastructures': [
    'Git',
    'CI/CD',
    'Docker',
    'AWS',
    'Azure',
    'SDLC',
    'Agile Methodologies',
    'Azure 900 (Certified)',
  ],
}

const renderSkills = () => (
  <div>
    {Object.entries(skillsCategories).map(([category, skills]) => (
      <div key={category}>
        <h3 className="font-semibold text-lg mb-2">{category}</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-disc pl-4">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: <Accordion data={skillsCategories} />,
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <div className="space-y-6">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Master of Science in Computer Science
          </h3>
          <p className="text-gray-600">Stevens Institute of Technology</p>
          {/* <p className="text-sm text-gray-500">2019 - 2021</p> */}
          <p className="mt-2 text-gray-700">
            <b> Key Coursework:</b> Advanced Algorithms, Data Structures,
            Machine Learning, Cloud Computing
          </p>
          {/* <p className="mt-1 text-gray-700">
            {'Thesis: "Exploring the Impact of AI on Software Development"'}
          </p> */}
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-gray-600">Nirma University</p>
          {/* <p className="text-sm text-gray-500">2015 - 2019</p> */}
          <p className="mt-2 text-gray-700">
            <b> Key Coursework:</b> Intro to Programming, Operating Systems,
            Java, Computer Networks, Database Management Systems
          </p>
          {/* <p className="mt-1 text-gray-700">
            {
              'Final Project: "Developing a Responsive Mobile Application for IT Asset Management"'
            }
          </p> */}
        </div>
      </div>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a href="LINK_TO_AWS_CERT" target="_blank" rel="noopener noreferrer">
            AWS Cloud Practitioner
          </a>
        </li>
        <li>
          <a
            href="LINK_TO_GOOGLE_CLOUD_CERT"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Professional Cloud Developer
          </a>
        </li>
      </ul>
    ),
  },
]

const AboutSection = () => {
  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About Image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">{/* Your bio here */}</p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map(({ title, id }) => (
              <TabButton
                key={id}
                selectTab={() => handleTabChange(id)}
                active={tab === id}
              >
                {title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
