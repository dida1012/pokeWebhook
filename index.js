var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest()

module['exports'] = function helloWorld (hook) {
  request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto/', true)
  request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.responseText)

    if (request.status >= 200 && request.status < 400) {
          hook.res.json({"fulfillmentText": data.weight});
          hook.res.end();
    } else {
      console.log('error')
      hook.res.json({"fulfillmentText": data.weight});
    }
  }
  request.send()
}

// module['exports'] = function helloWorld (hook) {
//   // var content = hook.req.body.queryResult.parameters['content'];
//   hook.res.json({"fulfillmentText": "asd"});
//   hook.res.end();
// };

