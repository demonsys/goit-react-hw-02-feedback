import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul className={css.statistics__list}>
        <li className={css.statistics__item}>Good: {good}</li>
        <li className={css.statistics__item}>Neutral: {neutral}</li>
        <li className={css.statistics__item}>Bad: {bad}</li>
        <li className={css.statistics__item}>Total: {total}</li>
        <li className={css.statistics__item}>
          PositiveFeedback:{' '}
          {positivePercentage ? Math.round(positivePercentage) : '0'}%
        </li>
      </ul>
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;