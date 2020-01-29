const { multiplicar } = require("./multi/multip");
const { listarTabla } = require("./multi/multip");
const argv = require("./config/yargs").argv;

/* console.log("argv.base =" + argv.base);
console.log("argv.limite =" + argv.limite);
 */

listarTabla(argv.base, argv.limite)
    .then(tabla => console.log(tabla))
    .catch(err => console.log(err));




/* 
let comando = argv._[0];
switch (comando) {
    case "listar":
        console.log("LISTAR");
        break;
    case "crear":
        console.log("CREAR");
        multiplicar(argv.base)
            .then(result => console.log(`Archivo creado`))
            .catch(e => console.log(e));
        break;
} */