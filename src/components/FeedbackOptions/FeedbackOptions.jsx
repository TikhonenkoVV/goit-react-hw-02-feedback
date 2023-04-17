import PropTypes from 'prop-types';
import { FeedbackList, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const keys = Object.keys(options);
    return (
        <FeedbackList>
            {keys.map(option => {
                return (
                    <FeedbackButton
                        key={option}
                        name={option}
                        onClick={() => onLeaveFeedback(option)}
                    >
                        {option}
                    </FeedbackButton>
                );
            })}
        </FeedbackList>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }),
    onLeaveFeedback: PropTypes.func.isRequired,
};
