var gulp 		= require('gulp');
var sass		= require('gulp-ruby-sass');
var browserSync = require('browser-sync').create();
var reload 		= browserSync.reload;
var debug 		= require('gulp-debug');
// var uglify		= require('gulp-uglify');

gulp.task('sass', function() {
	return sass('./src/scss/style.scss')
				.pipe(gulp.dest('./css/'))
				.pipe(reload({ stream:true }));
});

gulp.task('scripts', function() {
	return gulp.src([
		])
		.pipe(debug({title : 'unicorn'}))
		.pipe(gulp.dest('./js'));
});

gulp.task('serve', ['sass', 'scripts'], function() {
	browserSync.init({
		server: {
			baseDir: './'
		},
		ghostMode: { scroll: false },
	});

	gulp.watch('src/scss/*.scss', ['sass']);
	gulp.watch('src/js/**/*.js', ['scripts']);
	gulp.watch(['*.html', '*.css', '*.js'], {cwd: 'app'}, reload);
});

gulp.task('ghostMode');
gulp.task('default', ['serve']);
