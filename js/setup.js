angular.module('webaspietools', ['ngResource', 'ngAnimate', 'ui.router', 'ionic']);

angular.module('webaspietools').config(function ($stateProvider, $urlRouterProvider) {
  'use strict';

  $stateProvider
    .state('schedule', {
      url: '/schedule',
      templateUrl: 'partial/schedule/schedule.html'
    });
	/* Add New Routes Above */
  
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/schedule");

});

angular.module('webaspietools').run(function ($rootScope) {
  'use strict';

  $rootScope.safeApply = function (fn) {
    var phase = $rootScope.$$phase;
    if (phase === '$apply' || phase === '$digest') {
      if (fn && (typeof(fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };

});