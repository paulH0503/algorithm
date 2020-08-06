class nodeLink {
  constructor(data) {
    this._data = data;
    this._next = null;
  }

  get data() {
    return this._data;
  }

  set next(node) {
    if (node instanceof nodeLink) {
      this._next = node;
    }
  }

  get next() {
    return this._next;
  }
}

class LinkListed {
  constructor() {
    this._heap = null;
    this._tail = null;
  }

  append(value) {
    const node = new nodeLink(value);
    if (!(this.heap instanceof nodeLink)) {
      this._heap = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      this._tail = node;
    }
  }

  prepend(value) {
    const node = new nodeLink(value);
    node.next = this.heap;
    this._heap = node;
    if (!this._tail) {
      this._tail = node;
    }

  }
  
  search(value) {
    let curNode = this.heap
    while((curNode instanceof nodeLink) && curNode.data !== value) {
      curNode = curNode.next;
    }
    if (!curNode) {
      return false;
    } else {
      return curNode;
    }
  }

  delete(value) {
    if (!(this.heap instanceof nodeLink)) {
      return false;
    } else {
      if (this.heap.data === value) {
        if (!this.heap.next && !this.tail.next) {
            this._heap = null;
            this._tail = null;
        } else {
          this.heap = this.heap.next;
        }
        return true;
      }

      let currentNode = this.heap;
      let prevNode;
      while((currentNode instanceof nodeLink) && currentNode.data !== value) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      
      if (prevNode instanceof nodeLink && currentNode.next instanceof nodeLink) {
        prevNode.next = currentNode.next;
        return true;
      } else {
        console.log("errorrrrr");
        return false;
      }

    }
  }

  get heap() {
    return this._heap;
  }

  get tail() {
    return this._tail;
  }
}

const linkListed = new LinkListed();
linkListed.append(1);
linkListed.append(2);
linkListed.append(3);
linkListed.append(4);
linkListed.prepend(5);
/**
 * 5 (head) -> 1 -> 2 -> 3 -> 4 (tail)
 */

console.log(linkListed.search(2).next);
/**
 * nodeLink { _data: 3, _next: nodeLink { _data: 4, _next: null } }
 */

console.log(linkListed.search(3).next);
/**
 * nodeLink { _data: 4, _next: null }
 */

console.log(linkListed.delete(3));
/**
 * nodeLink { _data: 2, _next: nodeLink { _data: 4, _next: null } }
 */