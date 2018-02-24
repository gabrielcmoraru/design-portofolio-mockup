module.exports = function(grunt) {
	grunt.initConfig({
	autoprefixer: {
			options: {
					browsers: ['last 6 versions']
			},
			target: {
				expand: true,
				flatten: true,
				// cwd: '/',
				src: [ 'css/*.css' ],
				dest: 'css/autoprefixer'
			}
	},
	watch: {
				scripts: {
					files: ['css/*.css'],
					tasks: ['autoprefixer'],
					ooptions: {
				livereload: true,
	},

		},
	},
},)

	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['watch']);
}