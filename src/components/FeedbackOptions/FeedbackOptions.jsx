import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onClick }) => {
  return (
    <ul className={css.buttonList}>
      {Object.keys(options).map(value => {
        return (
          <li key={value}>
            <button
              className={css.feedbackButton}
              name={value}
              onClick={onClick}
              type="button"
            >
              {value}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
