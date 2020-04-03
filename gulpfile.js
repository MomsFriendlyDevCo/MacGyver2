var _ = require('lodash');
var babel = require('gulp-babel');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var del = require('del');
var gulp = require('@momsfriendlydevco/gulpy');
var fs = require('fs');
var nodemon = require('gulp-nodemon');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var rimraf = require('rimraf');
var rollup = require('rollup');
var uglify = require('gulp-uglify');
var vm = require('vm');
var watch = require('gulp-watch');
var yaml = require('yaml');

var cache = {}; // Caches for various Rollup builds
var isProduction = !!process.env.NODE_ENV && process.env.NODE_ENV=='production';

gulp.task('default', 'serve');
gulp.task('build', ['build:demo', 'build:vue', 'build:node']);
gulp.task('build:demo', ['build:demo:vue', 'build:demo:fa', 'build:docs']);


/**
* Create a Nodemon monitored server and serve the demo project
*/
gulp.task('serve', 'build', ()=> {
	var monitor = nodemon({
		script: './demo/server.js',
		ext: 'js css',
		watch: ['./demo/server.js'], // Only watch the main server as the rest are handled below anyway
	})
		.on('start', function() {
			console.log('Server started');
		})
		.on('restart', function() {
			console.log('Server restarted');
		});

	watch(['./src/**/*.{js,vue}'], ()=> {
		gulp.log('Rebuild MacGyver...');
		return gulp.run('build:node', 'build:vue');
	});

	watch(['./demo/**/*.{js,vue}'], ()=> {
		gulp.log('Rebuild demo...');
		return gulp.run('build:demo');
	});

});


/**
* Create a monitored server specifially to check the GitHub /docs deployment
*/
gulp.task('serve:docs', 'build:docs', ()=> {
	var monitor = nodemon({
		script: './docs/server.js',
		ext: 'js css',
		watch: ['./docs/server.js'], // Only watch the main server as the rest are handled below anyway
	})
		.on('start', function() {
			console.log('Server started');
		})
		.on('restart', function() {
			console.log('Server restarted');
		});
});


/**
* Build main MacGyver stack for Node
*/
gulp.task('build:node', ()=>
	rollup.rollup({
		input: './src/entrypoint-node.js',
		cache: cache.macgyverNode || false,
		inlineDynamicImports: true,
		plugins: [
			require('rollup-plugin-commonjs')({
				include: ['node_modules/**/*', 'dist/**/*'],
				namedExports: {
					'dist/macgyver.js': ['macgyver'],
				},
			}),
			require('rollup-plugin-vue')(),
			require('rollup-plugin-includepaths')({
				paths: ['dist'],
			}),
			require('rollup-plugin-node-resolve')({
				mainFields: ['browser', 'module', 'main'],
				extensions: ['.js'],
			}),
			require('rollup-plugin-babel')({
				presets: ['@babel/env'],
				plugins: [
					['@babel/plugin-proposal-pipeline-operator', {proposal: 'fsharp'}],
					'@babel/plugin-proposal-throw-expressions',
					'lodash',
				],
				exclude: 'node_modules/**',
			}),
			isProduction && require('rollup-plugin-uglify').uglify(),
		],
	}).then(bundle => {
		cache.macgyverNode = bundle.cache;
		bundle.write({
			format: 'cjs',
			file: './dist/macgyver-node.js',
			name: 'macgyver',
			sourcemap: true,
		});
	})
);


/**
* Build main MacGyver stack for Vue
*/
gulp.task('build:vue', ()=>
	rollup.rollup({
		input: './src/entrypoint-vue.js',
		cache: cache.macgyverVue || false,
		inlineDynamicImports: true,
		external: [ // Don't include these in the Bundle as they are included elsewhere
			'jquery',
			'vue',
		],
		plugins: [
			require('rollup-plugin-commonjs')({
				include: ['node_modules/**/*', 'dist/**/*'],
				namedExports: {
					'dist/macgyver.js': ['macgyver'],
				},
			}),
			require('rollup-plugin-vue')(),
			require('rollup-plugin-includepaths')({
				paths: ['dist'],
			}),
			require('rollup-plugin-node-resolve')({
				mainFields: ['browser', 'module', 'main'],
				extensions: ['.js', '.vue'],
			}),
			require('rollup-plugin-babel')({
				presets: ['@babel/env'],
				plugins: [
					['@babel/plugin-proposal-pipeline-operator', {proposal: 'fsharp'}],
					'@babel/plugin-proposal-throw-expressions',
					'lodash',
				],
				exclude: 'node_modules/**',
			}),
			require('rollup-plugin-node-globals')({
				baseDir: false,
				buffer: false,
				dirname: false,
				filename: false,
				global: false,
				process: true,
			}),
			require('rollup-plugin-inject')({
				include: '**/*.js',
				exclude: 'node_modules/**',
				jQuery: 'jquery',
				$: 'jquery',
			}),
			require('rollup-plugin-scss')(),
			isProduction && require('rollup-plugin-uglify').uglify(),
		],
	}).then(bundle => {
		cache.macgyverVue = bundle.cache;
		bundle.write({
			format: 'iife',
			file: './dist/macgyver.js',
			name: 'macgyver',
			sourcemap: true,
			globals: {
				jquery: '$',
				vue: 'Vue',
			},
		});
	})
	.then(()=> fs.unlink(`${__dirname}/.error`, ()=> {}))
	.catch(e => {
		fs.writeFile(`${__dirname}/.error`, e.toString().replace( // Output last error, as plaintext (strip ANSI) to `.error`
			new RegExp([
				'[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
				'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'
			].join('|'), 'g')
		, ''), ()=> {});
		console.warn(e.toString());
	})
);


