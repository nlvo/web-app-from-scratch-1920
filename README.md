# Web app Marvel Characters
![screely-1581666599995](https://user-images.githubusercontent.com/8554238/74512208-0cb8ed00-4f08-11ea-8774-58dd3b033cb7.png)
[live demo link](https://nlvo.github.io/web-app-from-scratch-1920/)

## Description
The concept of this application is a Marvel based application where you can get an overview with the latest comic release, series and/or events.

## Installation
1. Clone or download the repository
`$ git clone https://nlvo.github.io/web-app-from-scratch-1920/`
1. Open
`index.html` in your browser

## API
The Marvel Comics API’s base endpoint is `http(s)://gateway.marvel.com/`.

To use the Marvel API you'll need a few things:

* API key
* ts (a timestamp)
* hash

### Parameters
* `/v1/public/characters`
* `/v1/public/comics`
* `/v1/public/series`

### Results structure
```
{
  "code": 200,
  "status": "Ok",
  "etag": "f0fbae65eb2f8f28bdeea0a29be8749a4e67acb3",
  "data": {
    "offset": 0,
    "limit": 20,
    "total": 30920,
    "count": 20,
    "results": [{array of objects}}]
  }
}
```
More about the [api results](https://developer.marvel.com/documentation/apiresults) in the Marvel API documentation.

### Rate Limit
3000 calls per day

For more information you can refer to the [Marvel API documentation](https://developer.marvel.com/documentation/).

## Aplication
### Actor Diagram
![Actor Diagram](https://user-images.githubusercontent.com/8554238/75497364-50a9f880-59c4-11ea-898d-418ca7a1e3d4.png)

### Interaction Diagram
![Interaction Diagram](https://user-images.githubusercontent.com/8554238/75497368-51db2580-59c4-11ea-9045-02d7c1f69e1a.png)

## ToDo
Things/features I would like to create can be found in with a label __feature__
[project](https://github.com/nlvo/web-app-from-scratch-1920/projects/1)

### License
Copyright © 2020, [Lien Vo](https://github.com/nlvo) . Released under the [MIT license](https://github.com/nlvo/web-app-from-scratch-1920/blob/master/LICENSE). Data provided by Marvel. © 2020 Marvel.

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
