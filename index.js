var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest()

module['exports'] = function helloWorld (hook) {
  var intent = hook.req.body.queryResult.intent['displayName'];
  var content = hook.req.body.queryResult.parameters['pokemon'];
  request.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+content+'/', true)

  request.onload = function() {
    var data = JSON.parse(this.responseText)
    if (request.status >= 200 && request.status < 400) {
          switch(intent){
            case "Abilities": hook.res.json({"fulfillmentText": data.abilities[0].ability.name}); break;
            case "Height": hook.res.json({"fulfillmentText": data.height}); break;
          }
          hook.res.end();
        } else {
      console.log('error')
    }
  }
  request.send()
}