angular.module('webaspietools').factory('ScheduleItem', function () {
  'use strict';

  function ScheduleItem(options) {
    options = ('string' === typeof options) ? { name: options } : options || {};

    this.name = options.name || '';
    this.days = options.days || [];
    this.startTime = options.startTime || 0;
    this.endTime = options.endTime || 0;
  }

  // ScheduleItem.prototype.myInstanceMethod = function() {
  //    
  // }

  return ScheduleItem;
});