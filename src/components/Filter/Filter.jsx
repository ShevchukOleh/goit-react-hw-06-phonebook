import { Input, Label} from './Filter.styled';

export const Filter = () => {
    return (
        <Label>Find contacts by name
            <Input name="filter" />
        </Label>
  );
};
