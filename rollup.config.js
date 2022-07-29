import styles from 'rollup-plugin-styles';
const autoprefixer = require('autoprefixer');
import babel from '@rollup/plugin-babel';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';

// the entry point for the library
const input = 'src/index.js';

//
var MODE = [
  {
    file: './index.js',
    format: 'cjs',
    plugins: [terser()],
  },
  {
    file: 'dist/index.js',
    fomart: 'cjs',
  },
  {
    file: 'dist/index.min.js',
    fomart: 'cjs',
    plugins: [terser()],
  },
  {
    file: 'dist/index.esm.js',
    fomart: 'esm',
  },
  {
    file: 'dist/index.umd.js',
    fomart: 'umd',
  },
];

var config = [];

MODE.map(m => {
  var conf = {
    input: input,
    output: {
      name: 'react-awesome-buttons',
      file: m.file,
      format: m.fomart,
      exports: 'auto',
      plugins: m.plugins,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes',
      },
    },
    external: ['react', /@babel\/runtime/, 'react-dom', 'prop-types', 'sass', 'node-sass'],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        plugins: ['@babel/transform-runtime'],
        babelHelpers: 'runtime',
      }),
      sourcemaps(),
      styles({
        postcss: {
          plugins: [autoprefixer()],
        },
      }),
    ],
  };
  config.push(conf);
});

export default [...config];
