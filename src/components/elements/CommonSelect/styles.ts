import { FormControl, MenuItem } from '@mui/material';
import styled from 'styled-components';

export const StyledFormControl = styled(FormControl)`
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

export const ContentWrapper = styled.div`
  .MuiMenuItem-root {
    font-size: 1.6rem;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  font-size: 1.6rem !important;
`;
