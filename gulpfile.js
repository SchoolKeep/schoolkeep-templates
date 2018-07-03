var gulp = require( 'gulp' );
var gulpif = require( 'gulp-if' );
var browserSync = require( 'browser-sync' ).create();
var sass = require( 'gulp-sass' );
var sourcemaps = require( 'gulp-sourcemaps' );
var autoprefixer = require( 'gulp-autoprefixer' );
var concat = require( 'gulp-concat' );
var cssnano = require( 'gulp-cssnano' );
var notify = require( 'gulp-notify' );
var changed = require( 'gulp-changed' );
var scsslint = require( 'gulp-scss-lint' );
var cache = require( 'gulp-cached' );
var runSequence = require( 'run-sequence' );

var handleErrors = function () {
	var args = Array.prototype.slice.call( arguments );

	// Send error to notification center with gulp-notify
	notify
		.onError( {
			title: 'Compile Error',
			message: '<%= error %>'
		} )
		.apply( this, args );

	// Keep gulp from hanging on this task
	this.emit( 'end' );
};

// Set NODE_ENV to development by default
process.env.NODE_ENV = 'development';

// Set NODE_ENV to production when building
gulp.task( 'set-prod-node-env', function () {
	return ( process.env.NODE_ENV = 'production' );
} );

// Open new browser window if --open flag is set
var initBrowserSync = function () {
	var option,
		i = process.argv.indexOf( '--open' );

	if ( i > -1 ) {
		// option = process.argv[i+1];
		option = process.argv[ i ];
	}

	browserSync.init( {
		proxy: "localhost:4000",
		open: true,
	} );

};


gulp.task('sass', function () {
 return gulp.src('./assets/styles/style.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
				includePaths: [
					'assets/styles/extensions/foundation',
					'node_modules/foundation-sites/scss',
					'node_modules/motion-ui/src',
				]
			})
  .on('error', sass.logError))
  .pipe( autoprefixer( { browsers: [ 'last 3 versions' ] } ) )
  .pipe( gulpif( process.env.NODE_ENV === 'production',
  				cssnano( {
							safe: true, // Use safe optimizations.
							keepSpecialComments: 1
						}
					)
				)
  )
  .pipe( gulpif( process.env.NODE_ENV === 'development',
  				sourcemaps.write()
				)
  )
  .pipe( concat( 'styles.css.sktl' ) )
	.pipe( gulp.dest( './templates/' ) )
	.pipe( browserSync.stream() );
});

// SCSS linter
gulp.task( 'scss-lint', function () {
	return gulp
		.src( [ './assets/styles/**/**/*.scss' ] )
		.pipe( cache( 'scsslint' ) )
		.pipe(
			scsslint( {
				config: '.scss-lint.yml',
				maxBuffer: 614400,
				endless: true
			} )
		);
} );


gulp.task( 'default', [ 'sass' ] );

// Spin up dev
gulp.task( 'sync', function () {

	runSequence(
		'sass',
		function () {
			initBrowserSync();
		}
	);

	// Compile & lint SASS on change
	gulp.watch( './assets/styles/**/**/*.scss', { interval: 500 }, [
		'sass',
		'scss-lint'
	] );

} )

// Build for production
gulp.task( 'build', [ 'set-prod-node-env' ], function () {
	runSequence(
		'sass'
	);
} );
