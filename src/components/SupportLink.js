import styles from './SupportLink.module.scss';
import cx from 'classnames';

const SupportLink = () => (
  <div className={styles.support}>
    For updates, join the <a className={cx('link', styles.link)} target='_blank' rel='noreferrer' href="https://www.google.com/">
    NITMUN XIII Group</a>
  </div>
)

export default SupportLink;