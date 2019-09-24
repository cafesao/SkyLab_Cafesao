const delay = () => new Promise(resolve => {
    setTimeout(() => { resolve('OK') }, 1000)
})

async function umPorSegundo(){
    console.log(await delay())
    console.log(await delay())
    console.log(await delay())
}

umPorSegundo()

// Funcão delay aciona o .then após 1s
/*
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

function umPorSegundo() {
    delay().then(() => {
    console.log('1s');
        delay().then(() => {
        console.log('2s');
            delay().then(() => {
            console.log('3s');
            });
        })
    });
}

umPorSegundo();
*/