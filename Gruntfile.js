module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['./dist'],
        sass: {
            dist: {
                files: {
                    './dist/css/cleanify.css': './scss/cleanify.scss',
                    './dist/css/cleanify-dark.css': './scss/cleanify-dark.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    './dist/css/cleanify.min.css': './dist/css/cleanify.css',
                    './dist/css/cleanify-dark.min.css': './dist/css/cleanify-dark.css'
                }
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['@babel/preset-env']
            },
            dist: {
                files: {
                    './dist/js/cleanify.js': './js/main.js'
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    './dist/js/cleanify.min.js': ['./dist/js/cleanify.js']
                }
            }
        },
        watch: {
            css: {
                files: './scss/*.scss',
                tasks: ['sass', 'cssmin']
            },
            js: {
                files: './js/*.js',
                tasks: ['babel', 'uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-babel');

    grunt.registerTask('dist-css', ['clean', 'sass', 'cssmin', 'babel', 'uglify']);
    grunt.registerTask('default', ['watch']);
}