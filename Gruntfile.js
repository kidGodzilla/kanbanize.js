module.exports = function(grunt) {
	// Do grunt-related things in here

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		coffee: {
			compile: {
				files: {
					'dist/jkanbanize.js': ['src/jkanbanize.coffee']
				}
			},
		},
		uglify: {
			my_target: {
				files: {
					'dist/jquery.jkanbanize.min.js': ['dist/jquery.jkanbanize.js'],
				}
			}
		},
		watch: {
			scripts: {
				files: ['**/*.coffee'],
				tasks: ['coffee', 'uglify'],
				options: {
					spawn: false,
				},
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['coffee', 'uglify']);
	grunt.registerTask('test', ['coffee', 'uglify', 'qunit']);

};