const colors = require('colors')

class Dog {
  constructor() {}
  woof() {
    console.log('Woof!'.red)
  }
}

module.exports = Dog