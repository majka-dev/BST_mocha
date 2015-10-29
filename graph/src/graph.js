
var currendId = 1;

function GraphNode(graph, data){
	this.data = data;
	this.id = currendId++; 
	this.graph = graph;
}

GraphNode.prototype = {

	constructor: GraphNode,	

	getLinkedNodes: function getLinkedNodes(){
		var node = this;
		var graph = node.graph;
		var edges = graph.memory[node.id].edges;
		var linkedNodes = [];
		for (var i=0, l=edges.length; i<l; i++) {
			var edge = edges[i];
			linkedNodes.push(edge.to);
		}
		return linkedNodes;
	}

}

function Graph(){
	this.memory = {}
}

Graph.prototype = {

	constructor: Graph,

	node: function node(data){
		var graph = this;
		return new GraphNode(graph, data);
	},

	insert: function insert(node){
		if (this.memory[node.id]) return;
		
		this.memory[node.id] = {node: node, edges: []};
	},

	getNode: function getNode(id) {
		if (this.memory[id]) {
			return this.memory[id].node;
		}
	},

	edge: function edge(A, B){
		this.memory[A.id].edges.push({from: A, to: B})
		this.memory[B.id].edges.push({from: B, to: A})
	}

}

module.exports = {
	Graph: Graph
}