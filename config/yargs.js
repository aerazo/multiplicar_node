const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en clg', opts)
    .command('crear', 'crear archivo tabla', opts)
    .help()
    .argv;

module.exports = { argv };