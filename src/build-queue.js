'use strict'

var seedQueue = [
    "harvester",
    "harvester",
    "upgrader",
    "upgrader",
    "builder",
    "scout"
]

class BuildQueue {

    constructor() {
        this.queue = Memory.queue;

        if (this.queue === undefined) {
            this.queue = seedQueue;
            Memory.queue = this.queue;
        }
    }

    queue() {
        return this.queue;
    }

    pop() {
        const value = this.queue.shift();
        Memory.queue = this.queue;
        return value;
    }

    peek() {
        return _.first(this.queue);
    }
}

module.exports = BuildQueue;