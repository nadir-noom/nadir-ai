'use strict'

const Creep = require('./creep');

class Upgrader extends Creep {

    constructor(creep, role) {
        super(creep, role);
    }

    bodyParts() {
        return [MOVE, MOVE, CARRY, WORK];
    }

    run() {
        const source = this.creep.pos.findClosestByPath(FIND_SOURCES);
        if (this.creep.memory.fillUp) {
            if (this.creep.harvest(source) == ERR_NOT_IN_RANGE) {
                this.creep.moveTo(source, {visualizePathStyle: {stroke: '#00ff00'}});
            }

            if (this.creep.store.getFreeCapacity() == 0) {
                this.creep.memory.fillUp = false;
            }
        } else {
            if (this.creep.upgradeController(this.creep.room.controller) == ERR_NOT_IN_RANGE) {
                this.creep.moveTo(this.creep.room.controller, {visualizePathStyle: {stroke: '#ff0000'}});
            }

            if (this.creep.store.getUsedCapacity() == 0) {
                this.creep.memory.fillUp = true;
            }
        }
    }
}

module.exports = Upgrader;
