import type { NextPage } from 'next'

import { CompaniesList } from '@/components'

const companies = [
  {
    id: '1',
    name: 'Khan Academy',
    url: 'https://www.khanacademy.org/',
    wiki: 'https://en.wikipedia.org/wiki/Khan_Academy',
    launched: '2006',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Khan_Academy_logo_%282018%29.svg/440px-Khan_Academy_logo_%282018%29.svg.png',
    description: 'Khan Academy is a nonprofit with the mission of providing a free, world-class education for anyone, anywhere.'
  },
  {
    id: '2',
    name: 'Coursera',
    url: 'https://www.coursera.org/',
    wiki: 'https://en.wikipedia.org/wiki/Coursera',
    launched: '2012',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Coursera_logo_%282020%29.svg/440px-Coursera_logo_%282020%29.svg.png',
    description: 'Choose from hundreds of free courses or pay to earn a Course or Specialization Certificate. Explore our catalog of online degrees, certificates, Specializations, & MOOCs in data science, computer science, business, health, and dozens of other topics.'
  }
];

const CompaniesPage: NextPage = () => {
  return (
    <div>
      <h1>Companies</h1>
      <CompaniesList list={companies} />
    </div>
  )
}

export default CompaniesPage
