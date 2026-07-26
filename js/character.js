"use strict";

const hero = {
    name: "Tor",
    class: "warrior",
    level: 10,
    isAlive: true
};

console.group('Hero');
console.log('Hero object: ', hero);
console.log('Name: ', hero.name);
console.log('Class: ', hero.class);
console.log('Level: ', hero.level);
console.log('Is Alive: ', hero.isAlive);
console.groupEnd();

hero.stats = {
    hp: 300,
    mana: 300,
    strength: 300,
    agility: 300,
    intelligence: 300
};

console.group('Hero Stats');
console.log('Stats:', hero.stats);
console.log('Strength:', hero.stats.strength)
console.log('Double Intelligence:', hero.stats.intelligence * 2);
console.groupEnd();

hero.inventory = ['hummer', 'poison', 'shield', 'sword'];

console.group('Hero inventory');
console.log('Inventory: ', hero.inventory);
console.log('First inventory:', hero.inventory[0]);
console.log('Last inventory: ', hero.inventory[hero.inventory.length - 1]);
console.log('Inventory count: ', hero.inventory.length);
console.groupEnd();

const enemy = {
    name: 'Doctor Doom',
    'critical hit chance': 0.15,
    'attack-speed': 2.5,
    ['damage-' + hero.class]: 50
};

console.group('Enemy');
// not posible because JS see it as a string and return error: Uncaught SyntaxError: Unexpected string
// console.log('Properties with problems ', enemy.'critical hit chance', enemy.'attack-speed', enemy.'damage' + hero.class);
console.log('Critical hit chance: ', enemy['critical hit chance']);
console.log('Attack speed: ', enemy['attack-speed']);
console.log('Damage warrior: ', enemy['damage-' +  hero.class]);
console.groupEnd();

hero.abilities = {
    attack: function() { return `${hero.name} атакує!`; },
    heal: () => { return `${hero.name} лікує!` },
    levelUp: () => { return `${hero.name} підвищив рівень!` }
};

console.group('Abilities');
console.log('Atack: ', hero.abilities.attack());
console.log('Heal: ', hero.abilities.heal());
console.log('Level Up: ', hero.abilities.levelUp());
console.groupEnd();

hero.localtion = {
    region: 'Marvel Universe',
    city: 'Asgard',
    coordinates: {
        x: 10,
        y: 30,
        z: 50
    }
};

console.group('Location');
console.log('Region: ', hero.localtion.region);
console.log('Z coordinate: ', hero.localtion.coordinates.z);
console.groupEnd();

const villain = {
    name: "Villain",
    class: "mage",
    level: 5,
    isAlive: true,
    stats:{
        hp: 200,
        mana: 500,
        strength: 200,
        agility: 200,
        intelligence: 400
    },
    inventory: ['magic stick', 'poison', 'flask', 'sword']
};

console.group('Duel');
console.log('Participants: ', `${hero.name} VS ${villain.name}`);
console.log('Who have more hp: ', `${hero.stats.hp - villain.stats.hp == 0 ? 'They have same amount of HP.' : hero.stats.hp - villain.stats.hp > 0 ? hero.name + ' have more HP' : villain.name + ' have more HP'}`);
console.log('Inventory: ', `Учасники дуелі: ${hero.name} (${hero.inventory.join(', ')}) vs ${villain.name} (${villain.inventory.join(', ')}).`);
console.groupEnd();