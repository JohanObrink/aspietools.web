describe('schedule', function () {

  var schedule, ScheduleItem;

  beforeEach(function () {
    module('webaspietools');
    inject(function (_schedule_, _ScheduleItem_) {
      schedule = _schedule_;
      ScheduleItem = _ScheduleItem_;
    });
  });

  it('returns a list of items', function () {
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