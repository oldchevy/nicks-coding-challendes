var expect = require('chai').expect;
var Graph = require('./shortestPath');

describe('Dijkstra\'s shortest path finding algorithm', () => {

  //declare the graph by it's nodes and edges here
  var nodeValues = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  var edges = [
    ['a', 'b', 4],
    ['a', 'e', 1],
    ['b', 'c', 2],
    ['b', 'd', 5],
    ['d', 'e', 4],
    ['e', 'f', 6],
    ['d', 'g', 2],
    ['f', 'd', 3]
  ];

  var solution1 = 4;
  var solution2 = 10;

  //pass the nodes and edges to our graph class to instantiate it
  var graphInstance = new Graph(nodeValues, edges);

  it('should find the shortest path from A to B', () => {
    expect(graphInstance.shortestPath('a', 'b')).to.equal(solution1);
  });

  it('should find the shortest path from C to F', () => {
    expect(graphInstance.shortestPath('c', 'f')).to.equal(solution2);
  });

  it('can figure out if a node is not connected to the graph', () => {
    expect(graphInstance.shortestPath('a', 'i')).to.equal(undefined);
  });

});