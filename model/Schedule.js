angular.module('webaspietools').factory('Schedule', function () {
  'use strict';

  function Schedule() {
    this.items = [];
  }

  Schedule.prototype.add = function(item) {
    this.items.push(item);
  };

  return Schedule;
});