
const clean = (oldData) => {
    var newData = oldData.data.results;
    newData = newData.map((data) => {
        return {
            id : data.id,
            name: data.name || data.title,
            thumbnail: data.thumbnail
        }
    });
    return newData;
    // https://stackoverflow.com/questions/54733622/i-need-remove-unnecessary-json-objects-form-my-result-json-file-using-javascript
}

export { clean };