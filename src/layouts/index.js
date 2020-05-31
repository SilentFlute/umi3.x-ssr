import { Link } from 'umi';
import PropTypes from 'prop-types';

const BasicLayout = ({ children }) => {
  return (
    <div>
      <div>BasicLayout</div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {children}
    </div>
  );
};

BasicLayout.propTypes = {
  children: PropTypes.object.isRequired
};

export default BasicLayout;
