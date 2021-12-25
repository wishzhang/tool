import path from 'path'
import json from 'rollup-plugin-json'
import {terser} from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';

const resolve = p => {
  return path.resolve(__dirname, './', p);
}
const extensions = ['.js', '.ts'];
const pkg = require(resolve('package.json'))

const banner =
  '/*!\n' +
  ` * tool.js v${pkg.version}\n` +
  ` * (c) 2021-${new Date().getFullYear()} wishzhang\n` +
  ' * Released under the MIT License.\n' +
  ' */'

const baseConfig = {
  input: resolve('src/index.ts')
}

const plugins = [
  json(),
  nodeResolve({
    extensions,
    modulesOnly: true,
  }),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
    extensions,
  }),
]

const builds = [
  {
    ...baseConfig,
    output: {
      exports: 'auto',
      file: resolve('dist/tool.js'),
      format: 'umd',
      name: 'tool',
      banner
    },
    plugins: [...plugins]
  },
  {
    ...baseConfig,
    output: {
      exports: 'auto',
      file: resolve('dist/tool.es.js'),
      format: 'es',
      name: 'tool',
      banner
    },
    plugins: [...plugins]
  },
  {
    ...baseConfig,
    output: {
      exports: 'auto',
      file: resolve('dist/tool.min.js'),
      format: 'umd',
      name: 'tool',
      banner
    },
    plugins: [terser(), ...plugins]
  }
]

module.exports = builds
