const texto = '0 1 10 192 199 201 249 255 256 312 1010 1512'

// números entre 0 e 255
console.log(texto.match(/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g))        // (\d{1,2}) 0 à 99 - dois digitos... 1\d{2} - 100 à 199... 2[0-4]\d - 200 à 244...

// [
//     '0',   '1',
//     '10',  '192',
//     '199', '201',
//     '249', '255'
//   ]