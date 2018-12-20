function produceDrivingRange(blockRange) {
  return function isWithinRange(start, stop) {
    let startBlock = parseInt(start);
    let stopBlock = parseInt(stop);
    const distance = Math.abs(startBlock - stopBlock);
    const diff = Math.abs(distance - blockRange);
    return distance <= blockRange
      ? `within range by ${blockRange - distance}`
      : `${diff} blocks out of range`;
  };
}

function produceTipCalculator(percent) {
  return function theTipIs(total) {
    return percent * total;
  };
}

function createDriver() {
  let driverId = 1;
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  };
}
