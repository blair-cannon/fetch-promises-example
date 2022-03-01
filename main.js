const toDos = 'https://jsonplaceholder.typicode.com/todos' // make sure the url is in quotes
const users = 'https://jsonplaceholder.typicode.com/users'
const page = document.querySelector('#page'); // id in html
const p1 = document.createElement('p');
const p2 = document.createElement('p');

function setup() {

    fetch(toDos) // sending request to fetch toDos
        .then(response => {
            return response.json(); // once you get the response, turn response into json format so that you can manipulate
        }) 
        .then(json => {
            p1.innerHTML = json[0].title; // then take the json and put the [0] title into p1
            page.appendChild(p1); // since p1 isn't in html, appendChild brings it to the UI
            return fetch(users); // sending another request to fetch users
        })
        .then(response => {
            return response.json(); // once you get the second response, turn it into json format
        })
        .then(json => {
            p2.innerHTML = json[0].name; // once in json format, pull the name from the [0] in the json array
            page.appendChild(p2); // since p2 was created in js, append it to the UI
        })
        .catch(err => console.log(err)); // if there is error
}
setup(); // HAVE to call the function
