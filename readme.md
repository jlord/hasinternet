# hasInternet

Node.js module for checking if user is connected to the internet. 

**To Use**

Call the function `hasInternet` and give it a callback function, which takes in an error and a boolean for the true/false that will return for the internet's status. IS THERE INTERNET!?!

```javascript
var hasInternet = require('hasinternet')

hasInternet(answer)

function answer(err, internet) {
  // there is either an error and false for internet
  // or false for error and true for internet
	// do what you need to do with that info!
  console.log(err, internet)
}
```