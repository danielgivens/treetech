module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		watch: {
			options: {
		        livereload: true,
		    },
		    scripts: {
		        files: [
		        	'docroot/assets/js/*.js',
		        	'docroot/assets/js/*/*.js',
		        	'docroot/assets/css/*.scss',
		        	'docroot/assets/css/*/*.scss',
		        	'docroot/*/*.php',
		        	'docroot/*.php',
		        	'docroot/*.html'
		        ],
		        tasks: ['sass', 'uglify'],
		        options: {
		            spawn: false,
		        },
		    },    
		},	
		sass: {
			options: {
				loadPath: require('node-bourbon').includePaths,
				style: 'compressed'
			},			
			dist: {
				files: {
					'docroot/assets/css/style.css': 'docroot/assets/css/style.scss',
				}
			}
		},
		uglify: {
		    base: {
		        src: 'docroot/assets/js/base.js',
		        dest: 'docroot/assets/js/base.min.js',
		    },
		    libs: {
		        src: [
		            'docroot/assets/js/vendor/jquery.js',
		            'docroot/assets/js/vendor/iscroll-probe.js',
		            'docroot/assets/js/vendor/anystretch.js',
		            'docroot/assets/js/vendor/actual.js',
		            'docroot/assets/js/vendor/fittext.js',
		            'docroot/assets/js/vendor/cycle.js'
		        ],
		        dest: 'docroot/assets/js/libs.min.js',
		    }
		}
    });
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('work', ['watch','uglify:base','sass']);
    grunt.registerTask('build', ['sass','uglify']);
};