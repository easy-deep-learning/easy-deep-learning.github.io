import Link from 'next/link'

import classes from './GlobalMenu.module.css'

export const GlobalMenu = () => {
  return (
    <menu className={classes.component}>
      <li><Link href="/news">edu news</Link></li>
      <li><Link href="/free-universities">free universities programs</Link></li>
      <li><Link href="/companies">EduTech companies</Link></li>
      <li><Link href="/systems">systems</Link></li>
      <li><Link href="/books">books</Link></li>
    </menu>
  )
}
