import React from 'react'
import * as styles from '../../../static/sass/hero.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faGithub,
  faPinterest
} from '@fortawesome/free-brands-svg-icons'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import '../../../static/index'
import { Link } from 'gatsby'

export default function Hero () {
  return (
    <div>
      <div className={`hero ${styles.hero}`}>
        <div id='containerLeft' className={styles.containerLeft}>
          <h1
            className={`animate__animated animate__fadeInDown ${styles.greet1}`}
          >
            Hi! I'm Dinil
          </h1>
          <p
            className={`animate__animated animate__fadeIn animate__delay_0_5 ${styles.greet2}`}
          >
            Nice to meet you!✌️
          </p>
          <div className={styles.social}>
            <a
              href='https://instagram.com/xdinil_h'
              target={'_blank'}
              rel='noopener noreferrer'
              className='animate__animated animate__fadeIn animate__delay_0_75'
            >
              <FontAwesomeIcon id='arrd' icon={faInstagram} size='3x' />
            </a>
            <a
              href='https://github.com/dinilrubasinghe'
              target={'_blank'}
              rel='noopener noreferrer'
              className='animate__animated animate__fadeIn animate__delay_0_85'
            >
              <FontAwesomeIcon id='arrd' icon={faGithub} size='3x' />
            </a>
            <a
              href='https://pinterest.com/dinilrubasinghe'
              target={'_blank'}
              rel='noopener noreferrer'
              className='animate__animated animate__fadeIn animate__delay_0_95'
            >
              <FontAwesomeIcon id='arrd' icon={faPinterest} size='3x' />
            </a>
          </div>
        </div>
        <div
          className={`animate__animated animate__fadeInDown animate__delay_0_75 ${styles.containerRight}`}
        >
          <p id='containerRight'>
            <span className='animate__animated animate__fadeIn animate__delay_1'>
              A passionate Student, an Explorer, a Programmer, a Great Designer
              and a Hobiest
            </span>
          </p>
        </div>
      </div>
      <div className={`loader ${styles.loader}`}>
        <p className={`loadCatch ${styles.loadCatch}`}>
          Let's Get to Know Me :) <Link to='/about'><FontAwesomeIcon className={styles.arrowIcon} icon={faAnglesRight} size='3x' /></Link>
        </p>
      </div>
    </div>
  )
}
