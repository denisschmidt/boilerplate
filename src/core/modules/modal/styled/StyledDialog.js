import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';

const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    position: inherit;
    margin: 24px;
    overflow-y: visible;
  }
  .MuiDialog-paperScrollPaper {
    max-height: calc(100% - 48px);
  }

  .MuiDialog-paperWidthSm {
    max-width: 896px;
    min-width: 512px;
  }
`;

export default StyledDialog;
