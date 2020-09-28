import { createSpaConfig } from '@open-wc/building-rollup';
import copy from 'rollup-plugin-cpy';
import merge from 'deepmerge';

const baseConfig = createSpaConfig({
  // use the outputdir option to modify where files are output
  // outputDir: 'dist',

  // development mode creates a non-minified build for debugging or development
  developmentMode: process.env.ROLLUP_WATCH === 'true',

  // set to true to inject the service worker registration into your index.html
  injectServiceWorker: false,
});

export default merge(baseConfig, {
  input: './index.html',
  output: {
    sourcemap: false,
  },
  plugins: [
    copy([
          { files: 'src/css/**/*.css', dest: './dist/src/css' },
          { files: 'src/fonts/**/*.ttf', dest: './dist/src/fonts' }
        ])
  ],
});
