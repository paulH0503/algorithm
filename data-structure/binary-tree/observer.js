module.exports = class Observer {
  constructor() {
    this.fns = [];
  }

  subcribe(fn) {
    if (typeof fn === 'function') {
      this.fns.push(fn);
    } else {
      console.log("[sucribe error]: please provide function");
    }
  }

  unsubcribe(fn) {
    const index = this.fns.indexOf(fn);
    if (index !== -1) {
      this.fns.splice(index, 1);
    }
  }

  fire(e) {
    this.fns.forEach(fn => fn(e));
  }
}
