var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
chai.should();

var Node = require('../index.js').Node;

describe('Node', function(){

    var toto = new Node();

    it('has a constructor', function(){
        expect(toto.constructor).to.eql(Node);
    });

    it('has a value', function(){
        expect(nodeA.value).to.eql(5);
        expect(nodeB.value).to.eql(12)
    });

    it("has a name", function(){
        expect(nodeA.name).to.eql('a');
        expect(nodeB.name).to.eql('b')
    });

    it("expect value to be a number", function(){
        expect(nodeA.value).to.be.a('number');
    });

    it("expect name to be a string", function(){
        expect(nodeA.name).to.be.a('string');
    });

    describe('Tree', function() {
        it("tree has two parameters = tree, node", function(){
            expect(toto.tree).to.eql(toto.tree, toto.node)
        });
    });

    describe('Print Tree', function() {
        it("expect current node to equal root", function(){
            expect(toto.currNode).to.eql(toto.root);
        });
    });







    /* describe('get node', function(){

         it('gets a node from the node memory, by value', function(){
             expect(toto.getNode(nodeA.value)).to.eql(nodeA);
             expect(toto.getNode(12)).to.eql(nodeB);
             expect(toto.getNode(250)).to.eql(undefined)
         })

     })*/

});



/*var Node = require('../src/bst.js');

  name = true;
  value = true;

  describe("Node", function(right,left){
    Node = true;
    this.right = right;
    this.left = left;

    it("is a Node object", function(){
      //expect(left.constructor.name).to.eql('Node');
      expect(name).to.be.a(true);
      expect(left).to.eql('left');
    });

 });

it('has a name', function(){
 expect(nodeA.data.name).to.eql('A')
 });

 it('has a value', function(){
 expect(nodeA.id).to.eql(1);
 expect(nodeB.id).to.eql(2)
 });*/

  /*describe('insert', function(){

    before(function(){
      graph.insert(nodeA);
      graph.insert(nodeB);
    })

    it('adds the node to the graph memory', function(){
      expect(graph.memory[nodeA.id].node).to.eql(nodeA);
      expect(graph.memory[nodeB.id].node).to.eql(nodeB);
    })

    describe("when the memory already has a node with this id", function(){

      it('does not record the new node', function(){
        var nodeWanaby = {id: nodeA.id, name: "C"}
        graph.insert(nodeWanaby);

        expect(graph.memory[nodeA.id].node).to.eql(nodeA);
      })

    })

  })

  describe('get node', function(){

    it('gets a node from the graph memory, by id', function(){
      expect(graph.getNode(nodeA.id)).to.eql(nodeA)
      expect(graph.getNode(2)).to.eql(nodeB)
      expect(graph.getNode(25)).to.eql(undefined)
    })

  })

  describe('edges', function(){

    before(function(){
      graph.edge(nodeA, nodeB);
    })

    it('adds an edge to the graph from nodeA', function(){
      var edges = graph.memory[nodeA.id].edges;

      expect(edges).to.have.length(1)
      expect(edges[0]).to.eql({from: nodeA, to: nodeB})
    })

    it('adds an edge to the graph from nodeB', function(){
      var edges = graph.memory[nodeB.id].edges;

      expect(edges).to.have.length(1)
      expect(edges[0]).to.eql({from: nodeB, to: nodeA})
    })

  })

  describe('getting the edges that leave a node', function(){

    it('returns the linked nodes', function(){
      expect(nodeA.getLinkedNodes()).to.eql([ nodeB ])
      expect(nodeB.getLinkedNodes()).to.eql([ nodeA ])

    })

  })

})



/* describe('insert', function(){

   before(function(){
     graph.insert(nodeA);
     graph.insert(nodeB);
   })

   it('adds the node to the graph memory', function(){
     expect(graph.memory[nodeA.id].node).to.eql(nodeA);
     expect(graph.memory[nodeB.id].node).to.eql(nodeB);
   })

   describe("when the memory already has a node with this id", function(){

     it('does not record the new node', function(){
       var nodeWanaby = {id: nodeA.id, name: "C"}
       graph.insert(nodeWanaby);

       expect(graph.memory[nodeA.id].node).to.eql(nodeA);
     })

   })

 })

 describe('get node', function(){

   it('gets a node from the graph memory, by id', function(){
     expect(graph.getNode(nodeA.id)).to.eql(nodeA)
     expect(graph.getNode(2)).to.eql(nodeB)
     expect(graph.getNode(25)).to.eql(undefined)
   })

 })

 describe('edges', function(){

   before(function(){
     graph.edge(nodeA, nodeB);
   })

   it('adds an edge to the graph from nodeA', function(){
     var edges = graph.memory[nodeA.id].edges;

     expect(edges).to.have.length(1)
     expect(edges[0]).to.eql({from: nodeA, to: nodeB})
   })

   it('adds an edge to the graph from nodeB', function(){
     var edges = graph.memory[nodeB.id].edges;

     expect(edges).to.have.length(1)
     expect(edges[0]).to.eql({from: nodeB, to: nodeA})
   })

 })

 describe('getting the edges that leave a node', function(){

   it('returns the linked nodes', function(){
     expect(nodeA.getLinkedNodes()).to.eql([ nodeB ])
     expect(nodeB.getLinkedNodes()).to.eql([ nodeA ])

   })

 })*/





/*var expect = require('chai').expect
    , tree = 'ko'
    , node = { tea: [ 'strom', 'matcha', 'oolong' ] }
    , foo = 'bar'
    , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] }
    /*, lola = { Node: [ 'name', 'value' ] }
   , lola = Node._obj;

describe('kra', function () {
  it('bla', function () {
    expect(tree).to.be.a('string');
    expect(tree).to.equal('ko');
    expect(tree).to.have.length(2);
    expect(node).to.have.property('tea').with.length(3);
  });
});

describe('', function () {
  it('bla', function () {
    expect(foo).to.be.a('string');
    expect(foo).to.equal('bar');
    expect(foo).to.have.length(3);
    expect(beverages).to.have.property('tea').with.length(3);
  });
});*/
