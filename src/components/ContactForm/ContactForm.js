import { StyledButton } from 'components/ContactList/ContactItem/StyledContactItem';
import { StyledLabel, StyledInput } from 'components/Filter/StyledFilter';
import styled from 'styled-components';

export const StyledForm = styled.form`
  margin-bottom: 10px;
`;

export const StyledSubmitButton = styled(StyledButton)`
  &:hover,
  &:focus {
    background-color: #95fc8d;
    color: #2a2a2a;
  }
`;

export const StyledFormInput = styled(StyledInput)`
  margin-bottom: 20px;
`;

export const StyledFomrLabel = styled(StyledLabel)`
  margin-bottom: 10px;
`;
