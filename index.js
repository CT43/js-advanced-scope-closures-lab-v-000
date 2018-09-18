function produceDrivingRange(range) {
  return function (x, y) {
    debugger
    if ((parseFloat(y) - parseFloat(x)) < range) {
      return `within range by ${range - (parseFloat(y) - parseFloat(x))}`
    } else {
      return `${(parseFloat(y) - parseFloat(x)) - range} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function (fare) {
    return fare * percentage
  }
}

function createDriver () {
  let driverId = 0

  return class {
    constructor(name) {
      this.name =name
      this.id = ++driverId
    }
  }
}
