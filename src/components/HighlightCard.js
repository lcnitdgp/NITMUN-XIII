import styles from './HighlightCard.module.scss';

const HighlightCard = ({ figureSrc}) => (
  <article className={styles.card}>
    <figure>
      <img alt="image" src={figureSrc} />
    </figure>
    <main>
    </main>
  </article>
)

export default HighlightCard;
