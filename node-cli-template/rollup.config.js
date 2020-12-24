import babel from '@rollup/plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import visualizer from 'rollup-plugin-visualizer';

const resolvePlugin = resolve({
	mainFields: ['module', 'main'],
	extensions: ['.js', '.json']
});

const babelPlugin = babel({
	babelHelpers: 'runtime',
	skipPreflightCheck: true,
	extensions: ['.js'],
	// prevents babel from modifying sourcemap generated by rollup
	inputSourceMap: false
});

export default [
	/**
	 * CJS is short for CommonJS
	 * This would work for backend.
	 */
	// CJS
	{
		input: 'bin/cli.js',
		output: {
			file: 'dist/cjs.js',
			format: 'cjs',
			sourcemap: true
		},
		plugins: [
			resolvePlugin,
			babelPlugin,
			commonjs(),
			terser(),
			visualizer({
				filename: 'dist/bundle-visualizer-cjs.html'
			})
		]
	}
];
