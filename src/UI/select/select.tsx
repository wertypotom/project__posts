import Form from "react-bootstrap/Form";
import { SortOption } from "../../types/type-select";

type Props = {
  value: string;
  defaultValue: string;
  options: SortOption[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ value, defaultValue, options, onChange }: Props) => {
  return (
    <Form.Select value={value} aria-label="Select" onChange={onChange}>
      <option disabled>{defaultValue}</option>
      {options.map((option) => (
        <option value={option.value}>{option.title}</option>
      ))}
    </Form.Select>
  );
};

export default Select;
