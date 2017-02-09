module.exports = function(grunt) {
  var pathname = url.parse(request.url).pathname; 
  if(pathname == '/favicon.ico'){ //not loading favicon.ico
    return; 
  }
  
  var lrPort = 35729;
  var lrSnippet = require('connect-livereload')({
    port: lrPort
  });
  var serveStatic = require('serve-static');
  var serveIndex = require('serve-index');
  var lrMiddleware = function(connect, options) {
    return [
      lrSnippet,
      serveStatic(options.base[0]),
      serveIndex(options.base[0])
    ];
  };
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      options: {
        port: 8000,
        hostname: 'localhost',
        base: '.'
      },
      livereload: {
        options: {
          middleware: lrMiddleware
        }
      }
    },
    watch: {
      client: {
        options: {
          livereload: lrPort
        },
        files: ['*.html', 'css/*.css', 'js/*.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect', 'watch']);
};