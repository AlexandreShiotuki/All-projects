const Character = require("./Character")

module.exports = class Mage extends Character {
  constructor(name, hp, atk, def, magicPoints) {
    super(name, hp, atk, def)
    this.magicPoints = magicPoints
  }

  attack(target) {
    const damage = this.atk + this.magicPoints - target.def
    target.hp -= damage
  }

  heal(target) {
    target.hp += 2 * this.magicPoints
  }
}