// 🏆 Snack 2
// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.


function lanciaDado() {

    const risultatoLancio = new Promise((resolve, reject) => {
        setTimeout(() => {
            const numeroCasuale = Math.floor(Math.random() * 6) + 1;
            if (numeroCasuale === 1) {
                reject('Il dado si è incastrato')
            } else {
                resolve(numeroCasuale)
            }
        }, 3000)
    })

    return risultatoLancio
}

lanciaDado()
    .then(result => console.log('resultado:', result))
    .catch(error => console.log('error:', error))

// 🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
// Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!".


function creaLanciaDado() {

    let ultimoLancio = 1;

    function lanciaDado() {

        const risultatoLancio = new Promise((resolve, reject) => {
            setTimeout(() => {
                const numeroCasuale = Math.floor(Math.random() * 6) + 1;


                 if (numeroCasuale === ultimoLancio) {
                    console.log('Incredibile!')

                } else {
                    ultimoLancio = numeroCasuale
                    resolve(numeroCasuale)
                }
            }, 3000)
        })

        return risultatoLancio
    }

    return lanciaDado()
}

creaLanciaDado()
.then(result => console.log('resultado', result))
.catch(error => console.log('error', error))