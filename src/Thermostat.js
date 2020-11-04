class Thermostat {

  constructor() {
    this.minimumTemp = 10;
    this.temperature = 20;
    this.isSavingMode = true;
    this.maximumTemp = 25;
  }

  up() {
    if(this.temperature >= this.maximumTemp) {
      throw new Error("Maximum temperature reached!");
    }
    return this.temperature += 1;
  }

  down() {
    if(this.temperature <= this.minimumTemp) {
      throw new Error('Minimum temperature reached!');
    }
    return this.temperature -= 1;
  }

  powerSavingModeOn() {
    this.isSavingMode = true;
    this.maximumTemp = 25;
  }

  powerSavingModeOff() {
    this.isSavingMode = false;
    this.maximumTemp = 32;
  }
}
