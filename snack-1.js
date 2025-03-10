// 🏆 Snack 1
// Ottieni il titolo di un post con una Promise.

// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
// 🎯 Bonus: Ottieni l'intero post con l'autore
// Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.





function getPostTitle(id) {
    const promisse = new Promise((resolve, reject) => {

        console.log('Sto esseguendo la chiamata...');

        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))

    });

    return promisse
}


getPostTitle(1)
    .then(data => console.log(data.title))
    .catch(error => console.log(error))


//BONUS 

function getPost(id) {
    return fetch(`https://dummyjson.com/posts/${id}`)
        .then(response => response.json())
        .then(post => {
            return fetch(`https://dummyjson.com/users/${post.userId}`)
                .then(response => response.json())
                .then(user => {
                    post.user = user; 
                    return post;
                });
        });
}


getPost(1)
.then(console.log)
.catch(console.error);


    