import { Link } from 'gatsby'
import React from 'react'

import * as styles from '../../../static/sass/nav.module.scss'

export default function Navbar () {
  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        <Link to='/' className='home'>
          Home
        </Link>
        <Link to='/work' className='work'>
          Work
        </Link>
        <Link to='/about' className='about'>
          About
        </Link>
      </div>
    </nav>
  )
}
