var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest()

module['exports'] = function whatthefuck (hook) {  //Funktionsname ändern wenn komischer Fehler auftritt
  var intent = hook.req.body.queryResult.intent['displayName'];
  var content = hook.req.body.queryResult.parameters['pokemon'];
  request.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+content+'/', true)

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(this.responseText)
          switch(intent){
            case "Abilities": hook.res.json({"fulfillmentText": data.abilities[0].ability.name}); break;
            case "Height": hook.res.json({"fulfillmentText": data.height}); break;
            default: hook.res.json({"fulfillmentText": "No Intent parsed"}); break;
          }
        } else {
          // hook.res.json({"fulfillmentText": "There is no Pokemon with the name "+content+". Check your damn Pokedex!"});
          hook.res.json({"fulfillmentText": "There is no Pokemon with the name"});
    }
    hook.res.end();
  }
  request.send()
}