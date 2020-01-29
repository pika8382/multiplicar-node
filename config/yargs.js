const options = {
    base: {
        require: true,
        alias: "b"
    },
    limite: {
        defailt: 10,
        alias: "l"
    }
}

const argv = require("yargs")
    .command("listar", "Descripcion y ayuda del listar", options)
    .help()
    .argv;

module.exports = {
    argv
}