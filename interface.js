$(document).ready(function() {
var thermostat = new Thermostat();
updateTemperature();
$('#power-saving-status').text('on');

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
    if(thermostat.energyUsage() === 'low-usage'){
      $('#temperature').css('color', 'green')
    } else if (thermostat.energyUsage() === 'medium-usage') {
      $('#temperature').css('color', 'black')
    } else {
      $('#temperature').css('color', 'red')
    }
  };
});
