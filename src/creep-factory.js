'use strict'

const Harvester = require('harvester');
const Upgrader = require('upgrader');
const Scout = require('scout');

const creepClassMapping = {
    harvester: Harvester,
    upgrader: Upgrader,
    scout: Scout
}

class CreepFactory {

    constructor() {
    }

    createFrom(creep) {
        const creepClass = creepClassMapping[creep.memory.role];
        return new creepClass(creep);
    }

    createNew(role) {
        const creepClass = creepClassMapping[role];
        return new creepClass(null, role);
    }
}

module.exports = CreepFactory;