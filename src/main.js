'use strict'

const CreepFactory = require('./creep-factory');
const BuildQueue = require('./build-queue');
const RoomPlanner = require('./room-planner');

module.exports.loop = function () {
    const creepFactory = new CreepFactory();
    const buildQueue = new BuildQueue();
    const roomPlanner = new RoomPlanner(Game.spawns["Spawn1"]);

    //GC
    for (var i in Memory.creeps) {
        if (!Game.creeps[i]) {
            delete Memory.creeps[i];
        }
    }

    const nextCreepToBuild = buildQueue.peek();
    if (nextCreepToBuild !== undefined) {
        const newCreep = creepFactory.createNew(nextCreepToBuild);

        if (Game.spawns['Spawn1'].spawnCreep(newCreep.bodyParts(), newCreep.name(), newCreep.memory()) == OK) {
            console.log("Spawning: " + JSON.stringify(newCreep));

            buildQueue.pop();
        }
    }

    //Lay plans
    roomPlanner.buildConstructionSites();

    let allCreeps = _.map(Game.creeps, (creep) => creepFactory.createFrom(creep));
    _.map(allCreeps, (creep) => creep.run());
}