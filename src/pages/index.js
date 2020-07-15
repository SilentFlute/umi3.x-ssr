import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Helmet, history } from 'umi';
import styles from './index.less';
import CompSrc from '@/components/CompSrc';

const wait = time => (
  new Promise((res, rej) => {
    setTimeout(
      () => {
        res({
          title: 'a title',
          content: 'hello world',
          k: 'a keyword',
          d: 'a description'
        });
      },
      time
    );
  })
);

const cateData = [
  {
    id: 1,
    name: 1
  },
  {
    id: 2,
    name: 2
  },
  {
    id: 3,
    name: 3
  },
  {
    id: 4,
    name: 4
  },
  {
    id: 5,
    name: 5
  }
];

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
    const { data, location } = this.props;
    const { content, title, k, d } = data || {};
    const { query } = location;
    const { id } = query;
    console.log('index render');

    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="keywords" content={k} />
          <meta name="description" content={d} />
        </Helmet>
        <h1 className={styles.title}>{content}</h1>
        <div>页面查询字符串变更:</div>
        <div
          style={{
            whiteSpace: 'nowrap',
            overflow: 'auto'
          }}
        >
          {
            cateData.map(item => (
              <div
                style={{
                  display: 'inline-block',
                  width: '30%',
                  color: id == item.id ? '#f00' : 'inherit'
                }}
                key={item.id}
                onClick={
                  () => {
                    history.push({
                      pathname: '/',
                      query: {
                        id: item.id
                      }
                    });
                  }
                }
              >{item.name}</div>
            ))
          }
        </div>
        <CompSrc />
      </div>
    );
  }
}

export default Index;
