import { Input, Label} from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = () => {
    return (
        <Label>Find contacts by name
            <Input name="filter" />
        </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onFilter: PropTypes.func.isRequired,
};