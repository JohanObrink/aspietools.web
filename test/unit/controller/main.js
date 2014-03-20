describe('MainCtrl', function () {

  var scope, ctrl;

  beforeEach(function () {
    module('webaspietools');
    inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('MainCtrl', {$scope: scope});
    });
  });

  xit('should have tests', function () {
    
  });

});