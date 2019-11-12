import { connect } from 'react-redux';

import { closeCentralModal } from '../actions/modalActions';
import CentralModalTitleWrp from '../components/CentralModalTitleWrp';

const mapDispatchToProps = {
  closeModal: closeCentralModal,
};

const CentralModalTitleContainer = connect(
  null,
  mapDispatchToProps,
)(CentralModalTitleWrp);

export default CentralModalTitleContainer;
