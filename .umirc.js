import { defineConfig } from 'umi';

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
  polyfill: {
    imports: ['core-js'],
  },
});
