import PropTypes from 'prop-types';
import { StatListItem } from 'components/StatisticItem/StatisticItem';
import { StyledStatistickList } from './Statistics.styled';

export const Statistics = ({ options }) => {
    const entries = Object.entries(options);
    return (
        <StyledStatistickList>
            {entries.map(el => {
                return <StatListItem key={el[0]} name={el[0]} value={el[1]} />;
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
