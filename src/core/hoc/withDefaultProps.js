import { setStatic } from 'recompose';

const withDefaultProps = defaultProps => setStatic('defaultProps', defaultProps);

export default withDefaultProps;
