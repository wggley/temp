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

        }])
        .run([function() {
            //After Login State

        }]);
})();
