import { connect } from 'react-redux';

import { getCentralIsOpenModal, getCentralModalId, getCentralModalParams } from '../selectors/modalSelectors';
import CentralModal from '../components/CentralModal';
import { closeCentralModal } from '../actions/modalActions';

const mapStateRoProps = state => ({
  modalId: getCentralModalId(state),
  isOpen: getCentralIsOpenModal(state),
  params: getCentralModalParams(state),
});

const mapDispatchToProps = {
  closeModal: closeCentralModal,
};

const CentralModalContainer = connect(
  mapStateRoProps,
  mapDispatchToProps,
)(CentralModal);

export default CentralModalContainer;
