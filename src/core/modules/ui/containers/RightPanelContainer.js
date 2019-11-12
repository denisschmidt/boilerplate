import { connect } from 'react-redux';
import { compose, defaultProps, branch, renderNothing } from 'recompose';

import { getIsOpenRightPanel } from '../selectors/uiSelectors';
import { openRightPanel, closeRightPanel } from '../actions/uiActions';
import SidePanel from '../../../components/sidepanel/SidePanel';

const mapStateToProps = state => ({
  isOpenPanel: getIsOpenRightPanel(state),
});

const mapDispatchToProps = {
  openPanel: openRightPanel,
  closePanel: closeRightPanel,
};

const checkSelected = ({ isOpenPanel }) => !isOpenPanel;

const enhance = compose(
  defaultProps({ direction: 'right' }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  branch(checkSelected, renderNothing),
);

const RightPanelContainer = enhance(SidePanel);

export default RightPanelContainer;
