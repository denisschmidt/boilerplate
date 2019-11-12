import styled from 'styled-components';
import { StyledCircleBtn } from '../../button/styled/StyledIconBtn';

const StyledSidePanelCloseBtn = styled(StyledCircleBtn)`
  position: absolute;
  z-index: 1;
  left: -16px;
  top: 32px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export default StyledSidePanelCloseBtn;
