const dice_module = require("./DiceRoll.js");
const tools_module = require("./Tools.js");
const item_module = require("./Items.js");
const monster_module = require('./Monsters.js');

const playable_characters = {

};

const player_stats = {
    Name: "Bob",
    Strength: 40,
    Armor: 12,
    IsNpc: false,
    MaxHealth: 100,
    Health: 100,
}

let inventory_capacity = player_stats.Strength * 7.5;
let player_inventory_weight = 0;

let player_inventory = [];
let player_equipment = {
    Head: undefined,
    Shoulders: undefined,
    Hands: undefined,
    Chest: undefined,
    Legs: undefined,
    Foot: undefined,
    RightHand: undefined,
    LeftHand: undefined
};

let enemy = {
    Name: "Françis",
    Armor: 1,
    Strength: 5,
    IsNpc: true,
    Item: undefined,
    Health: 85
}

function Take(object) {
    if (player_inventory_weight + object.Weight <= inventory_capacity) {
        player_inventory.push(object);
        player_inventory_weight += object.Weight;
    }
    else console.log("Action impossible, cet objet est trop lourd");
}

function ListInventory() {
    console.log(player_inventory);
}

function ListEquipment() {
    console.log(player_equipment);
}

function Throw(object) {
    if (player_inventory.indexOf(object) != -1) {
        player_inventory.splice(player_inventory.indexOf(object), 1);
        console.log("Vous jetez " + object.Name + "dans la nature. Pollueur.");
    }
    else console.log("Halte Maraud ! Tu ne peux jeter quelque chose que tu ne possède pas !");
}

function Use(object) {
    if (player_inventory.indexOf(object) != -1 || player_equipment.hasOwnProperty(object.Type)) {
        if (object.Effect != undefined) object.Effect();
        else console.log("Cet objet n'a aucun effet");
    }
    else ("Tss Tss Tss. Tu ne possède pas l'objet demandé");
}

function Equip(object) {
    if (player_inventory.indexOf(object) != -1) {
        if (player_equipment[object.Type] == undefined) {
            player_equipment[object.Type] = object;
            object.Effect(player_stats, true);
            player_inventory.splice(player_inventory.indexOf(object), 1);
        }
        else console.log("Il y a déjà quelque chose d'équiper sur ce slot, veuillez le déséquiper avant.");
    }
    else console.log("Serieux ? Tu as vraiment essayer d'equiper quelque chose que tu ne possede pas ? Gros douilleur va");
}

function Unequip(object) {
    if (player_equipment[object.Type] == object) {
        player_equipment[object.Type] = undefined;
        object.Effect(player_stats, false);
        player_inventory.push(object);
    }
    else console.log("Tu ne peux pas déséquiper " + object.Name + ", il n'est pas équipé sur toi.");
}

function Attack(attacker, target, counter_func) {
    let dice_result = dice_module.DicesRoll(20);

    let attacker_attack = dice_result[0] + attacker.Strength;

    if (dice_result == 20) {
        target.Health -= attacker_attack;
        console.log("C'est un coup critique ! l'attaque de " + attacker.Name + " passe au travers de l'armure, infligeant " + attacker_attack + " points de dégats à " + target.Name + ". HP restants : " + target.Health);
    }
    else if (dice_result == 1) {
        console.log("Echec critique. Cela n'a aucun effet sur " + target.Name);
    }
    else {
        if (attacker_attack > target.Armor) {
            target.Health -= attacker_attack;
            console.log("L'attaque de " + attacker.Name + " passe au travers de l'armure, infligeant " + attacker_attack + " points de dégats à " + target.Name + ". HP restants : " + target.Health);
        }
        else console.log("L'attaque à échouée. Le jet d'attaque de " + attacker.Name + " n'est pas suffisant pour réussir à percer l'armure de " + target.Name);
    }

    if (target.Health <= 0) {
        if (target.IsNpc === true) console.log("Vous avez tuer " + target.Name + ", en mourrant il a laissé tomber " + target.Item);
        else {
            console.log("Game Over. Vous êtes mort. (et nul, mais chut, cela restera entre nous..)");
        }
    }

    counter_func();
}

function Test() {
    Take(item_module.items[Object.keys(item_module.items)[7]]);

    Equip(item_module.items[Object.keys(item_module.items)[7]]);

    Attack(player_stats, enemy, () => {
        Attack(enemy, player_stats, () => {
        });
    });
    Attack(player_stats, enemy, () => {
        Attack(enemy, player_stats, () => {
        });
    });
}

Test();