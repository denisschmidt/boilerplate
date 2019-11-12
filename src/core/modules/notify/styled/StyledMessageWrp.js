import styled from 'styled-components';

const StyledMessageWrp = styled.div`
  margin-left: 12px;
  display: flex;
  padding-top: 1px;
  color: ${({ theme }) => theme.colors.blackThree};
  font-size: 15px;
  font-stretch: normal;
  letter-spacing: normal;
  word-break: break-word;
`;

export default StyledMessageWrp;
