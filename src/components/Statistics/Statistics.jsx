import PropTypes from 'prop-types';
import { StatListItem } from 'components/StatisticItem/StatisticItem';
import { StyledStatistickList } from './Statistics.styled';

export const Statistics = ({ options }) => {
    const entries = Object.entries(options);
    return (
        <StyledStatistickList>
            {entries.map(([name, value]) => {
                return <StatListItem key={name} name={name} value={value} />;
            })}
        </StyledStatistickList>
    );
};

Statistics.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        'Positive feedback': PropTypes.number.isRequired,
    }),
};
