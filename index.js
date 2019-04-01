var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest()

module['exports'] = function whatthefuck (hook) {  //Funktionsname ändern wenn komischer Fehler auftritt
  var intent = hook.req.body.queryResult.intent['displayName'];
  var pokemon = hook.req.body.queryResult.parameters['pokemon'];
  request.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+pokemon+'/', true)

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(this.responseText)
      var output = '';
          switch(intent){
            case "Abilities": output = pokemon+" has the Ability '"+data.abilities[0].ability.name+"'."; break;
            case "Height": output = pokemon+" is "+data.height+" meters tall."; break;
            default: output = "No Intent parsed"; break;
          }
        } else {
          output = "There is no Pokemon with the name "+pokemon+". Check your damn Pokedex!";
    }
    hook.res.json({"fulfillmentText": output});
    hook.res.end();
  }
  request.send()
}