import { NavLink } from 'react-router-dom';
import styles from '../styles/Events.module.scss';
import cx from 'classnames';
import { events } from '../data/data';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as LinkIcon } from '../media/icons/link.svg';
import Artist from './Artist';
import Commitees from './Commitee.js';

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
          <span>Event</span>
          <span>Schedule</span>
        </h1>
        <div className={cx(styles['header-btn-wrapper'])}>
          <NavLink to='/gallery' className={cx('btn', styles['intro-header-btn'])}>
            <span className={cx('btn-subtitle', styles['intro-btn-subtitle'])}>NITMUN' XIII in reels</span>
            <span className={cx('btn-text', styles['intro-btn-text'])}>Gallery</span>
            <LinkIcon />
          </NavLink>
        </div>
        <div className={cx('subtitle', styles['header-subtitle'])}>
          <h2>May.4-6</h2>
          <div>2023</div>
        </div>
      </header>
      <Commitees comname="About NITMUN" number=" " numbertext="NITMUN" commimage="./assets/munlogo12.png" textone="NITMUN is a forum convened by the members of the Literary Circle for discussion and analysis of global issues. It seeks to bring out motivated delegates from all over the country for brainstorming and discussing over significant international issues.
NITMUN promises a challenging yet a very entertaining time to all delegates."  texttwo=" Our greatest goal is to make sure that each delegate learns how to tackle world issues better at the end of the conference as the world is in dire need of young leaders now.
Currently in its 12th edition, NITMUN has been extremely successful in providing the perfect experience to each delegate. Over the years, we have entertained more than 1000 delegates in total. Delegates arrive from all corners of India for an experience they will never forget."/>
      <main className={cx(styles['main-content'])}>
      <nav className={styles['schedule-nav']}>
        <ul className={styles.tabs}>
          {['UNSC', 'UNODR', 'AIPPM', 'IP'].map((day, i) => (
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
          imagesrc="./assets/about_images/unga_poster.png"
          studyguide="./assets/Unga_specpol_sg.pdf"
          portfolio="./assets/UNGA_PM.pdf"
          comnumber="01"
          comshorttext="UNGA"
          comparatext="Deliberation upon the violation of Taiwan's territorial rights by China by emphasising upon social tensions over identity, democracy and humanitarian worries stemming from potential instability."
          comfulltext="United Nations General Assembly"
        />
      )}
      {currentDay === 1 && (
        <Artist
          orderContent={1}
          orderImage={2}
          imagesrc="./assets/about_images/unsc_poster.png"
          studyguide="./assets/UNSC_study_guide.pdf"
          portfolio="./assets/UNSC_PORTFOLIO.pdf"
          comnumber="02"
          comshorttext="UNSC"
          comparatext="Deliberation on the military crisis in Sudan with emphasis on the human rights violations and the use of weapons of mass destruction."
          comfulltext="United Nations Security Council"
        />
      )}
      {currentDay === 2 && (
        <Artist
          orderContent={2}
          orderImage={1}
          imagesrc="./assets/about_images/aippm_poster.jpg"
          studyguide="./assets/AIPPM_STUDY_GUIDE.pdf"
          portfolio="./assets/AIPPM_PORTFOLIO_MATRIX.pdf"
          comnumber="03"
          comshorttext="AIPPM"
          comparatext="Discussing the crisis in Manipur with emphasis on communal violence and violation of Suspension of Operations Agreement and legislating ways to restore peace."
          comfulltext="All India Political Parties Meet"
        />
      )}
      {currentDay === 3 && (
        <Artist
          orderContent={1}
          orderImage={2}
          imagesrc="./assets/about_images/ip_poster.jpg"
          studyguide="./assets/IP_study_guide.pdf"
          portfolio="./assets/IP_portfolio_Matrix.pdf"
          comnumber="04"
          comshorttext="IP"
          comparatext="Presenting to you an independent body, comprising of fearless reporters who with their thorough research, well-placed questions and detailed reports, uncover the hidden truth."
          comfulltext="International Press"
        />
      )}
    </main>
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


