'use strict'

const plans = {
    1: [
        {
            relX: -1,
            relY: -1,
            structure: STRUCTURE_EXTENSION
        }
    ],
    2: [
        {
            relX: 1,
            relY: -1,
            structure: STRUCTURE_EXTENSION
        }
    ]
}

class RoomPlanner {

    constructor(spawn) {
        this.spawn = spawn;
    }

    buildConstructionSites() {
        let spawnX = this.spawn.pos.x;
        let spawnY = this.spawn.pos.y;
        let level = this.spawn.room.controller.level;

        let plannedSites = plans[level];
        _.map(plannedSites, (site) =>  this.spawn.room.createConstructionSite(spawnX + site.relX, spawnY + site.relX, site.structure));
    }

}

module.exports = RoomPlanner;
