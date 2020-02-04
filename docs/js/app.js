// const title = document.querySelector('ul');

fetch('https://cors-anywhere.herokuapp.com/http://api.tvmaze.com/schedule?country=KR')
    .then(response => {
        return response.json();
    })
    //function with data parameter
    .then(jsonData => {
        console.log(jsonData);
        for (let i = 0; i < jsonData.length; i++) {
            const section = document.querySelector('section');
            const article = document.createElement('article');
            const heading = document.createElement('h2');
            const description = document.createElement('p');
            const articleImage = document.createElement('img');

            heading.textContent = `${jsonData[i].show.name}`; //template literals
            description.textContent = `${jsonData[i].name}`;
            articleImage.src = `${jsonData[i].show.image.medium}`;
            
            article.appendChild(articleImage);
            article.appendChild(heading);
            article.appendChild(description);
            section.appendChild(article);
            // title.innerHTML += `<li> ${jsonData[i].show.name} </li>`; //template literals
        }
    });