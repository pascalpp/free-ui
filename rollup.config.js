const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const dts = require('rollup-plugin-dts').default;
const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const stringHash = require('string-hash');
const cssnano = require('cssnano');

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      postcss({
        plugins: [autoprefixer(), cssnano()],
        modules: {
          generateScopedName,
        },
      }),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
    external: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'react/jsx-dev-runtime',
    ],
  },

  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];

function generateScopedName(name, filename, css) {
  const hash = stringHash(css).toString(36).substr(0, 6);
  return `${name}-${hash}`;
}
