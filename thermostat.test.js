const Thermostat = require('./thermostat');

describe('Thermostat Class', () => {
  beforeEach(() => {
    // Before each test, 
    // create a new thermostat instance of the class
    thermostat = new Thermostat();
  });

  it('gets the initial temperature of the thermostat', () => {
  expect(thermostat.getTemperature()).toEqual(20);
  });

  it('increases the temp by 1', () => {
    thermostat.up()
    expect(thermostat.getTemperature()).toEqual(21);
    });

  it('decreases the temp by 1', () => {
    thermostat.down()
    expect(thermostat.getTemperature()).toEqual(19);
    });

  it('increases the temp by 2', () => {
    thermostat.up()
    thermostat.up()
    expect(thermostat.getTemperature()).toEqual(22);
    });  
  
  it('increases temp to the maximum and not beyond', () => {
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(25);
  });

  it('powersave off and temperature can increase beyond 25 upto 32', () => {
    for (let i = 0 ; i < 10 ; i ++) {
      thermostat.up();
    }
    thermostat.setPowerSavingMode(false);
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(26)
  });

  it('powersave off and temperature can increase upto 32 and not beyond', () => {
    thermostat.setPowerSavingMode(false);
    for (let i = 0 ; i < 15 ; i ++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(32)
  });

  it('reset to starting temp', () => {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(22)
    thermostat.reset()
    expect(thermostat.getTemperature()).toEqual(20)
  });

  it('decreases temp to the minimum and not beyond', () => {
    for (let i = 0 ; i < 15 ; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toEqual(10);
  });

  it('checks increase and decrease', () => {
    thermostat.up()
    thermostat.up()
    expect(thermostat.getTemperature()).toEqual(22);
    thermostat.down()
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it('returns the current energy usage as medium', () => {
    expect(thermostat.getCurrentEnergyUsage()).toEqual('Medium');
  });

  it('returns the current energy usage as low', () => {
    for (let i = 0 ; i < 5 ; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentEnergyUsage()).toEqual('Low');
  });

  it('returns the current energy usage as High just above threshold 26', () => {
    thermostat.setPowerSavingMode(false)
    for (let i = 0 ; i < 6 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(26);
    expect(thermostat.getCurrentEnergyUsage()).toEqual('High');
  });

  it('returns the current energy usage as Medium at threshold 25', () => {
    thermostat.setPowerSavingMode(false)
    for (let i = 0 ; i < 5 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(25);
    expect(thermostat.getCurrentEnergyUsage()).toEqual('Medium');
  });
});