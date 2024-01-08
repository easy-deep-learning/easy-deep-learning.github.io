'use client'

type Company = {
  id: string
  name: string
  url: string
  logo: string
  description: string
}

export type CompaniesListProps = {
  list: Company[]
}

export const CompaniesList = ({ list }: CompaniesListProps) => {
  return (
    <div>
      <h3>CompaniesList</h3>
      {list.length > 0 && <ul>
        {list.map((company) => <li key={company.id}>
          <a href={company.url} target="_blank" rel="noreferrer">
            <img src={company.logo} alt={company.name} />
            {company.name}
          </a>
          <p>{company.description}</p>
        </li>)}
      </ul>}
    </div>
  )
}
