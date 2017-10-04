/*!
 * Default Gruntfile
 * @author Wallace Goulart Gaudie Ley
 */

'use strict';

/**
 * Grunt Module
 */
module.exports = function(grunt) {
    /**
     * Load Grunt plugins
     */
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    /**
     * Configuration
     */
    grunt.initConfig({
        /**
         * Get package meta data
         */
        pkg: grunt.file.readJSON('package.json'),

        /**
         * Set project object
         */
        project: {
            appName: 'Mobiforms.FrontEnd.Web',
            app: 'app',
            assets: 'assets',
            config: 'config',
            dest: 'build',
            css: [
                '<%= project.assets %>/scss/imports.scss'
                // a file for each module TODO create this dynamic
            ]
        },

        /**
         * App constants
         */
        ngconstant: {
            // Options for all targets
            options: {
                space: '  ',
                wrap: '"use strict";\n\n {%= __ngModule %}',
                name: 'pogo.mobiforms.web.config',
            },
            // Environment targets
            dev: {
                options: {
                    dest: '<%= project.dest %>/config.js',
                },
                constants: '<%= project.config %>/dev.json'
            }
        },


        /**
         * Sass
         */
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    compass: true,
                    sourcemap: 'none'
                },
                files: {
                    '<%= project.assets %>/css/styles.css': '<%= project.css %>'
                }
            },
            dist: {
                options: {
                    style: 'compressed',
                    compass: true,
                    sourcemap: 'none'
                },
                files: {
                    '<%= project.dest %>/styles.min.css': '<%= project.assets %>/css/styles.css'
                }
            }
        },

        /**
         * Watch
         */
        watch: {
            sass: {
                files: '<%= project.assets %>/scss/**/*.{scss,sass}',
                tasks: ['sass:dev']
            }
        },


        exec: {
            version: {
                command: 'version.bat'
            }
        },

    });


    /**
     * Default task
     * Run `grunt` on the command line
     */
    grunt.registerTask('default', [
        'sass:dev',
        'watch'
    ]);

    grunt.registerTask('config', function(target) {
        if (typeof(target) == "undefined") {
            target = 'dev';
        }
        grunt.task.run([
            'ngconstant:' + target,
        ]);
    });

    grunt.task.run([
        'exec:version'
    ]);
};
