import { PureComponent } from 'react';
import styles from './index.less';
import CompSrc from '@/components/CompSrc';

class Index extends PureComponent {

  static async getInitialProps(ctx) {
    console.log('ctx', ctx);

    return {
      data: {
        content: 'hello world'
      }
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    const { data } = this.props;
    const { content } = data || {};

    return (
      <div>
        <h1 className={styles.title}>{content}</h1>
        <CompSrc />
      </div>
    )
  }
}

export default Index;
