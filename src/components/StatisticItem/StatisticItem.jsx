import PropTypes from 'prop-types';
import { StatisticItem } from './StatisticItem.styled';

export const StatListItem = ({ name, value }) => {
    return (
        <StatisticItem>
            {name}: {value}
            {name === 'Positive feedback' && '%'}
        </StatisticItem>
    );
};

StatListItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
};
