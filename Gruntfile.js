module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd hh:mm") %> */\n'
      },
      build: {
        src: ['public/javascripts/angularApp.js', 'public/javascripts/controllers/DashBoardController.js', 'public/javascripts/filters/filters.js', 'public/javascripts/controllers/ResultsController.js', 'public/javascripts/services/detailsServices.js'],
        dest: 'public/javascripts/build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};