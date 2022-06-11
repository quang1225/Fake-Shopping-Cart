import { InputLabel, Select, SelectChangeEvent } from '@mui/material';
import { StyledFormControl } from './styles';

interface Props {
  value?: string | undefined;
  label?: string;
  width?: number | string;
  onChange?: (value: string) => void;
  children: any;
}

const CommonSelect = ({ value, children, label, onChange, width }: Props) => {
  const handleChange = (e: SelectChangeEvent<string>) => {
    onChange?.(e.target.value);
  };

  return (
    <StyledFormControl style={{ width: width }}>
      {label && <InputLabel>{label}</InputLabel>}

      <Select value={value} label={label} onChange={handleChange}>
        {children}
      </Select>
    </StyledFormControl>
  );
};

export default CommonSelect;
