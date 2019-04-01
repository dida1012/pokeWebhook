var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest()

module['exports'] = function helloWorld (hook) {
  var content = hook.req.body.queryResult.parameters['content'];
  request.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+content+'/', true)
  request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.responseText)

    if (request.status >= 200 && request.status < 400) {
          hook.res.json({"fulfillmentText": data.abilities[0].ability.name});
          hook.res.end();
    } else {
      console.log('error')
      hook.res.json({"fulfillmentText": data.weight});
    }
  }
  request.send()
}