import styled from 'styled-components';
import { CENTRAL_MODAL_SIZES } from '../constants/modalConstants';

export const KIND = {
  primary: 'primary',
  secondary: 'secondary',
  third: 'third',
  quaternary: 'quaternary',
};

const getStyleForKind = ({ kind = 'primary' }) => {
  switch (kind) {
    case KIND.primary:
      return {
        paddingBottom: '24px',
        paddingTop: '40px',
      };

    case KIND.secondary:
      return {
        padding: '0px',
        paddingLeft: '32px',
        width: '896px',
      };

    default:
      return {};
  }
};

const StyledModalWrp = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 2px;
  width: ${({ widthSize }) => CENTRAL_MODAL_SIZES[widthSize]};
  ${getStyleForKind};
`;

export default StyledModalWrp;
