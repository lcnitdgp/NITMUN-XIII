import styles from '../styles/Gallery.module.scss';
import cx from 'classnames';
import 'react-html5video/dist/styles.css'
import { motion } from 'framer-motion';
import HighlightCard from '../components/HighlightCard';
import { ReactComponent as ScheduleIcon } from '../media/icons/schedule.svg';
import { NavLink } from 'react-router-dom';
import styles2 from '../styles/Home.module.scss';
import { ReactComponent as LinkIcon } from '../media/icons/link.svg';
import Commitees from './Commitee';

import { events, highlights, highlights2, highlights3} from '../data/data';

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
      <Commitees comname="About Literary Circle" number=" " numbertext={"LITERARY CIRCLE"} commimage="./assets/lcgrpimg.jpeg" textone="Literary Circle is the club in NIT Durgapur, which gives the college an extra dimension of creative expression in the midst of technical unilateralism and gives the students of the college an opportunity to transcend the ordinary and mundane. The Literary Circle conducts various events throughout the year." texttwo="
The club is known to be highly selective in its admission of new members, with only about 10-15 students inducted out of the entire batch of 900 each year. Great believers of the phrase ‘quality over quantity’, the members selected every year are the best of the best in the field of expression and creativity." />
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

          
        {/* <main>
          <div className={styles2.hlgallery}>
            {highlights4.map(id => <HighlightCard user={user} key={id} {...events[id]} />)}
          </div>
          </main> */}
      
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

