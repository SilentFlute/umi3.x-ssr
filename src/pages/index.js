import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';
import CompSrc from '@/components/CompSrc';

class Index extends PureComponent {
  static async getInitialProps(ctx) {
    console.log('ctx', ctx);

    return {
      data: {
        content: 'hello world'
      }
    };
  }

  static propTypes = {
    data: PropTypes.object
  };

  render() {
    const { data } = this.props;
    const { content } = data || {};

    return (
      <div>
        <h1 className={styles.title}>{content}</h1>
        <CompSrc />
      </div>
    );
  }
}

export default Index;
