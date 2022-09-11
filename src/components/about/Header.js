import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import '../../../static/index'
import * as styles from '../../../static/sass/about.module.scss'

export default function Header () {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <p className='knowMe'>Hi!👋 Let's get to know me</p>
        <h1 className='title'>About</h1>
      </header>
      <section className={styles.section}>
        <div className={`stickMe ${styles.stickMe}`}>
          <div className={styles.DPContain}>
          <StaticImage src='../../images/DP.jpg' className={styles.DP}/>
          </div>
          <h1 className='name'>Dinil Rubasinghe</h1>
          <p className='quote'>"Learn from Yesterday, Live for Today, Earn the Tommorrow"</p>
        </div>
      </section>
    </div>
  )
}

