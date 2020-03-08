
function clean (oldData) {
    // console.log(oldData);

    let newData = oldData.data.results;
    
    return newData = newData.map((data) => {
        const creators = data.creators ? reduce(data.creators.items) : '';
        const thumbnail = data.thumbnail.path.includes('image_not_available') ? 'img/not-found' : data.thumbnail.path;
        // if (newData.thumbnail.path == 'image_not_available')
        console.log(thumbnail)
        // window.location.pathname
        return {
            id : data.id,
            name: data.name || data.title,
            thumbnail: thumbnail + '.' + data.thumbnail.extension,
            comicsAvailabe: data.comics ? data.comics.available : data.description,
            creators: creators,
            // characters: characters,
            // stories: stories
        }
    });

    // https://stackoverflow.com/questions/48435515/how-to-flatten-nested-array-of-object-using-es6
    // https://stackoverflow.com/questions/54733622/i-need-remove-unnecessary-json-objects-form-my-result-json-file-using-javascript
}

function reduce (data) {
    const newData = data.reduce((creators,creator) => creators.concat(creator.name),[])
    return newData;
}

export { clean };