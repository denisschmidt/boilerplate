import { connect } from 'react-redux';

import Notify from '../components/Notify';
import { closeNotify } from '../actions/notifyActions';
import {
  getIsOpenNotify,
  getNotifyMessage,
  getNotifyType,
  getNotifySize,
  getNotifyTitle,
  getNotifyMessageParams,
} from '../selectors/notifySelectors';

const mapStateRoProps = state => ({
  type: getNotifyType(state),
  size: getNotifySize(state),
  isOpen: getIsOpenNotify(state),
  message: getNotifyMessage(state),
  messageParams: getNotifyMessageParams(state),
  title: getNotifyTitle(state),
});

const mapDispatchToProps = {
  closeNotify,
};

const NotifyContainer = connect(
  mapStateRoProps,
  mapDispatchToProps,
)(Notify);

export default NotifyContainer;
