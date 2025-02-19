const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('@rollup/plugin-babel');
const terser = require('@rollup/plugin-terser');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const postcss = require('rollup-plugin-postcss');
const json = require('@rollup/plugin-json');
const copy = require('rollup-plugin-copy');

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/esm/index.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    json(),
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    copy({
      targets: [{ src: 'src/assets/fonts/*', dest: 'dist/fonts' }],
      flatten: true,
    }),
    commonjs({
      include: /node_modules/,
      requireReturnsDefault: 'auto',
      extensions: ['.js', '.jsx'],
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      extensions: ['.js', '.jsx'],
    }),
    postcss({
      extract: 'styles.css', // This will extract all CSS to a single file
      modules: false, // Set to true if you're using CSS modules
      extensions: ['.css', '.scss'],
      minimize: true,
      use: ['sass'], // Add this if you're using SCSS
      inject: false, // Prevent automatic injection since we're extracting
    }),
    terser(),
  ],
  external: ['react', 'react-dom'],
};