const Observer = require('./observer');
const Node = require('./node');
const { events } = require("./events")

const a = [5, 8, 2, 42, 55, 36, 1, 82, 91, 120, 111, 12, 135, 14];
const nodes = [];

// generate node
for (let i = 0; i < a.length; i++) {
  nodes.push(new Node(i, a[i]));
}

// create proxy
const nodesProxy = new Proxy(nodes, {
  get: function(target, prop) {
    const isGetNodeValid = prop.match(/node(\d+)/g);
    if (isGetNodeValid) {
      const index = Number(prop.split("node")[1]);
      if (index >= target.length) {
        throw new Error("out of boundary");
      }
      return target[index];
    }
    return target[prop];
  }
})


const ob = new Observer();
nodesProxy.forEach(node => {
  ob.subcribe(node.listen);
});
// update all of binary tree
ob.fire({ event: events.UPDATE_NODE_LISTS, data: nodesProxy });


nodesProxy.node5.left = nodesProxy.node5;
nodesProxy.node5.right = nodesProxy.node2;
console.log(nodesProxy.node5.right.data)



