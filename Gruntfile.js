module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			target: {
				files: [{
					expand: true,
					flatten: true,
					src: ['bower_components/bootstrap/dist/js/*'],
					dest: 'public/'
				}, {
					expand: true,
					flatten: true,
					src: ['bower_components/jquery/jquery.*'],
					dest: 'public/'
				}]
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'app.js',
				dest: 'app.min.js'
			}
		},
		jshint: {
			files: ['app.js'],
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				boss: true,
				eqnull: true,
				browser: true
			},
			globals: {
				jQuery: true
			}
		},
		githooks: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				boss: true,
				eqnull: true,
				browser: true
			},
			all: {
				'pre-commit': 'jshint test:unit'
			}
		},
		watch: {
			app:{
				files:['./app.js'],
				task:['close','server'],
				options: {
					livereload: {},
				}
			},
     		options: {
     			livereload: true,
	        },
		},
		nodemon: {
			dev: {
				options: {
					file: './app.js',
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-git');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-bower-install-task');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.registerTask('default', ['copy', 'jshint', 'uglify']);
    grunt.registerTask('heroku', ['copy']) //wip
    grunt.registerTask('server', ['nodemon'])
};
/*
grunt heroku


/dist
/dist/public/*
/

*/