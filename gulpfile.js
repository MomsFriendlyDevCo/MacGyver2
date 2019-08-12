var babel = require('gulp-babel');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var ghPages = require('gulp-gh-pages');
var gulp = require('@momsfriendlydevco/gulpy');
var nodemon = require('gulp-nodemon');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var rimraf = require('rimraf');
var rollup = require('rollup');
var uglify = require('gulp-uglify');
var vm = require('vm');
var watch = require('gulp-watch');

var cache = {}; // Caches for various Rollup builds
var isProduction = !!process.env.NODE_ENV && process.env.NODE_ENV=='production';

gulp.task('default', gulp.series('serve'));
gulp.task('build', gulp.parallel('build:demo', 'build:macgyver'));


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
		return gulp.run('build:macgyver');
	});

	watch(['./demo/**/*.{js,vue}'], ()=> {
		gulp.log('Rebuild demo...');
		return gulp.run('build:demo');
	});

});


/**
* Build main MacGyver stack
*/
gulp.task('build:macgyver', ()=>
	rollup.rollup({
		input: './src/macgyver.js',
		cache: cache.macgyver || false,
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
			require('rollup-plugin-babel')({
				presets: ['@babel/env'],
				plugins: ['@babel/plugin-syntax-dynamic-import'],
				exclude: 'node_modules/**',
			}),
			isProduction && require('rollup-plugin-uglify').uglify(),
		],
	}).then(bundle => {
		cache.macgyver = bundle.cache;
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
);


/**
* Build demo
*/
gulp.task('build:demo', ()=>
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
				plugins: ['@babel/plugin-syntax-dynamic-import'],
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
* Compile the gh-pages branch in GitHub
*/
gulp.task('gh-pages', 'build', ()=> del('./gh-pages'), ()=>
	gulp.src([
		'./LICENSE',
		'./demo/_config.yml',
		'./demo/app.js',
		'./demo/app.css',
		'./demo/editor.html',
		'./demo/index.html',
		'./demo/style.css',
		'./dist/**/*',
		'./examples/**/*',
		'./node_modules/popper.js/dist/popper.min.js',
		'./node_modules/bootstrap/dist/css/bootstrap.min.css',
		'./node_modules/bootstrap/dist/js/bootstrap.min.js',
		'./node_modules/font-awesome/css/font-awesome.min.css',
		'./node_modules/font-awesome/fonts/fontawesome-webfont.ttf',
		'./node_modules/font-awesome/fonts/fontawesome-webfont.woff',
		'./node_modules/font-awesome/fonts/fontawesome-webfont.woff2',
		'./node_modules/jquery/dist/jquery.min.js',
		'./node_modules/lodash/lodash.min.js',
		'./node_modules/tree-tools/dist/ngTreeTools.js',
	], {base: __dirname})
		.pipe(rename(function(path) {
			if (path.dirname == 'demo') { // Move all demo files into root
				path.dirname = '.';
			}
			return path;
		}))
		.pipe(ghPages({
			cacheDir: 'gh-pages',
			push: true, // Change to false for dryrun (files dumped to cacheDir)
		}))
);
