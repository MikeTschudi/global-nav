module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            options: {
                outputStyle: 'compressed',
                sourceMap: false
            },
            dist: {
                files: {
                    'css/global-nav.css' : 'scss/global-nav.scss',
                    'demo/css/prototypeChucks.css' : 'demo/scss/prototypeChucks.scss'
                }
            }
        },
        watch: {
            css: {
                files: ['**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
}