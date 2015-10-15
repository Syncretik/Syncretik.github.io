var gulp 		= require('gulp');
var sass		= require('gulp-ruby-sass');
var browserSync = require('browser-sync').create();
var reload 		= browserSync.reload;
var debug 		= require('gulp-debug');
// var uglify		= require('gulp-uglify');

gulp.task('sass', function() {
	return sass('./app/src/scss/style.scss')
				.pipe(gulp.dest('app/dist/css/'))
				.pipe(reload({ stream:true }));
});

gulp.task('scripts', function() {
	return gulp.src([
		])
		.pipe(debug({title : 'unicorn'}))
		.pipe(gulp.dest('app/dist/js'));
});

gulp.task('serve', ['sass', 'scripts'], function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		},
		ghostMode: { scroll: false },
		startPath: 'dist/html/index.html'
	});

	gulp.watch('app/src/scss/*.scss', ['sass']);
	gulp.watch('app/src/js/**/*.js', ['scripts']);
	gulp.watch(['dist/html/*.html', 'dist/css/*.css', 'dist/*.js'], {cwd: 'app'}, reload);
});

gulp.task('ghostMode');
gulp.task('default', ['serve']);
