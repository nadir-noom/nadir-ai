'use strict'

const Creep = require('./creep');

class Harvester extends Creep {

    constructor(creep, role) {
        super(creep, role)
    }

    bodyParts() {
        return [MOVE, MOVE, CARRY, WORK];
    }

    run() {
        if (this.creep.store.getFreeCapacity() > 0) {
            const source = this.creep.pos.findClosestByPath(FIND_SOURCES);

            if (this.creep.harvest(source) == ERR_NOT_IN_RANGE) {
                this.creep.moveTo(source, {visualizePathStyle: {stroke: '#00ff00'}});
            }
        } else {
            const targets = this.creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_SPAWN) &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }});
            if (targets.length > 0) {
                if (this.creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    this.creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ff0000'}});
                }
            }
        }

    }
};

module.exports = Harvester;