import { useState, useEffect } from "react";
import styles from './CountdownTimer.module.scss';

const CountdownTimer = ({ countdownDate: toDate, handleTimerComplete }) => {
  const [time, setTime] = useState({
    seconds: 6,
    minutes: 69,
    hours: 49,
    days: 23,
  });

  useEffect(() => {
    const countdownDate = new Date(toDate).getTime();
    const updateTimer = () => {
      if (!toDate) return;
      const now = new Date().getTime();
      const distance = countdownDate - now;
      if (distance <= 0) {
        handleTimerComplete(true);
        return;
      }
      const newSeconds = Math.floor((distance % (1000 * 60)) / 1000);
      const newMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const newHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const newDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      setTime({
        seconds: newSeconds,
        minutes: newMinutes,
        hours: newHours,
        days: newDays,
      });
      setTimeout(updateTimer, 1000);
    };
    updateTimer();
    // eslint-disable-next-line
  }, [toDate]);

  return (
    <div className={styles.timer}>
      <div className={styles['counter-wrapper']}>
        <div className={styles.counter}>
          {time.days.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
        </div>
        <div className={styles.label}>Days</div>
      </div>
      <div className={styles['counter-wrapper']}>
        <div className={styles.counter}>
          {time.hours.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
        </div>
        <div className={styles.label}>Hours</div>
      </div>
      <div className={styles['counter-wrapper']}>
        <div className={styles.counter}>
          {time.minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
        </div>
        <div className={styles.label}>Minutes</div>
      </div>
      <div className={styles['counter-wrapper']}>
        <div className={styles.counter}>
          {time.seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
        </div>
        <div className={styles.label}>Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimer;