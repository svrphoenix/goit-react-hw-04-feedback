import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = { good, neutral, bad };

  const optionTypes = Object.keys(options).reduce((acc, value) => {
    acc[value] = value;
    return acc;
  }, {});

  const addFeedback = feedbackType => {
    switch (feedbackType) {
      case optionTypes.good:
        setGood(prevGood => prevGood + 1);
        break;
      case optionTypes.neutral:
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case optionTypes.bad:
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const PositiveFeedbackPercentage = Math.round(
      (good / countTotalFeedback()) * 100
    );
    return `${PositiveFeedbackPercentage}%`;
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        onLeaveFeedback={addFeedback}
        options={Object.keys(options)}
      />
      {countTotalFeedback() ? (
        <Statistics
          feedbacks={options}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback!" />
      )}
      <GlobalStyle />
    </Section>
  );
};
