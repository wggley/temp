/**
 * App Controller
 */
(function() {
    angular
        .module('pogo.mobiforms.web')
        .controller('appController', appController);

    appController.$inject = ['coreService', '$timeout', '$state', '$scope', 'coreConfig', 'mobiFormsConfig'];

    /**
     * App Controller function
     */
    function appController(coreService, $timeout, $state, $scope, coreConfig, mobiFormsConfig) {
        var vm = this;
        vm.mobiFormsConfig = mobiFormsConfig;

        //Public Functions


        init();

        /**
         * App initialization
         */
        function init() {}

        /**
         * Listen on event goBack
         */
        $scope.$on('setUserMenu', function() {

        });

        /**
         * Listen on ng ui Router View Content Loaded
         * @param  {object} event
         */
        $scope.$on('$viewContentLoaded', function(event) {

        });

    };
})();
