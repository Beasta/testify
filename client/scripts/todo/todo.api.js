/* globals todo, XMLHttpRequest */
todo.api = {
  sendRequest: function(options, callback){
    // create a new Ajax request
    console.log('calling sendRequest');

    var request = new XMLHttpRequest();
    request.open(options.method, options.endpoint, true);
    console.log('this is after request.open in sendRequest');
    request.onload = function() {
      console.log('calling request.onload');
      if (request.status >= 200 && request.status < 400){
        // Success!
        var data = JSON.parse(request.responseText);
        callback(null, data);
      } else {
        // We reached our target server, but it returned an error
        callback(request.responseText, null);
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
      callback(new Error("sendRequest: Error requesting with options: " + options), null);
    };

    request.send();
  }
};

