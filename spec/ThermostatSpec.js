describe('Thermostat',function () {
  var thermostat;
  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it('starts with 20 degrees', function () {

    expect(thermostat.temperature).toEqual(20)
  });

  it('starts with minimum temperature of 10 degrees', function() {

    expect(thermostat.minimumTemp).toEqual(10)
  });

  it('starts with power saving mode on', function() {
    expect(thermostat.maximumTemp).toEqual(25);
    expect(thermostat.isSavingMode).toEqual(true);
  });

  describe('#up',function () {

    it('increases the temperature by one each time', function () {
      // thermostat.up();

      expect(thermostat.up()).toEqual(21)
    });

    it('cannot go above maximum temerature(25 or 32)',function () {

      thermostat.temperature = thermostat.maximumTemp;

      expect(function() { thermostat.up() }).toThrowError("Maximum temperature reached!")
    });
  });

  describe('#down',function () {

    it('decreases the temperature by one each time', function () {
      // thermostat.up();

      expect(thermostat.down()).toEqual(19)
    });

    it('cannot decrease below 10 degrees', function() {
      thermostat.temperature = 10;
      expect(function() { thermostat.down() }).toThrowError("Minimum temperature reached!")
    });
  });

  describe('#powerSavingModeOn', function() {

    it('sets savingMode to true and max temp to 25', function() {
      thermostat.powerSavingModeOn();
      expect(thermostat.isSavingMode).toEqual(true);
      expect(thermostat.maximumTemp).toEqual(25);
    });

  });

  describe('#powerSavingModeOff', function() {

    it('sets savingMode to false and max temp to 32', function() {
      thermostat.powerSavingModeOff();
      expect(thermostat.isSavingMode).toEqual(false);
      expect(thermostat.maximumTemp).toEqual(32);
    });

  });

});
