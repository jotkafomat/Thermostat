$(document).ready(function() {
var thermostat = new Thermostat();
updateTemperature();

$('#up').click(function () {
  thermostat.up();
  updateTemperature();
});

$('#down').click(function () {
  thermostat.down();
  updateTemperature();
});

$('#reset').click(function () {
  thermostat.resetTemperature();
  updateTemperature();
});

$('#pwsON').click(function () {
  thermostat.switchPowerSavingModeOn();
  $('#power-saving-status').text('on');
  updateTemperature();
});

$('#pwsOff').click(function () {
  thermostat.switchPowerSavingModeOff();
  $('#power-saving-status').text('off');
  updateTemperature();
});

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature);
  };
});


// $('element').on('event', function() {
//
// })
