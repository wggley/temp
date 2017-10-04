/**
 * App Module Configurations
 */
(function() {
    var injection = [
        'pogo.core',
        'pogo.mobiforms.web.config',
    ];

    angular
        .module('pogo.mobiforms.web', injection)
        .config(['coreConfig', 'mobiFormsConfig', function(coreConfig, mobiFormsConfig) {

        }]);



    angular
        .module('pogo.mobiforms.web')
        .run(run);

    run.$inject = ['$ocLazyLoad', 'mobiFormsConfig', 'coreConfig', '$translate'];

    /**
     * Run function
     */
    function run($ocLazyLoad, mobiFormsConfig, coreConfig, $translate) {
        var moduleFilesOnSerie = [
            mobiFormsConfig.directories.assets + '/css/styles.css',
            mobiFormsConfig.directories.app + '/app.states.js',
            mobiFormsConfig.directories.app + '/app.translate.js',
        ];

        $ocLazyLoad.load([moduleFilesOnSerie], {
            serie: true,
        }).then(function() {
            $translate.refresh();
        });
        //After Login State

    }
})();
