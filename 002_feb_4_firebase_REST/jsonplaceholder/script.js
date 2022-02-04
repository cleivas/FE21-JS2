const url = 'https://jsonplaceholder.typicode.com/posts';

const post = {
    title: 'repost',
    body: 'lorem',
    userId: 33
}

const headerObject = {
    'Content-type': 'application/json; charset=UTF-8'
}

//Lägger till en post
fetch(url, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: headerObject
})
    .then(r=>r.json())
    .then(d=>console.log('POST', d));

//Ta bort post nummer 12
const urlDelete = 'https://jsonplaceholder.typicode.com/posts/12'
fetch(urlDelete, {
    method: 'DELETE',
})
    .then(r=>r.json())
    .then(d=>console.log('DELETE', d));

//Ersätt en post med en ny
const urlPut = 'https://jsonplaceholder.typicode.com/posts/24'

fetch(urlPut, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: headerObject
})
    .then(r=>r.json())
    .then(d=>console.log('PUT', d));

//Listar alla posts
fetch(url)
    .then(r=>r.json())
    .then(d=>console.log('List all', d));