var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function(){


  });
});

describe('the todo.util methods', function() {
  it('should have all the necessary methods', function(){
      should.exist(todo.util.trimTodoName);
      expect(todo.util.isValidTodoName).to.exist;
      expect(todo.util.getUniqueId).to.exist;
      expect(todo.util).to.have.property('getUniqueId');
      expect(todo.util).to.have.property('isValidTodoName');
      expect(todo.util).to.have.property('getUniqueId');
    });

    it('should be able to trim a todo name', function(){
      assert.typeOf(todo.util.trimTodoName,'function');
      expect(todo.util.trimTodoName('  two')).to.have.length(3);
       assert.equal(todo.util.trimTodoName('   '),'','trims spaces');
    });

    it('should be able to check for valid todo names', function(){
      expect(todo.util.isValidTodoName('a')).to.not.equal(true);
      expect(todo.util.isValidTodoName('   ')).to.not.equal(true);
      expect(todo.util.isValidTodoName('bat')).to.equal(true);
    });

    it('should be able to increment a user id',function(){
      var currentID = todo.util.getLastId();
      expect(todo.util.getUniqueId()).to.equal(++currentID);
    });

});
