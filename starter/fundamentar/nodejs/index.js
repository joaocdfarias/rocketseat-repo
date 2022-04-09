const getFlagValue = require('./flags')
console.log(`Olá ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)
