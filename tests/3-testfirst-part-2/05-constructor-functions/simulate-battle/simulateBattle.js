/* eslint-disable no-unused-vars, no-throw-literal*/
function Pokemon(name, health, attackBonus) {
  this.name = name;
  this.health = health;
  this.attackBonus = attackBonus;
}
Pokemon.prototype.biteAttack = function () {
  return this.attackBonus + 2;
};

Pokemon.prototype.isDefeated = function () {
  if (this.health >= 1) {
    return false;
  }
  return true;
};
function simulateBattle(pokemon1, pokemon2, firstAttacker) {
  let attacker;
  let defender;

  if (pokemon1.name === firstAttacker) {
    attacker = pokemon1;
    defender = pokemon2;
  } else {
    attacker = pokemon2;
    defender = pokemon1;
  }

  while (true) {
    defender.health = defender.health - attacker.biteAttack();

    if (defender.isDefeated()) {
      return attacker.name + " Wins!";
    }

    const temp = attacker;
    attacker = defender;
    defender = temp;
  }
}
