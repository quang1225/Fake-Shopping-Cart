import { ChangeEvent, KeyboardEvent, RefObject } from 'react';
import { StyledField } from './styles';

interface Props {
  value?: string | undefined;
  label?: string;
  placeholder?: string;
  width?: number | string;
  onChange?: (value: string) => void;
  onEnter?: () => void;
  ref?: RefObject<HTMLDivElement>;
}

const CommonField = ({
  value,
  label,
  onChange,
  width,
  placeholder,
  onEnter,
  ref,
}: Props) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    onChange?.(e.target.value);
  };

  const onEnterInput = (e: KeyboardEvent<HTMLDivElement>) => {
    if (onEnter && e.key === 'Enter') {
      onEnter();
    }
  };

  return (
    <StyledField
      ref={ref}
      style={{ width: width }}
      label={label}
      value={value}
      onChange={handleChange}
      variant="outlined"
      placeholder={placeholder}
      onKeyDown={onEnterInput}
    />
  );
};

export default CommonField;
