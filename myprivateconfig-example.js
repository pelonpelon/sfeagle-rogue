'use strict';

// Rename this file to myprivateconfig.js. It is listed in .gitignore.
// See src-example for more details

// Jade is the templating language, but html can be used instead

// This file is required by gulp-config.js
// Default folders: src, build, dist. Change these in gulp-config.js if you want.

module.exports = {

// App name, div#mayapp in index.jade, folder name under root of server
// Required: src/pages/index.jade (with link to 'myapp.js' and div with id=myapp)
// Required: myapp/myapp.js (mount on div#myapp with m.module/m.route)

  version: 'myapp',

// "gulp rsync" to deploy to servver. Remote must provide rsync service (ssh)
// Password should be provided through ssh setup

  remoteHost: 'acme.com',
  remotePath: '/var/chroot/home/user/martha',
  remoteUser: 'username',

// Google business microformat options. See src-example/pages/index.jade

  myGoogleListedName: 'Acme, Inc.',
  myStreetAddress: '#666 Main St.',
  myCity: 'Nome',
  myState: 'AK',
  myPhoneNumber: '(123) 456-7890',
  myLogoUrl: 'http://acme.com/logo.jpg',
  myBusinessUrl: 'http://acme.com',

  myGoogleAnalyticsId: 'UA-XXXXX-X' // https://www.google.com/analytics/web/

};
