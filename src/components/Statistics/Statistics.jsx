import PropTypes from 'prop-types';
import { Container, Title, List, Text } from './Statistics.styled';

export const Statistics = ({ feedbacks, total, positivePercentage }) => (
  <Container>
    <Title>Statistics</Title>
    <List>
      {Object.keys(feedbacks).map(key => (
        <li key={key}>
          <Text>
            {`${key}: ${feedbacks[key]}`}
          </Text>
        </li>
      ))}
    </List>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}</p>
  </Container>
);

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
  feedbacks: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};
