import PropTypes from 'prop-types';
import { List, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <List>
    {options.map(item => (
      <li key={item}>
        <FeedbackButton
          type="button"
          onClick={e => {
            onLeaveFeedback(item);
            e.target.blur();
          }}
        >
          {item}
        </FeedbackButton>
      </li>
    ))}
  </List>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
