import type { NextPage } from 'next'

import { SystemsList } from '@/components'

const systems = [
  {
    name: 'Flipped classroom',
    description: 'Flipped classroom is an instructional strategy and a type of blended learning that reverses the traditional learning environment by delivering instructional content, often online, outside of the classroom. It moves activities, including those that may have traditionally been considered homework, into the classroom. In a flipped classroom, students watch online lectures, collaborate in online discussions, or carry out research at home and engage in concepts in the classroom with the guidance of a mentor.',
    wiki: 'https://en.wikipedia.org/wiki/Flipped_classroom',
  },
  {
    name: 'Personalized learning',
    description: 'Personalized learning, individualized instruction, personal learning environment and direct instruction all refer to efforts to tailor education to meet the different needs of students. In addition, various terms are used to describe what personalized learning looks like, including differentiated instruction, individualized instruction and adaptive learning.',
    wiki: 'https://en.wikipedia.org/wiki/Personalized_learning',
  },
]

const SystemsPage: NextPage = () => {
  return (
    <div>
      <h3>SystemsPage</h3>
      <SystemsList systems={systems} />
    </div>
  )
}

export default SystemsPage
