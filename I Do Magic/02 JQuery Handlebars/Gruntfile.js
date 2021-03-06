
var BASE_URL = "";

module.exports = function(grunt) {

  // Configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Watch for changes on the CSS, JS, HTML and hbs files
    watch: {
      // Main JS files
      mainScripts: {
        files: [BASE_URL + 'js/main/**/*.js', BASE_URL + 'js/main/*.js'],
        tasks: ['jshint', 'uglify:main'],
        options: {
          spawn: false,
          jshintrc: true,
          livereload: true,
          livereloadOnError: false
        },
      },
      // HTML Files
      htmlFiles: {
        files: [BASE_URL + '**/*.html'],
        tasks: ['htmlhint'],
        options: {
          spawn: false,
          livereload: true,
          livereloadOnError: false
        },
      },
      // SCSS files
      scssFiles: {
        files: [BASE_URL + 'scss/**/*.scss'],
        tasks: ['compass', 'cssmin'],
        options: {
          spawn: false,
          livereload: true,
          livereloadOnError: false
        },
      },
      // hbs files
      hbsFiles: {
        files: [BASE_URL + 'templates/*.hbs'],
        tasks: ['handlebars'],
        options: {
          spawn: false,
          livereload: true,
          livereloadOnError: false
        },
      }
    },

    // Runs compass on SCSS files
    compass : {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },

    // Checks JS files
    jshint: {
      options : {
        reporter: 'jslint',
        force: 'true',
        reporterOutput: BASE_URL + 'js/main/errors.log'        
      },
      all: [BASE_URL + 'js/main/*.js'],
    },

    //Check the html files
    htmlhint: {
      indexFiles: {
          options: {
            'tag-pair': true,
            'tagname-lowercase': true,
            'attr-lowercase': true,
            'attr-value-double-quotes': true,
            'attr-value-not-empty': true,
            'doctype-first': true,
            'tag-self-close': true,
            'id-unique': true,
            'src-not-empty': true
          },
          src: [BASE_URL + '*.html'] //Add other sources if needed
      }
    },

    // Concats and minify files
    uglify: {
      main: {
        options: {
          banner: '/*! Intelligent Sense <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        files: {
          'js/main.min.js': BASE_URL + 'js/main/*.js',
        }
      },
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/style.min.css': ['css/style.css']
        }
      }
    },

    handlebars: {
      compile: {
        options: {
          namespace: "JST"
        },
        files: {
          "js/compiledHB.js": ["templates/*.hbs"]
        }
      }
    }
  });

  // Load the plugins
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Default task
  grunt.registerTask('default', ['watch']);
};