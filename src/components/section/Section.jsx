import PropTypes from 'prop-types';
import { FeedbackSaction, Title } from './Section.styled';

export const Section = ({ title, children }) => {
    return (
        <FeedbackSaction>
            <Title>{title}</Title>
            {children}
        </FeedbackSaction>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
};
