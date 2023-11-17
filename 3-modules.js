//common js,every file is a  module(by default)
//modules- encapsulated code(only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
require('./7-mind-grenade')

sayHi("Susan");
sayHi(names.fred);
sayHi(names.john);