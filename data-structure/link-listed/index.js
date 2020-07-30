class nodeLink {
  constructor(data) {
    this._nodePrev = null;
    this._nodeNext = null;
    this._data = data;
  }

  set next(node) {
    this._nodeNext = node;
  }

  set prev(node) {
    this._nodePrev = node;
  }

  get next() {
    if (!this._nodeNext) {
      return "Not already link to node";
    }
    return this._nodeNext;
  }

  get prev() {
    if (!this._nodePrev) {
      return "Not already link to node";
    }
    return this._nodePrev;
  }

  get data() {
    return this._data;
  }
}

class LinkListed {
  constructor(heap) {
    if (heap instanceof nodeLink) {

    } else {
      new Error("heap is not a node");
    }
    this._head = heap;

  }

  deleteNode(node) {
    if (node instanceof nodeLink) {
      const prev = node.prev;
      const next = node.next;
      prev.next = next;
      next.prev = prev;
    } else {
      console.log("errrrr");
    }
  }

  get heap() {
    return this._head;
  }
}


const node1 = new nodeLink(1);
const node2 = new nodeLink(2);
const node3 = new nodeLink(3);
const node4 = new nodeLink(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

node4.prev = node3;
node3.prev = node2;
node2.prev = node1;

const linkListed = new LinkListed(node2);

linkListed.deleteNode(node3)

console.log(linkListed.heap.next.data);
console.log(linkListed.heap.prev.data);

