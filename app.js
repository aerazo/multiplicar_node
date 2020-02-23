const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require("./config/yargs").argv;

let comando = argv._[0];


switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('command not found');

}
// console.log(process.argv);

// let argv = process.argv;
// let param = argv[2];
// let base = param.split('=')[1];