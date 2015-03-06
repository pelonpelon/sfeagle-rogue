gulp = require "gulp"
$ = require('gulp-load-plugins')()
handleErrors = require "../util/handleErrors"
config = require "../../gulp-config"

# jade files // don't process _partials.jade that haven't changed
    # .pipe $.changed config.build, {extension: '.html'}
gulp.task 'jade', (cb)->
  pages = config.src + '/pages'
  return gulp.src [
      pages + '/jade/**/*.jade'
    ], base: pages + '/jade'
    .pipe $.if global.isWatching, $.cached('jade')
    .pipe $.jadeInheritance {basedir: pages + '/jade'}
    .pipe $.filter (file)->
      !/\/_/.test(file.path) || !/^_/.test(file.relative)
    .pipe $.jade { pretty: true }
    .on("error", handleErrors)
    .pipe gulp.dest(pages)
    .pipe $.size { title: 'jade' }
  cb(null)
