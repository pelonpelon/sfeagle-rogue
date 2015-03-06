gulp        = require 'gulp'
rsync       = require('rsyncwrapper').rsync
config      = require('../../gulp-config').rsync
gutil       = require('gulp-util')

src1 = config.src
dest1 = config.root
src2 = config.src + '/' + config.version + '.html'
dest2 = config.root

gulp.task 'rsync', (cb)->
  gutil.log 'src1 = ' + src1
  gutil.log 'dest1 = ' + dest1
  gutil.log 'src2 = ' + src2
  gutil.log 'dest2 = ' + dest2
  rsync
    dryRun: true
    ssh: true
    src: src1
    dest: dest1
    recursive: true
    # syncDest: true
    args: ['--verbose']
  , (error, stdout, stderr, cmd)->
      gutil.log stdout
  # rsync
    # dryRun: true
    # ssh: true
    # src: src2
    # dest: dest2
    # args: ['--verbose']
  # , (error, stdout, stderr, cmd)->
      # gutil.log stdout
  cb(null)
