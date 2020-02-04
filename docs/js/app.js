const title = document.querySelector('ul');
const thumbnail = document.querySelector('img');

fetch('https://cors-anywhere.herokuapp.com/http://api.tvmaze.com/schedule?country=KR')
    .then((response) => {
        return response.json();
    })
    //anonymouse function with data parameter
    .then((data) => {
        console.log(data);
        for(let i = 0; i < data.length; i++){
            title.innerHTML += `<li> ${data[i].show.name} </li>`; //template literals
        }
    });