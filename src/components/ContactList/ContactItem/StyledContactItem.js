import { StyledTextNoContacts } from 'components/StyledApp';
import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledText = styled(StyledTextNoContacts)`
  font-size: 20px;
`;

export const StyledButton = styled.button`
  padding: 10px 15px;
  color: #2a2a2a;
  background-color: transparent;
  border-radius: 5px;
  background-color: rgba(189, 191, 255, 0.5);
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out,
    box-shadow 300ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #e3473b;
    color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
