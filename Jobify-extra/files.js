const { readFile, writeFile } = require('./fs-promise');

/*
readFile('index.js')
    .then( data => writeFile('copia-promise.js', data))
    .then( () => console.log('arquivo copiado'))
    .catch(err => console.log(err))
*/

// async/await

const copyFile = async () => {
    console.log('Olá async/await');
        try {
            const data = await readFile('index.js');
            await writeFile('copy-async-await.js', data);
            //console.log(String(data));
            console.log('arquivo lido e escrito');
        } catch (err) {
            console.log('Error', err)
    }
}

copyFile().then( () => console.log('Fim do async/await'));
