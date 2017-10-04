/**
 * App States configurations
 */
(function() {

    angular
        .module('pogo.mobiforms.web')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', 'coreConfig', 'mobiFormsConfig'];

    /**
     * Provide states for app
     * @param  {object}
     * @param  {object}
     */
    function config($stateProvider, $urlRouterProvider, coreConfig, mobiFormsConfig) {
        // Using AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js

    }

})();
