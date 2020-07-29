function NodeHeap(value, index, nodes) {
  var nodeValue = value;
  var nodeIndex = index;
  function getIndex() {
    return nodeIndex;
  }

  function updateIndex(v) {
    nodeIndex = v;
  }

  function getValue() {
    return nodeValue;
  }

  function updateValue(v) {
    nodeValue = v;
  }

  function getChildLeft() {
    const index = 2*nodeIndex + 1;
    return new NodeHeap(nodes[index], index, nodes);
  }

  function getChildRight() {
    const index = 2*nodeIndex + 2;
    return new NodeHeap(nodes[index], index, nodes);
  }
  
  function getPreviousNode() {
    if (nodeIndex - 1 < 0) {
      return "stop";
    }
    return new NodeHeap(nodes[nodeIndex-1], nodeIndex-1, nodes);
  }

  function updateNodes(array) {
    nodes = array;
  }

  function getParentIndex() {
    return Math.floor((nodeIndex-1)/2);
  }

  return {
    getIndex,
    getValue,
    getChildRight,
    getChildLeft,
    getPreviousNode,
    updateValue,
    updateIndex,
    updateNodes,
    getParentIndex
  }
}

var heapSort = (function(array){
  // contain instance of node
  var nodes = [];
  // contain value each of instance node
  var cloneNodes= array;
  // tree 
  var trees = newProxy(array);

  function swapNode(node1, node2) {
    const tempIndexNode1 = node1.getIndex(); // 0
    const tempIndexNode2 = node2.getIndex(); // 1

    // change position of node
    var tempNode = nodes[tempIndexNode1];
    nodes[tempIndexNode1] = nodes[tempIndexNode2];
    nodes[tempIndexNode2] = tempNode;

    // swap tree
    var tempTree = trees[tempIndexNode1];
    trees[tempIndexNode1] = trees[tempIndexNode2];
    trees[tempIndexNode2] = tempTree;
    // notify
    notifyUpdateList();
  }

  function notifyUpdateList() {
    updateTree();
    nodes.forEach(node => {
      node.updateNodes(cloneNodes);
    });
  }

  function maxHeap(currentNode = nodes[Math.floor(nodes.length/2)]) {
    if (typeof currentNode === 'object') {
      const node = currentNode;    
      const lNode = currentNode.getChildLeft();
      const rNode = currentNode.getChildRight();
      const indexNode = lNode.getIndex();
      const indexLNode = lNode.getIndex();
      const indexRNode = rNode.getIndex();
      maxHeap(currentNode.getPreviousNode());

      if (lNode.getValue() === undefined && rNode.getValue() === undefined) {
        return;
      }
      const arrayNodes = [node.getValue(), lNode.getValue(), rNode.getValue()].filter(el => !!el);
      var maxValue = Math.max(...arrayNodes);
  
      if (maxValue === node.getValue()) {
      } else {
        if (maxValue === lNode.getValue()) {
          swapNode(node, lNode);
          maxHeap(nodes[indexLNode]);
        } else if (maxValue === rNode.getValue()) {
          swapNode(node, rNode);
          maxHeap(nodes[indexRNode])
        } else {
          alert("ollll")
        }
      }
    }
  }

  function generateNode() {
    nodes = trees.map((el, i) => new NodeHeap(el, i, trees));
    return this;
  }

  function sort() {
    if (nodes.length === 1) {
      console.log("trees", trees);
      return trees;
    }
    var tempPeekNode = nodes[0];
    nodes[0] = nodes[nodes.length-1];
    nodes[nodes.length-1] = tempPeekNode;

    var tempTree = trees[nodes[0].getIndex()];
    trees[nodes[0].getIndex()] = trees[nodes[nodes.length-1].getIndex()];
    trees[nodes[nodes.length-1].getIndex()] = tempTree;
    nodes.splice(-1);
    updateTree();
    notifyUpdateList();
    maxHeap();
    sort();
  }

  function updateTree() {
    cloneNodes = nodes.map(el => el.getValue());
    nodes.forEach((el, i) => {
      el.updateIndex(i);
    });
  }

  function getNodes() {
    return nodes;
  }

  return {
    generateNode,
    maxHeap,
    getNodes,
    sort
  }
})([4, 10, 3, 5, 1, 100,23 ,35,1 ,2,3 ,4]);


heapSort.generateNode().maxHeap();
heapSort.sort();

function newProxy(target) {
  return new Proxy(target, {
    get: function(target, prop) {
      return target[prop];
    },
    set: function(target, prop, value) {
      console.log(`Update node ${prop}: ${value}`);
      target[prop] = value;
      return true;
    }
  })
}