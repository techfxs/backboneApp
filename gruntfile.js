module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
    
        jshint: {
            all: ['gruntfile.js', 'public/js/**/*.js', '!public/js/templates'],
            options: {
                globals: {
                    'APP': true,
                    "jQuery": true
                }
            }
        },

        "jsbeautifier": {

            files: ["public/js/**/*.js", "gruntfile.js"],
            options: {

            }
        },

        //https://github.com/gruntjs/grunt-contrib-jshint

        handlebars: {
            compile: {
                files: [{
                    expand: true,
                    cwd: 'public/templates',
                    src: ['**/*.hbs', '**/*.handlebars', '**/*.html'], //Refer http://jslinterrors.com/
                    dest: 'public/js/templates',
                    ext: '.js',
                    extDot: 'first'
                }]
            },
            options: {
                namespace: false,
                amd: true
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    /* nested / compact/ compressed / expanded  */
                    trace: true,
                    debugInfo: false,
                    lineNumbers: true,
                    update: false,
                    sourcemap: "auto"
                },
                files: [{
                    expand: true,
                    cwd: 'public/scss',
                    src: ['*.scss', '**/*.scss'],
                    dest: 'public/css',
                    ext: '.css'
                }]

            }
        },
        watch: {
            handlebars: {
                files: ['public/templates/**/*.html'],
                tasks: ["handlebars"]
            },
            sass: {
                files: ["public/scss/**/*.scss"],
                tasks: ["sass"]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks("grunt-jsbeautifier");
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('build', ['handlebars', 'sass', 'jshint', 'jsbeautifier']);    
    grunt.registerTask('default', ['build', 'watch']);
};
