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
    .command('listar', 'Imprime en consola la tabla de muiltiplicar', opts)
    .command('crear', 'Crea tabla de muiltiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}