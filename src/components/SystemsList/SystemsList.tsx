import classes from './SystemsList.module.css'

export type SystemsList = {
  systems: {
    name: string
    description: string
    wiki: string
  }[]
}

const SystemsList = ({ systems }: SystemsList) => {
  console.log("systems: ", systems); // eslint-disable-line
  
  return (
    <div className={classes.component}>
      SystemsList
    </div>
  )
}

export {
  SystemsList,
}
