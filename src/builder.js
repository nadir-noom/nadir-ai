'use strict'

const Creep = require('./creep');

class Builder extends Creep {

    constructor(creep, role) {
        super(creep, role)
    }

    bodyParts() {
        return [MOVE, WORK, CARRY];
    }

    run() {
        const target = this.creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
        if (this.creep.memory.building) {
            if (this.creep.build(target) == ERR_NOT_IN_RANGE) {
                this.creep.moveTo(target, {visualizePathStyle: {stroke: '#00ff00'}});
            }

            if (this.creep.store.getUsedCapacity() == 0) {
                this.creep.memory.building = false;
            }
        } else {
            const source = this.creep.pos.findClosestByPath(FIND_SOURCES);

            if (this.creep.harvest(source) == ERR_NOT_IN_RANGE) {
                this.creep.moveTo(source, {visualizePathStyle: {stroke: '#ff0000'}});
            }

            if (this.creep.store.getFreeCapacity() == 0) {
                this.creep.memory.building = true;
            }
        }

    }
};

module.exports = Builder;
