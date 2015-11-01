module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            js: {
                files: [{
                    expand: true,
                    src: ['*.js', '!*.min.js'],
                    dest: 'dist/js',
                    cwd: 'src/js',
                    ext: '.min.js'
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                expand: true,
                cwd: 'src',
                src: ['**/*.html'],
                dest: 'dist/'
            }
        },
        sass: {
            options: {
                style: 'compressed',
                sourcemap: 'none'
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: ['*.scss'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/img'
                }]
            }
        },
        copy: {
            fonts: {
                files: [{
                    cwd: 'src/font',
                    src: '**',
                    dest: 'dist/font',
                    expand: true
                }]
            },
            js: {
                files: [{
                    cwd: 'src/js',
                    src:[
                        '**/*.min.js'
                    ],
                    dest: 'dist/js',
                    expand: true
                }]
            },
            css: {
                files: [{
                    cwd: 'src/css',
                    src:[
                        '**/*.min.css'
                    ],
                    dest: 'dist/css',
                    expand: true
                }]
            },
            angular: {
                cwd: 'bower_components/angular/',
                src: 'angular.min.js',
                dest: 'dist/js/vendor/',
                expand: true
            },
            ngRoute: {
                files: [{
                    cwd: 'bower_components/angular-route/',
                    src: 'angular-route.min.js',
                    dest: 'dist/js/vendor/',
                    expand: true
                }]
            },
            ngResource: {
                files: [{
                    cwd: 'bower_components/angular-resource/',
                    src: 'angular-resource.min.js',
                    dest: 'dist/js/vendor/',
                    expand: true
                }]
            },
            jquery: {
                files: [{
                    cwd: 'bower_components/jquery/dist/',
                    src: 'jquery.min.js',
                    dest: 'dist/js/vendor',
                    expand: true
                }]
            },
            bootstrapJs: {
                files: [{
                    cwd: 'bower_components/bootstrap/dist/js/',
                    src: 'bootstrap.min.js',
                    dest: 'dist/js/vendor',
                    expand: true
                }]
            },
            bootstrapCss: {
                files: [{
                    cwd: 'bower_components/bootstrap/dist/css',
                    src: 'bootstrap.min.css',
                    dest: 'dist/css/',
                    expand: true
                }]
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    open: {
                        appName: 'chrome'
                    },
                    base: ['dist'],
                    middleware: function ( connect, options, middlewares ) {
                        var rules = [
                            "!\\.html|\\.js|\\.css|\\.svg|\\.jp(e?)g|\\.png|\\.gif$ /index.html"
                        ];
                        middlewares.unshift( rewrite( rules ) );
                        return middlewares;
                    }
                }
            }
        },

        watch: {
            scripts: {
                files: ['src/js/**/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                    livereload: true
                },
            },
            css: {
                files: ['src/css/**/*.css'],
                tasks: ['cssmin'],
                options: {
                    spawn: false,
                    livereload: true
                },
            },
            html: {
                files: ['src/**/*.html'],
                tasks: ['htmlmin'],
                options: {
                    spawn: false,
                    livereload: true
                },
            },
            sass: {
                files: ['src/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                    livereload: true
                },
            },
            images: {
                files: ['src/img/**/*.{png,jpg,gif}'],
                tasks: ['imagemin'],
                options: {
                    spawn: false,
                    livereload: true
                },
            },
            fonts: {
                files: ['src/font/**/*'],
                tasks: ['copy:fonts'],
                options: {
                    spawn: false,
                    livereload: true
                },
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    var rewrite = require( "connect-modrewrite" );

    grunt.registerTask('default', ['uglify', 'sass', 'cssmin', 'htmlmin', 'imagemin', 'copy', 'connect', 'watch']);
};