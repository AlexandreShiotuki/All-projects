const Character = require("./Character")

module.exports = class Warrior extends Character {
  constructor(name, hp, atk, def, shield, position) {
    super(name, hp, atk, def)
    this.shield = shield
    this.position = position
  }

  attack(target) {
    if (this.position === "attack") {
      const damage = this.atk - target.def
      target.hp -= damage
    } 
  }

  changePosition() {
    if (this.position === "defense") {
      this.position === "attack"
    } else {
      this.position === "defense"
      this.def += this.shield
    }
  }
}