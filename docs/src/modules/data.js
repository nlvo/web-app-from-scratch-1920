
function clean (oldData) {
    // console.log(oldData);

    let newData = oldData.data.results;

    return newData = newData.map((data) => {
        let creators = data.creators.items.reduce((creators,creator) => creators.concat(creator.name),[]);
        let characters = data.characters.items.reduce((acc, data) => acc.concat(data.name),[]);
        // console.log(characters)
        // let stories = data.stories.items.reduce((stories,story) => stories.concat(story),[]);
        return {
            id : data.id,
            name: data.name || data.title,
            thumbnail: data.thumbnail,
            creatorsName: creators,
            charactersName: characters
            // storiesThumbnail: stories.thumbnail
        }
    });

    // https://stackoverflow.com/questions/48435515/how-to-flatten-nested-array-of-object-using-es6
    // https://stackoverflow.com/questions/54733622/i-need-remove-unnecessary-json-objects-form-my-result-json-file-using-javascript
}

export { clean };