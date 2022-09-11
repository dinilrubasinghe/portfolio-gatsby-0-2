import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import * as styles from '../../../static/sass/about.module.scss'

export default function Skills () {
  return (
    <div>
      <section className={styles.sectionB}>
        <div>
          <h1>My Skills and Utilities⚙️</h1>
        </div>
      </section>
      <section className={styles.sectionB}>
        <h3>Languages</h3>
        {/* <div> */}
        <StaticImage src='icons/python.png' alt='Python' width={100} className={styles.free} /><p className={styles.skillName}>Python</p>
        <StaticImage src='icons/js.png' width={80} className={styles.free} /><p className={styles.skillName}>Javascript</p>
        <StaticImage src='icons/html.png' width={80} className={styles.free} /><p className={styles.skillName}>Html</p>
        <StaticImage src='icons/css.png' width={80} className={styles.free} /><p className={styles.skillName}>CSS</p>
        <StaticImage src='icons/bootstrap.png' width={80} className={styles.free} /><p className={styles.skillName}>Bootstrap</p>
        <StaticImage src='icons/react.png' width={80} className={styles.free} /><p className={styles.skillName}>React JS</p>
        <StaticImage src='icons/sass.png' width={80} className={styles.free} /><p className={styles.skillName}>SASS/SCSS</p>
        <StaticImage src='icons/c.png' width={80} className={styles.free} /><p className={styles.skillName}>C</p>
        {/* </div> */}
      </section>
      <section className={styles.sectionB}>
        <h3>Tools and Technology</h3>
        <StaticImage src='icons/adobe-xd.png' width={80} className={styles.free} /><p className={styles.skillName}>Adobe XD</p>
        <StaticImage src='icons/creative-cloud.png' width={80} className={styles.free} /><p className={styles.skillName}>Adobe Creative Suite (CC Creative Cloud)</p>
        <StaticImage src='icons/git.png' width={80} className={styles.free} /><p className={styles.skillName}>git</p>
        <StaticImage src='icons/illustrator.png' width={80} className={styles.free} /><p className={styles.skillName}>Adobe Illustrator</p>
        <StaticImage src='icons/photoshop.png' width={80} className={styles.free} /><p className={styles.skillName}>Adobe Photoshop</p>
        <StaticImage src='icons/behance.png' width={80} className={styles.free} /><p className={styles.skillName}>Behance Community</p>
        <StaticImage src='icons/github.png' width={80} className={styles.free} /><p className={styles.skillName}>Github</p>
        <StaticImage src='icons/vscode.png' width={80} className={styles.free} /><p className={styles.skillName}>Microsoft Visual Studio Code</p>
        <StaticImage src='icons/windows.png' width={80} className={styles.free} /><p className={styles.skillName}>Microsoft Windows (11)</p>
        <StaticImage src='icons/notion.png' width={80} className={styles.free} /><p className={styles.skillName}>Notion</p>
      </section>
      <section className={styles.sectionB}>
        (●'◡'●)

        <Link to='../work' className={styles.direct}>🪄Check My Work..</Link>
      </section>
    </div>
  )
}
