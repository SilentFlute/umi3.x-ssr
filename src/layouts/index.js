import { Link } from 'umi';

const BasicLayout = ({ children }) => {
  return (
    <div>
      <div>BasicLayout</div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {children}
    </div>
  )
}

export default BasicLayout;