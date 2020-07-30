const { events } = require("./events")

module.exports = class Node {
  constructor(nodeIndex, nodeValue) {
    this.nodeIndex = nodeIndex;
    this.nodeValue = nodeValue;
    this.nodeLeft;
    this.nodeRight;
    this.nodeLists;
  }

  set left(node) {
    if (node instanceof Node) {
      this.nodeLeft = node;
    }
  }

  set right(node) {
    if (node instanceof Node) {
      this.nodeRight = node;
    }
  }

  get left() {
    return this.nodeLeft || {};
  }

  get right() {
    return this.nodeRight || {};
  }

  get data() {
    return this.nodeValue || undefined;
  }

  listen = (obj) => {
    const { event, data } = obj;
    if (event === events.UPDATE_NODE_LISTS) {
      this.nodeLists = data;
    }
  }
}
