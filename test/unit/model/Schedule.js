describe('Schedule', function () {

  var schedule, Schedule, ScheduleItem;

  beforeEach(function () {
    module('webaspietools');
    inject(function (_Schedule_, _ScheduleItem_) {
      Schedule = _Schedule_;
      ScheduleItem = _ScheduleItem_;
      schedule = new Schedule();
    });
  });

  it('contains a list of items', function () {
    expect(schedule.items).to.be.instanceof(Array);
  });

  describe('#add', function () {
    it('adds an item to the items array', function () {
      var item = new ScheduleItem();
      schedule.add(item);
      expect(schedule.items).to.have.length(1);
    });
  });

});