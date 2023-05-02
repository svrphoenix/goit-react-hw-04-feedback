import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export const App = () => {
  const FEEDBACK_TYPE = {
    goodFeedback: 'good',
    neutralFeedback: 'neutral',
    badFeedback: 'bad',
  };

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = feedback => {
    const { goodFeedback, neutralFeedback, badFeedback } = FEEDBACK_TYPE;
    switch (feedback) {
      case goodFeedback:
        setGood(prevGood => prevGood + 1);
        break;
      case neutralFeedback:
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case badFeedback:
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
        options={Object.values(FEEDBACK_TYPE)}
      />
      {countTotalFeedback() ? (
        <Statistics
          feedbacks={{ good, neutral, bad }}
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
