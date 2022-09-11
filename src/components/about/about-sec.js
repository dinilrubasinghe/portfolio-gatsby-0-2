import React from 'react'
import * as styles from '../../../static/sass/about.module.scss'

export default function About() {
  return (
    <div>
      <section className={styles.sectionA}>
        <ul className='about-list'>
          <li id='li1'>
            <p>🌱</p>
            <p>I’m currently learning Web development using Javascript Frameworks while studying for my IAS levels.</p>
          </li>
          <li id='li2'>
            <p>🧩</p>
            <p>My Ambition is to work as a Senior Software Engineer in reputable companies.</p>
          </li>
          <li id='li3'>
            <p>🎯</p>
            <p>My target is to collaborate and contribute to as many projects as possible and make a better digital living for the people.</p>
          </li>
          <li id='li4'>
            <p>✨</p>
            <p> I love to Explore, Trying new things, taking risks and testing new ideas, designing new stuff no matter how much I fail</p>
          </li>
        </ul>
      </section>
    </div>
  )
}
