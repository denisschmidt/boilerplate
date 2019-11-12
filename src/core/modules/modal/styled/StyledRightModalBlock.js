import styled from 'styled-components';

export const BLOCK_SIZES = {
  small: '320px',
  medium: '600px',
  large: '712px',
};

const StyledRightModalBlock = styled.div`
  flex-basis: ${({ widthSize }) => BLOCK_SIZES[widthSize]};
  background-color: ${({ theme }) => theme.colors.modalRightPanel};
  padding: 40px 4px 80px 32px;
`;

export default StyledRightModalBlock;
