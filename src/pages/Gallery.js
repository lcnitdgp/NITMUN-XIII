import styles from '../styles/Gallery.module.scss';
import cx from 'classnames';
import 'react-html5video/dist/styles.css'
import { motion } from 'framer-motion';
import HighlightCard from '../components/HighlightCard';
import { ReactComponent as ScheduleIcon } from '../media/icons/schedule.svg';
import { NavLink } from 'react-router-dom';
import styles2 from '../styles/Home.module.scss';
import { ReactComponent as LinkIcon } from '../media/icons/link.svg';

import { events, highlights, highlights2, highlights3, highlights4 } from '../data/data';

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
          <span>Highlights</span>
        </h1>
      </header>
      <div className={cx(styles['header-btn-wrapper'])} style={{ marginTop: '2rem', height: '20vh', width: '80vw' }}>
          <NavLink to='/events' className={cx('btn', styles['intro-header-btn'])}>
            <span className={cx('btn-subtitle', styles['intro-btn-subtitle'])}>NITMUN' XIII by The Literary Circle</span>
            <span className={cx('btn-text', styles['intro-btn-text'])}>About</span>
            <LinkIcon />
          </NavLink>
        </div>
      <main className={cx(styles['main-content'])}>

        <section className={cx(styles2['home-section'], 'container', styles2.highlights)}>
        <header className={styles2.sectionHeader}>
          <h2 className={styles2.heading}>
            <span>Gallery</span>
          </h2>
          
        </header>

        <main>
          <div className={styles2.hlgallery}>
            {highlights.map(id => <HighlightCard user={user} key={id} {...events[id]} />)}
          </div>
        </main>
        <main>
          <div className={styles2.hlgallery}>
            {highlights2.map(id => <HighlightCard user={user} key={id} {...events[id]} />)}
          </div>
        </main>

        <main>
          <div className={styles2.hlgallery}>
            {highlights3.map(id => <HighlightCard user={user} key={id} {...events[id]} />)}
          </div>
          </main>

          
        <main>
          <div className={styles2.hlgallery}>
            {highlights4.map(id => <HighlightCard user={user} key={id} {...events[id]} />)}
          </div>
          </main>
      
      </section>

      <div className={cx(styles['gallery'])}>
          <div className={cx(styles['h1'])}>
            <h1> <u>Rules & Procedure</u>
            </h1>
            
          </div>
          <div className='Video'>
            <Video embedId={"9EhrOk2mWXI"} />
          </div>


        </div>
        <br />
        <div className={cx(styles['gallery'])}>
          <div className={cx(styles['h1'])}>
            <h1> <u>THE CIRCLE.</u>
            </h1>
            
          </div>
          <div className='Video'>

          <Video embedId={"W-M4om2WfQA?si=tmixPr-RPWjR5_7q"} />
          </div>
        </div>
        <br />
  


      </main>
    </motion.div>
  )
}

export default Gallery;

