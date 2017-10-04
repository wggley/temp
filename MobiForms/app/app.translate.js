/**
 * Translate Module
 */
(function() {
    angular
        .module('pogo.mobiforms.web')
        .config(config);

    config.$inject = ['mobiFormsConfig', '$translateProvider', '$translatePartialLoaderProvider'];

    /**
     * App Translations configuration function
     */
    function config(mobiFormsConfig, $translateProvider, $translatePartialLoaderProvider) {
        $translatePartialLoaderProvider.addPart(mobiFormsConfig.translatePart);
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '{part}/app/i18n/locale-{lang}.json'
        });
    }
})();
