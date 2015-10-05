var assert = chai.assert;


describe('API integration', function(){
  var server, setupStub, JSONresponse;

  before(function () { server = sinon.fakeServer.create(); });
  
  it('todo.setup receives an array of todos when todo.init is called', function () {
    var callback = sinon.spy(todo.application);
    todo.init();
    // getTodos(42, callback);

    // This is part of the FakeXMLHttpRequest API
    // server.requests[0].respond(
    //     200,
    //     { "Content-Type": "application/json" },
    //     JSON.stringify([{ id: 1, text: "Provide examples", done: true }])
    // );
    server.respondWith('GET','/todos',
                        [200, {'Content-Type':'application/json'},
                         '{"todos": [{"name": "Client-side unit tests", "done": true }, {"name": "End-to-end workflow tests", "done": true }, {"name": "Visual tests", "done": true }, {"name": "Continous integration", "done": true }, {"name": "Code coverage reporting", "done": true }, {"name": "Server-side unit tests", "done": false }, {"name": "Client-server integration tests", "done": false } ] }'
                        ]);

    // console.log(todo.setup());
    assert(callback.calledOnce);
    // assert.typeof(todo.setup(),'array');
    // assert(callback.calledOnce);
  });

  after(function () { server.restore(); });
});



