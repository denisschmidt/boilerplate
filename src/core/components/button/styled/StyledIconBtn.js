import styled from 'styled-components';

const StyledIconBtn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  background-color: transparent;
  padding: 0;
  border: none;
  color: inherit;
`;

export const StyledCircleBtn = styled(StyledIconBtn)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: solid 1px ${({ theme }) => theme.colors.border};
`;

export default StyledIconBtn;
