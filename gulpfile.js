var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var babel = require('gulp-babel');

var PATHS = {
	js: 'public/**/*.js',
    html: 'public/**/*.html'
};

gulp.task('js', function () {
	return gulp.src(PATHS.js)
				.pipe(babel())
				.pipe(gulp.dest('dist'));
});

gulp.task('js-watch', ['js'], function() {
	console.log('js-watch');
	browserSync.reload
});
gulp.task('html-watch', ['html'], browserSync.reload);

gulp.task('html', function () {
	return gulp.src(PATHS.html)
				.pipe(gulp.dest('dist'));
});

gulp.task('serve', ['js', 'html'], function() {
	browserSync.init({
		server: {
			baseDir: './dist'
		}
	})
	gulp.watch(PATHS.html, ['html-watch']);
	gulp.watch(PATHS.js, ['js-watch']);
});

gulp.task('default', ['serve']);