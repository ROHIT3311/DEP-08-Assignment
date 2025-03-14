class PubSub {
  constructor() {
    this.eventBus = {};
  }

  event(eventName, func) {
    this.eventBus[eventName].push(func);
  }

  on(eventName) {
    this.eventBus[eventName].push(func);
  }
}

let ev = new PubSub();
event("click", () => {});
