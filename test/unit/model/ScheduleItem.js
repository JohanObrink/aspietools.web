describe('ScheduleItem', function () {

  var ScheduleItem;

  beforeEach(function () {
    module('webaspietools');
    inject(function (_ScheduleItem_) {
      ScheduleItem = _ScheduleItem_;
    });
  });

  it('can be instantiated', function () {
    expect(new ScheduleItem()).to.be.instanceof(ScheduleItem);
  });

  it('sets name from options when string', function () {
    var item = new ScheduleItem('foo');
    expect(item.name).to.equal('foo');
  });

  it('sets properties from options', function () {
    var item = new ScheduleItem({ name: 'foo', days: [0, 2] });
    expect(item.name).to.equal('foo');
    expect(item.days).to.eql([0, 2]);
  });

});