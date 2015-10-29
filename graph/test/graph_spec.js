var chai = require('chai');
var expect = chai.expect;

var Graph = require('../index.js').Graph;

describe('Graph', function(){

	var graph = new Graph();

	var nodeA = graph.node({name: "A"});
	var nodeB = graph.node({name: "B"});

	it('has a constructor', function(){
		expect(graph.constructor).to.eql(Graph);
	})

	describe("Node", function(){

		it("is a GraphNode", function(){
			expect(nodeA.constructor.name).to.eql('GraphNode');
		})

		it('has a name', function(){
			expect(nodeA.data.name).to.eql('A')
		})

		it('has an id', function(){
			expect(nodeA.id).to.eql(1)
			expect(nodeB.id).to.eql(2)
		})

		it('has a reference to the parent graph', function(){
			expect(nodeA.graph).to.eql(graph);
			expect(nodeB.graph).to.eql(graph);
		})

	})

	describe('insert', function(){

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

