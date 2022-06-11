import { TextField } from '@mui/material';
import styled from 'styled-components';

export const StyledField = styled(TextField)`
  .MuiInputLabel-root,
  .MuiInputBase-root {
    font-size: 1.6rem;
  }

  .MuiInputLabel-root.Mui-focused {
    color: #00f9bd !important;
  }

  .Mui-focused {
    fieldset {
      border-color: #00f9bd !important;
    }
  }
`;
