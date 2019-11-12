import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

const ModalExample = lazy(() => import('./ModalExample'));

const propTypes = {
  modalId: PropTypes.string,
};

const findModal = (modalId, params) => {
  switch (modalId) {
    case 'EXAMPLE':
      return <ModalExample {...{ params }} />;

    default:
      return null;
  }
};

const CentralModalContent = ({ modalId, params }) => (
  <>
    <Suspense fallback={<div>Loading...</div>}>{findModal(modalId, params)}</Suspense>
  </>
);

CentralModalContent.propTypes = propTypes;

export default CentralModalContent;
