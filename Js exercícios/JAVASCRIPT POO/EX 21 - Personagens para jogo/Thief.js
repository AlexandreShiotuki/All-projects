const Character = require("./Character")

module.exports = class Thief extends Character {
  attack(target) {
    const damage = (this.atk * 2) - target.def
    target.hp -= damage
  }
}