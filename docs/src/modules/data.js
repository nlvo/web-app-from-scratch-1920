
function clean (oldData) {
    console.log(oldData);

    let newData = oldData.data.results;
    
    return newData = newData.map((data) => {
        // https://stackoverflow.com/questions/54513877/javascript-merge-multiple-object-values-into-array
        const creators = data.creators ? data.creators.items.map(creators => creators.name) : '';
        const thumbnail = data.thumbnail.path.includes('image_not_available') ? 'img/not-found' : data.thumbnail.path;
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

export { clean };