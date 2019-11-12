import styled from 'styled-components';

export const KIND = {
  primary: 'primary',
  secondary: 'secondary',
  third: 'third',
  quaternary: 'quaternary',
};

const getStyleForKind = ({ theme, kind }) => {
  switch (kind) {
    case KIND.primary:
      return {
        color: theme.colors.default,

        ':hover': {
          color: theme.colors.defaultHover,
        },
      };

    case KIND.secondary:
      return {
        color: theme.colors.textAdditional,
        fill: theme.colors.textAdditional,

        ':hover': {
          color: theme.colors.defaultHover,
          fill: theme.colors.defaultHover,
        },
      };

    default:
      return {
        color: 'inherit',
      };
  }
};

const StyledLinkBtn = styled.button`
  border: none;
  cursor: pointer;
  padding: 0;
  background-color: inherit;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  margin-right: 16px;
  text-align: left;

  ${getStyleForKind};

  &:last-child {
    margin-right: 0;
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.link};
    cursor: not-allowed;
    &:hover {
      color: ${({ theme }) => theme.colors.link};
    }
  }
`;

export default StyledLinkBtn;
