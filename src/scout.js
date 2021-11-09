'use strict'

const Creep = require('./creep');

class Scout extends Creep {

    constructor(creep, role) {
        super(creep, role)
    }

    bodyParts() {
        return [MOVE, CLAIM];
    }

    run() {
        if (this.creep.claimController(this.creep.room.controller) == ERR_NOT_IN_RANGE) {
            this.creep.moveTo(this.creep.room.controller, {visualizePathStyle: {stroke: '#00ff00'}});
        }
    }
};

module.exports = Scout;
