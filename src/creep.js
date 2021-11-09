'use strict'

class Creep {

    constructor(creep, role) {
        this.creep = creep;
        this.role = role;

        if (role === undefined) {
            this.role = creep.memory.role;
        }
    }

    bodyParts() {
        return [];
    }

    name() {
        return this.role + Game.time;
    }

    memory() {
       return {memory: {role: this.role}};
    }

    role() {
        return this.role;
    }

    run() {
        console.log("Unimplemented behaviour for: " + this.creep);
    }
}

module.exports = Creep;