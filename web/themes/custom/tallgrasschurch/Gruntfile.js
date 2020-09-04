module.exports = function(grunt) {

  const sass = require('sass');

  // Display the elapsed execution time of Grunt tasks
  require('time-grunt')(grunt);

  // Load Grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Sass command
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
        outputStyle: 'expanded',
      },
      build: {
        files: [{
          expand: true,
          cwd: 'src/css/',
          src: ['**/*.{scss,sass}'],
          dest: 'css',
          ext: '.css',
        }],
      },
    },

    // PostCSS command
    postcss: {
      options: {
        processors: [
          require('autoprefixer')
        ],
      },
      build: {
        src: 'css/*.css',
      },
    },

    // Watch command
    watch: {
      sass: {
        files: [
          'src/css/**/*.{scss,sass}'
        ],
        tasks: [
          'sass',
          'postcss',
        ],
      },
      livereload: {
        options: {
          livereload: true,
        },
        files: [
          'css/**/*.css'
        ],
      },
    },

    // Run tasks in parallel
    concurrent: {
      serve: [
        'watch'
      ],
      options: {
        logConcurrentOutput: true,
      },
    },
  });

  // Serve task
  grunt.registerTask('serve', [
    'build',
    'concurrent:serve'
  ]);

  // Build task
  grunt.registerTask('build', [
    'sass',
    'postcss'
  ]);

  // Default task
  grunt.registerTask('default', 'serve');

};
