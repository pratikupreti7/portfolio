import React, { useState } from 'react'

const AccordionItem = ({ title, skills, isOpen, onToggle }) => {
  const columns = 3 // Adjust this number based on how many columns you want

  // Divide skills into columns
  const skillsInColumns = []
  for (let i = 0; i < skills.length; i += columns) {
    skillsInColumns.push(skills.slice(i, i + columns))
  }

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-3 px-5 text-left"
        onClick={onToggle}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-lg">{isOpen ? '-' : '+'}</span>
      </button>
      <div
        className={`transition-max-height duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px]' : 'max-h-0'
        } overflow-hidden`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
          {skillsInColumns.map((column, columnIndex) => (
            <ul key={columnIndex} className="list-disc">
              {column.map((skill, skillIndex) => (
                <li key={skillIndex} className="py-1">
                  {skill}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}

const Accordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="accordion">
      {Object.entries(data).map(([category, skills], index) => (
        <AccordionItem
          key={index}
          title={category}
          skills={skills}
          isOpen={index === openIndex}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  )
}

export default Accordion
