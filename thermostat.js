class Thermostat {
  #minTemperature;
  #maxTemperature;
  constructor() {
    this.temperature = 20
    this.powerSave = true
    this.#minTemperature = 10
  }

  getTemperature() {
    return this.temperature
  }

  up() {
    if (this.temperature < this.#privateMaxTemperature()) {
      this.temperature += 1
    } else
    this.temperature
  }

  down() {
    if (this.temperature > this.#minTemperature) {
      this.temperature -= 1
    } else {
      this.temperature
    }

  }

  setPowerSavingMode(set) {
    if (set === true) {
      this.powerSave = true
    } else {
      this.powerSave = false
    }
  }

  reset() {
    this.temperature = 20
  }

  getCurrentEnergyUsage() {
    if (this.temperature < 18) {
      return 'Low'
    } else if (this.temperature > 18 && this.temperature <= 25) {
      return 'Medium' 
    } else {
      return 'High'
    }
  }

  #privateMaxTemperature() {
    if (this.powerSave === true) {
      return this.#maxTemperature = 25
    } else {
      return this.#maxTemperature = 32
    }
  }
}

module.exports = Thermostat;