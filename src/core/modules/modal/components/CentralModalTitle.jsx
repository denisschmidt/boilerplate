import React from 'react';
import PropTypes from 'prop-types';

import StyledModalTitle from '../styled/StyledModalTitle';
import StyledModalBlock from '../styled/StyledModalBlock';
import StyledLinkBtn from '../../../components/button/styled/StyledLink';

const propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  closeModal: PropTypes.func,
};

const defaultProps = {
  title: '',
  closeModal: () => {},
};

const CentralModalTitle = ({ title, description, closeModal }) => (
  <StyledModalBlock>
    <div>
      <StyledModalTitle>{title}</StyledModalTitle>
      {description && <p>{description}</p>}
    </div>
    <StyledLinkBtn kind="third" onClick={closeModal}>
      Close
    </StyledLinkBtn>
  </StyledModalBlock>
);

CentralModalTitle.propTypes = propTypes;
CentralModalTitle.defaultProps = defaultProps;

export default CentralModalTitle;
