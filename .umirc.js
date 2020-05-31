import { defineConfig } from 'umi';
//关于环境变量的配置可参考这里sorrycc的评论, 目前(2020年5月31日)没照他的这个方式来, 以后如果不满足了再做调整
//https://github.com/umijs/umi/issues/2079#issuecomment-471176545

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  ssr: {
    forceInitial: false,
    devServerRender: true,
    mode: 'stream',
    staticMarkup: false,
  },
  targets: {
    ie: 9,
  },
  autoprefixer: false,
  define: {
    'process.env': {
      domain: `${process.env.domain}`,
    },
  },
});