/**
* Build demo Vue files
*/
gulp.task('build:demo:vue', ()=>
	rollup.rollup({
		input: './demo/app.js',
		cache: cache.demo || false,
		external: [ // Don't include these in the Bundle as they are included elsewhere
			'jquery',
			'macgyver',
			'vue',
			'vue-router',
		],
		plugins: [
			require('rollup-plugin-commonjs')({
				include: ['node_modules/**/*', 'demo/**/*', 'dist/**/*'],
				namedExports: {
					'dist/macgyver.js': ['macgyver'],
				},
			}),
			require('rollup-plugin-vue')(),
			require('rollup-plugin-includepaths')({
				paths: ['dist', 'demo'],
			}),
			require('rollup-plugin-node-resolve')({
				mainFields: ['browser', 'module', 'main'],
				extensions: ['.js', '.vue'],
			}),
			require('rollup-plugin-node-globals')({
				baseDir: false,
				buffer: false,
				dirname: false,
				filename: false,
				global: false,
				process: true,
			}),
			require('rollup-plugin-json')(),
			require('rollup-plugin-inject')({
				include: '**/*.js',
				exclude: 'node_modules/**',
				jQuery: 'jquery',
				$: 'jquery',
			}),
			require('rollup-plugin-babel')({
				presets: ['@babel/env'],
				plugins: [
					['@babel/plugin-proposal-pipeline-operator', {proposal: 'fsharp'}],
					'@babel/plugin-proposal-throw-expressions',
					'lodash',
				],
				exclude: 'node_modules/**',
			}),
			isProduction && require('rollup-plugin-uglify').uglify(),
		],
	}).then(bundle => {
		cache.demo = bundle.cache;
		return bundle.write({
			format: 'iife',
			file: './dist/demo.js',
			name: 'demo',
			sourcemap: true,
			globals: {
				jquery: '$',
				vue: 'Vue',
				'vue-router': 'VueRouter',
			},
		});
	})
);


/**
* Build demo FontAwesome icon list file
*/
gulp.task('build:demo:fa', ()=>
	_.chain(fs.readFileSync(`${__dirname}/node_modules/@fortawesome/fontawesome-free/metadata/icons.yml`, 'utf-8'))
		.thru(contents => yaml.parse(contents))
		.map((v, k) => {
			v.class = k;
			return _.pick(v, [
				'class', 'styles', 'unicode',
			]);
		})
		.map(icon => ({
			id: icon.class,
			class:
				icon.styles[0] == 'brands' ? `fab fa-${icon.class}`
				: `fa fa-${icon.class}`,
			varients: icon.styles
				.map(s =>
					s == 'brands' ? `fab fa-${icon.class}`
					: s == 'solid' ? `fa fa-${icon.class}`
					: s == 'regular' ? `far fa-${icon.class}`
					: s == 'light' ? `fal fa-${icon.class}`
					: null
				)
				.filter(s => s),
		}))
		.thru(content => JSON.stringify(content, null, '\t'))
		.tap(v => fs.writeFileSync('./demo/webfonts-fa.json', v))
		.thru(()=> Promise.resolve())
		.value()
);


/**
* Compile the docs branch which contains the self-contained demo
*/
gulp.task('build:docs', ()=> del('./docs'), ()=>
	gulp.src([
		'./LICENSE',
		'./demo/_config.yml',
		'./demo/webfonts-fa.json',
		'./demo/index.html',
		'./demo/server-docs.js',
		'./dist/**/*',
		'./examples/**/*',
		'./node_modules/ace-builds/src-noconflict/ace.js',
		'./node_modules/axios/dist/axios.min.js',
		'./node_modules/bootstrap/dist/css/bootstrap.min.css',
		'./node_modules/bootstrap/dist/js/bootstrap.min.js',
		'./node_modules/@fortawesome/fontawesome-free/css/all.css',
		'./node_modules/@fortawesome/fontawesome-free/webfonts/*',
		'./node_modules/jquery/dist/jquery.min.js',
		'./node_modules/lodash/lodash.min.js',
		'./node_modules/popper.js/dist/umd/popper.min.js',
		'./node_modules/vue/dist/vue.min.js',
		'./node_modules/vue-js-toggle-button/dist/index.js',
		'./node_modules/vue-router/dist/vue-router.min.js',
	], {base: __dirname})
		.pipe(rename(function(path) {
			if (path.dirname == 'demo' && path.basename == 'webfonts-fa' && path.extname == '.json') { // Move webfont dir into server api path
				path.dirname = 'api/webfonts';
				path.basename = 'fa';
				path.extname = '.json';
			} else if (path.dirname == 'demo' && path.basename == 'server-docs' && path.extname == '.js') { // Move webfont dir into server api path
				path.dirname = '.';
				path.basename = 'server';
			} else if (path.dirname == 'demo') { // Move all demo files into root
				path.dirname = '.';
			}
			return path;
		}))
		.pipe(gulp.dest('./docs'))
);
