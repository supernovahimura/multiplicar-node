const fs = require('fs');
let data = ''
const colors = require('colors');

// let listarArchivo = (base, limite) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(`tablas/tabla-${base}.txt`, 'utf8', (err, data) => {
//             if (err) reject(err);
//             else
//                 resolve(data)
//             data = data.split('\n');
//             data.length = limite;
//             console.log(data);

//         });
//     })
// }

let listarArchivo = (base, limite) => {
    console.log("===========================".red);
    console.log(`=====  Tabla del ${ base } =====`.red);
    console.log("===========================".red);
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i}`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido -- ${ base } -- no es un número`)
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += (`${ base } * ${ i } = ${ base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${ base }`);
            console.log(`El archivo tabla-${ base }-al-${limite}.txt ha sido creado`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarArchivo
}