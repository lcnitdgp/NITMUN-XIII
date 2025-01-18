import { NavLink } from 'react-router-dom';
import styles from '../styles/Events.module.scss';
import cx from 'classnames';
import { events } from '../data/data';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as LinkIcon } from '../media/icons/link.svg';
import Artist from './Artist';
import Commitees from './Commitee.js';
import TeamCards from './TeamMembers';
import styles2 from '../styles/Home.module.scss';

const timeCompare = (a, b) => {
  if (events[a].time < events[b].time) {
    return -1;
  } else if (events[a].time === events[b].time) {
    return 0;
  } else {
    return 1;
  }
}

const Events = ({ user }) => {
  const eventFigureWrapper = useRef(null);
  const [currentDay, setCurrentDay] = useState(0);
  const [activeEventId, setActiveEventId] = useState(null);

  useEffect(() => {
    const wrapper = eventFigureWrapper.current;
    const figures = document.querySelectorAll(`.${styles['current-figure']}`);

    const stickEventFigure = () => {
      const stickFigure = (el, figure) => {
        if (el.getBoundingClientRect().top > (window.innerHeight - figure.getBoundingClientRect().width)) {
          figure.style.position = 'absolute';
          figure.style.top = '0';
        } else if (el.getBoundingClientRect().bottom > window.innerHeight) {
          figure.style.position = 'fixed';
          figure.style.bottom = '0';
          figure.style.top = 'unset';
        } else {
          figure.style.position = 'absolute';
          figure.style.bottom = '0';
          figure.style.top = 'unset';
        }
      }

      figures.forEach(figure => {
        stickFigure(wrapper, figure);
      })
    }

    window.addEventListener('scroll', stickEventFigure)

    return () => {
      window.removeEventListener('scroll', stickEventFigure);
    }
  }, [currentDay])

  return (
    <motion.div className={cx(styles.events, 'page-transition', 'container')}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
    >
      <header className={cx('page-header', styles['page-header'])}>
        <h1 className='heading'>
          <span>About</span>
          <span>NITMUN</span>
        </h1>
        <div className={cx(styles['header-btn-wrapper'])}>
          <NavLink to='/gallery' className={cx('btn', styles['intro-header-btn'])}>
            <span className={cx('btn-subtitle', styles['intro-btn-subtitle'])}>NITMUN' XIII by The Literary Circle</span>
            <span className={cx('btn-text', styles['intro-btn-text'])}>Gallery</span>
            <LinkIcon />
          </NavLink>
        </div>
        <div className={cx('subtitle', styles['header-subtitle'])}>
          <h2>Jan.24-25</h2>
          <div>2025</div>
        </div>
      </header>
        
      <Commitees comname="About" number=" " numbertext="" commimage="./assets/nitmun13logo.png" textone="NITMUN is a forum convened by the members of the Literary Circle for discussion and analysis of global issues. It seeks to bring out motivated delegates from all over the country for brainstorming and discussing over significant international issues.
NITMUN promises a challenging yet a very entertaining time to all delegates."  texttwo=" Our greatest goal is to make sure that each delegate learns how to tackle world issues better at the end of the conference as the world is in dire need of young leaders now.
Currently in its 13th edition, NITMUN has been extremely successful in providing the perfect experience to each delegate. Over the years, we have entertained more than 1000 delegates in total. Delegates arrive from all corners of India for an experience they will never forget."/>
      <main className={cx(styles['main-content'])}>
      <nav className={styles['schedule-nav']}>
        <ul className={styles.tabs}>
          {['UNSC', 'UNODC', 'AIPPM', 'IP'].map((day, i) => (
            <ScheduleNavBtn key={day}
              currentDay={currentDay} day={i}
              label={day} handleDayChange={setCurrentDay} />
          ))}
        </ul>
      </nav>
      {currentDay === 0 && (
        <Artist
          orderContent={2}
          orderImage={1}
          imagesrc="./assets/about_images/UNSC.jpg"
          studyguide="./assets/unsc study guide25.pdf"
          portfolio="./assets/unsc_porfolio_matrix_25.pdf"
          comnumber="01"
          comshorttext="UNSC"
          comparatext="Deliberation on the Yemen Crisis with Special Emphasis on Proxy Warfare, Radicalization, Humanitarian Blockades, and the Escalation of Regional Instability in the Arabian Peninsula."
          comfulltext="United Nations Security Council"
        />
      )}
      {currentDay === 1 && (
        <Artist
          orderContent={1}
          orderImage={2}
          imagesrc="./assets/about_images/UNODC.jpg"
          studyguide="./assets/unodc study guide25.pdf"
          portfolio="./assets/unodc_porfolio_matrix_25.pdf"
          comnumber="02"
          comshorttext="UNODC"
          comparatext="Taking measures to counter the rising influence of cartels and narcoparamilitary groups in Columbia to curb international drug trafficking."
          comfulltext="United Nations Office on Drugs and Crime"
        />
      )}
      {currentDay === 2 && (
        <Artist
          orderContent={2}
          orderImage={1}
          imagesrc="./assets/about_images/AIPPM.jpg"
          studyguide="./assets/aippm study guide25.pdf"
          portfolio="./assets/aippm_portfolio_matrix_25.pdf"
          comnumber="03"
          comshorttext="AIPPM"
          comparatext="Deliberation on the decline in foreign investments, rising fiscal trade deficits with neighbouring countries, currency depreciation due to border tensions, and addressing regional disparities in FDI to ensure balanced economic development."
          comfulltext="All India Political Parties Meet"
        />
      )}
      {currentDay === 3 && (
        <Artist
          orderContent={1}
          orderImage={2}
          imagesrc="./assets/IP_poster.jpg"
          studyguide="./assets/IP study guide25.pdf"
          portfolio="./assets/IP portfolio matrix25.pdf"
          comnumber="04"
          comshorttext="IP"
          comparatext="Presenting to you an independent body, comprising of fearless reporters who with their thorough research, well-placed questions and detailed reports, uncover the hidden truth."
          comfulltext="International Press"
        />
      )}
    </main>

    
    <section className={cx(styles2['home-section'], styles2.coordinators)}>
        <main>
          <TeamCards/>
        </main>
      </section>
    </motion.div>
    
  )
}

