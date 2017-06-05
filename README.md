# instalike-me
NodeJS module for http://instalike.me API

## Install
```
npm install instalike-me
```

## Usage
```js
const InstaLikeMe = require('instalike-me');
const instalikeme = new InstaLikeMe('YOUR-API-KEY');

instalikeme.api('ping', {}, function (error, response) {
  
  if (error) {
    return console.error(error);
  }
  
  console.log(response);
  
});
```
