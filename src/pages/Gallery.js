import styles from '../styles/Gallery.module.scss';
import cx from 'classnames';
import 'react-html5video/dist/styles.css'
import { motion } from 'framer-motion';
import HighlightCard from '../components/HighlightCard';
import { ReactComponent as ScheduleIcon } from '../media/icons/schedule.svg';
import { NavLink } from 'react-router-dom';
import styles2 from '../styles/Home.module.scss';

import { events, highlights } from '../data/data';

const Gallery = ({ user }) => {

  const Video = ({ embedId }) => {

    return (
      <>
      <div style={{
        overflow: "hidden",
        paddingBottom: "56.25%",
        position: 'relative',
        height: "50vh"
      }}>
        <iframe
          style={{
            left: "6%",
            top: "18%",
            height: "65%",
            width: "90%",
            position: "absolute"

          }}
          width="653"
          height="280"
          src={`https://www.youtube.com/embed/${embedId}`}
          allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope; pictures-in-picture"
          allowFullScreen
          title='Embeded Youtube'
        />
      </div>
      </>
    )

  }




  return (
    <motion.div className={cx(styles.events, 'page-transition', 'container')}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
    >
      <header className={cx('page-header', styles['page-header'])}>
        <h1 className='heading'>
          <span>Gallery</span>
        </h1>
        <div className={cx('subtitle', styles['header-subtitle'])}>
          <h2>May.4-6</h2>
          <div>NITMUN' XIII in reels</div>
        </div>
      </header>
      <main className={cx(styles['main-content'])}>


        <div className={cx(styles['gallery'])}>
          <div className={cx(styles['h1'])}>
            <h1> DAY 1
            </h1>
            <p>4<sup>th</sup> May</p>
          </div>
          <div className='Video'>
            <Video embedId={"9EhrOk2mWXI"} />
          </div>


        </div>
        <br />
        <hr />
        <div className={cx(styles['gallery'])}>
          <div className={cx(styles['h1'])}>
            <h1> DAY 2
            </h1>
            <p>5<sup>th</sup> May</p>
          </div>
          <div className='Video'>

          <Video embedId={"9EhrOk2mWXI"} />
          </div>
        </div>
        <br />
        <hr />

        <section className={cx(styles2['home-section'], 'container', styles2.highlights)}>
        <header className={styles2.sectionHeader}>
          <h2 className={styles2.heading}>
            <span>Highlights</span>
          </h2>
        </header>

        <main>
          <div className={styles2.hlgallery}>
            {highlights.map(id => <HighlightCard user={user} key={id} {...events[id]} />)}
            <div className={styles2['btn-wrapper']}>
              <NavLink to='/events' className='btn'>
                <span className='btn-subtitle'>Events</span>
                <span className='btn-text'>Full Event<br />Schedule</span>
                <ScheduleIcon />
              </NavLink>
            </div>
          </div>
        </main>
        <main>
          <div className={styles2.hlgallery}>
            {highlights.map(id => <HighlightCard user={user} key={id} {...events[id]} />)}
          </div>
        </main>
        <main>
          <div className={styles2.hlgallery}>
            {highlights.map(id => <HighlightCard user={user} key={id} {...events[id]} />)}
            <div className={styles2['btn-wrapper']}>
              <NavLink to='/events' className='btn'>
                <span className='btn-subtitle'>Events</span>
                <span className='btn-text'>Full Event<br />Schedule</span>
                <ScheduleIcon />
              </NavLink>
            </div>
          </div>
        </main>
      </section>



      </main>
    </motion.div>
  )
}

export default Gallery;