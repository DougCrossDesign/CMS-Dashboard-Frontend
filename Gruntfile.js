// AYC Grunt Base Auto 2
// call this file using this command:
// grunt --gruntfile Gruntfile-admin.js

module.exports = function(grunt) {

	var globalConfig = {
		src: 'themes/admin/core',
	};

	// Project Configuration.
	grunt.initConfig({

		globalConfig: globalConfig,
		pkg: grunt.file.readJSON('package.json'),

		/////////////////
		// DEFAULT
		/////////////////

		//Concat
		concat: {
			options: {
				separator: '\n\n;'
			},
			bodyjs: {
				src: ['<%= globalConfig.src  %>/assets/js/jquery.js', '<%= globalConfig.src  %>/assets/js/jquery-ui.min.js', '<%= globalConfig.src  %>/assets/js/plugins/*.js', '<%= globalConfig.src  %>/assets/js/init.js' ],
				dest: '<%= globalConfig.src  %>/assets/scripts.js'
			},
			headjs: {
				src: ['<%= globalConfig.src  %>/assets/js/head/*.js'],
				dest: '<%= globalConfig.src  %>/assets/head.js'
			},
			sasscon: {
				src: [ '<%= globalConfig.src  %>/assets/sass/plugins/*.scss','<%= globalConfig.src  %>/assets/sass/plugins/*.css','<%= globalConfig.src  %>/assets/sass/base.scss','<%= globalConfig.src  %>/assets/sass/base.css'],
				dest: '<%= globalConfig.src  %>/assets/sass/master.scss'
			}
		},

		// Sass
		sass: {
			dist: {
				options: {
					style: 'compressed',
					compass: true
				},
				files: {
					'<%= globalConfig.src  %>/assets/style.css': '<%= globalConfig.src  %>/assets/sass/master.scss'
				}
			}
		},

		// Uglify
		uglify: {
			options: {
				mangle: false,
				beautify: true, // debug js
				compress: {
					sequences: true
				},
				preserveComments: 'none'
			},
			my_target: {
				files: {
					'<%= globalConfig.src  %>/assets/head.js': ['<%= globalConfig.src  %>/assets/head.js'],
					'<%= globalConfig.src  %>/assets/scripts.js': ['<%= globalConfig.src  %>/assets/scripts.js']
				}

			}
		},

		// Watch
		watch: {
			sass: {
				files: ['<%= globalConfig.src  %>/assets/sass/base.scss', '<%= globalConfig.src  %>/assets/sass/*/*.scss', '<%= globalConfig.src  %>/partials/*/*.scss'],
				tasks: ['concat','sass']
			},
			scripts: {
				files: ['<%= globalConfig.src  %>/assets/js/*.js', '<%= globalConfig.src  %>/assets/js/plugins/*.js', '<%= globalConfig.src  %>/assets/js/head/*.js', '<%= globalConfig.src  %>/assets/js/custom/*.js'],
				tasks: 'concurrent'
			}
		},

		// Concurrent
		concurrent: {
			first: ['concat'],
			second: ['uglify']
		},


	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Tasks
	grunt.registerTask('default', ['concat', 'sass', 'uglify', 'watch', 'concurrent:first', 'concurrent:second']);

};
