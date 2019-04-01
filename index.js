var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest()

// request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto/', true)
// request.onload = function() {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.responseText)

//   if (request.status >= 200 && request.status < 400) {
//       console.log(data.weight)
//   } else {
//     console.log('error')
//     hook.res.json({"fulfillmentText": data.weight});
//   }
// }

module['exports'] = function helloWorld (hook) {
  // var content = hook.req.body.queryResult.parameters['content'];
  hook.res.json({"fulfillmentText": "asd"});
  hook.res.end();
};

// request.send()