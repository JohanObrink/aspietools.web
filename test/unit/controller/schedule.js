describe('ScheduleCtrl', function () {

  var scope, ctrl;

  beforeEach(function () {
    module('webaspietools');
    inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('ScheduleCtrl', {$scope: scope});
    });
  });

  xit('should have tests', function () {
    
  });

});