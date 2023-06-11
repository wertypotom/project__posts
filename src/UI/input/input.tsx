import React from "react";
import {
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";

type Props = {
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onButtonClick?: () => void;
  placeholder?: string;
  buttonText?: string;
};

const Input = ({
  value,
  onChange,
  placeholder = "Enter your value",
  buttonText,
  onButtonClick,
}: Props) => {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        value={value}
        onChange={onChange}
        type="email"
        placeholder={placeholder}
      />
      {buttonText && (
        <Button
          variant="outline-secondary"
          id="button-addon"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      )}
    </InputGroup>
  );
};

export default Input;
