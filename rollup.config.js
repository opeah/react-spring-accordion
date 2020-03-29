import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export function getConfig({
  tsconfig = './tsconfig.json',
  output = [
    {
      file: `build/${pkg.name}.js`,
      format: 'cjs',
      exports: 'named',
    },
    {
      file: `build/${pkg.name}.es.js`,
      format: 'esm',
    },
    {
      name: 'Spring Accordion',
      file: `build/${pkg.name}.umd.js`,
      format: 'umd',
      globals: {
        react: 'React',
      },
    },
  ],
  plugins = [],
} = {}) {
  return {
    input: 'src/index.ts',
    external: ['react', 'react-dom'],
    plugins: [
      typescript({
        tsconfig,
        clean: true,
      }),
      ...plugins,
    ],
    output,
  };
}

export default getConfig();
