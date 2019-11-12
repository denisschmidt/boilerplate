import styled from 'styled-components';

const StyledSidePanelWrp = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 0 0;
  width: ${({ isOpen }) => (isOpen ? '320px' : '20px')};
  min-width: ${({ isOpen }) => (isOpen ? '320px' : '20px')};
  position: relative;
  border-right: ${({ direction, theme }) => (direction === 'left' ? `1px solid ${theme.colors.border}` : 'none')};
  border-left: ${({ direction, theme }) => (direction === 'right' ? `1px solid ${theme.colors.border}` : 'none')};
  height: calc(100vh - 112px);
`;

export default StyledSidePanelWrp;
