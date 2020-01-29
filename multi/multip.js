const fs = require('fs');


let multiplicar = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`No es numero`);
        }
        let data = "";
        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tabla del ${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else resolve(console.log('Archivo Guardado!!'));
        });

    });
}

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        /*   if (!Number(base) || !Number(limite)) {
              reject(`alguno no es numero`);
              return;
          } */
        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tabla del ${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else resolve(console.log(`Archivo de tabla del ${base} con limite ${limite}  Guardado!!`));
        });

    });
}

module.exports = {
    multiplicar,
    listarTabla
}