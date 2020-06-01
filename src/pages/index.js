import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'umi';
import styles from './index.less';
import CompSrc from '@/components/CompSrc';

const wait = time => (
  new Promise((res, rej) => {
    setTimeout(
      () => {
        res({
          title: 'a title',
          content: 'hello world'
        });
      },
      time
    );
  })
);

class Index extends PureComponent {
  static async getInitialProps(ctx) {
    // console.log('ctx', ctx);

    const data = await wait(3000);

    return {
      data
    };
  }

  static propTypes = {
    data: PropTypes.object
  };

  componentDidMount() {
    console.log('componentDidMount test');
  }

  render() {
    const { data } = this.props;
    const { content, title } = data || {};
    console.log('render test');

    return (
      <div>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <h1 className={styles.title}>{content}</h1>
        <CompSrc />
      </div>
    );
  }
}

export default Index;