const ScheduleNavBtn = ({ day, currentDay, handleDayChange, label }) => (
  <li className={cx(styles.tab, { [styles.active]: currentDay === day })}>
    <button
      onClick={(e) => { e.preventDefault(); handleDayChange(day) }}
      className={styles['tab-btn']}
      type='button'
    >{label}</button>
  </li>
)

const EventLI = ({ id, title, type, isRegistrationOpen, venue, time, handleHover }) => {
  return (
    <li className={cx(styles['event-li'])}>
      <article className={styles['event-li-inner']}
        onMouseOut={e => { handleHover(null) }}
        onMouseOver={e => { handleHover(id) }}
      >
        <div className={styles.title}>
          {type === 'Contest'
            ? <p className={cx({ [styles.closed]: !isRegistrationOpen })}>{isRegistrationOpen ? 'Registrations open!' : 'Registrations closed!'}</p>
            : <p>{type} </p>}
          <h4>{title}</h4>
        </div>
        <div className={styles.venue}>
          <p>{venue}</p>
        </div>
        <div className={styles.time}>
          <p>{time}</p>
        </div>
      </article>
    </li>
  )
}

const EventFigure = ({ id, title, figureSrc, isActive = false }) => (
  figureSrc && <article key={id}
    className={cx(styles['current-figure'], { [styles.active]: isActive })}>
    <figure className={styles['img-wrapper']}>
      <img alt={title} src={figureSrc} />
    </figure>
  </article>
)

export default Events;


