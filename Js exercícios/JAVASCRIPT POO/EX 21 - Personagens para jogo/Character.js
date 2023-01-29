module.exports = class Character {
  constructor(name, hp, atk, def) {
    this.name = name
    this.hp = hp
    this.atk = atk
    this.def = def
  }

  attack(target) {
    const damage = this.atk - target.def
    target.hp -= damage
  }
}
