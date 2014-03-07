module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
            dist: {
                src: [
                    'project/js/libs/*.js', // All JS in the libs folder
                    'project/js/*.js'  // This specific file
                ],
                dest: 'build/js/production.js',
            }
        },

        uglify: {
            build: {
                src: 'build/js/production.js',
                dest: 'build/js/production.min.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'imgs/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/images/'
                }]
            }
        },

        autoprefixer: {
            options: {
            browsers: ['last 2 version']
          },
          multiple_files: {
            expand: true,
            flatten: true,
            src: 'project/css/*.css',
            dest: 'build/css/prefixed/'
          }
        },

        cssmin: {
          minify: {
            expand: true,
            cwd: 'project/css/prefixed',
            src: ['*.css', '!*.min.css'],
            dest: 'build/css/minified',
            ext: '.min.css'
          },
          combine: {
            files: {
              'build/css/minified/global.css': ['build/css/minified/*.css']
            }
          }
        },

        cssmin: {
            combine: {
            files: {
              'build/css/minified/global.css': ['build/css/prefixed/*.css']
            }
          }
        },

        watch: {
          options: {
            livereload: true,
          },
          scripts: {
            files: ['project/js/*.js'],
            tasks: [ 'concat', 'uglify'],
            options: {
              spawn: false,
            }
          },
          css: {
            files: ['project/css/*.css'],
            tasks: ['autoprefixer', 'cssmin'],
            options: {
              spawn: false,
            }
          },
          images: {
            files: ['imgs/**/*.{png,jpg,gif}', 'imgs/*.{png,jpg,gif}'],
            tasks: ['imagemin'],
            options: {
              spawn: false,
            }
          },
          html:{
            files: ['./**/*.html'],
            tasks: [],
            options: {
              spawn: false
            }
          }
        },

        connect: {
            server: {
            options: {
              port: 1337,
              base: ''
            }
          }
        }

        


    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin','cssmin', 'autoprefixer', 'connect','watch']);
    grunt.registerTask('dev', ['concat', 'uglify', 'imagemin','autoprefixer', 'cssmin']);
    grunt.registerTask('watch', ['connect', 'watch']);
};