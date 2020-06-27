const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar')
const { argv } = require('./config/yargs')
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        // listarArchivo(argv.base, argv.limite)
        //     .then(resp => console.log(`Tabla base ${ argv.base } completa`))
        //     .catch(e => console.log(e))
        listarArchivo(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            // .then(archivo => console.log(`Archivo creado:  ${archivo}`))
            .then(archivo => console.log("Archivo creado", archivo.red))
            .catch(e => console.log(e));
        break;

    default:
        console.log("Commando no reconocido");
}

// let base = 'abc'
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]

//let argv2 = process.argv;
// console.log('Limite', argv.limite);
//console.log(argv2);


// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado:  ${archivo}`))
//     .catch(e => console.log(e));