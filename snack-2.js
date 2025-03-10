// 🏆 Snack 2
// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.


function lanciaDado() {

    const risultatoLancio = new Promise((resolve, reject) => {
        setTimeout(() => {
            const numeroCasuale = Math.floor(Math.random() * 6) + 1;
            if (numeroCasuale === 1) {
                return reject('Il dado si è incastrato')
            } else {
                return resolve(numeroCasuale)
            }
        }, 3000)
    })

    return risultatoLancio
}