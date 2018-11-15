const dice_module = require("./DiceRoll.js");

const player_stats = {
    Strength: 5,
    Armor: 12,
    IsNpc: false,
    Health: 100
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

let test_object = CreateObject("Excalibur", "RightHand", 30, 50000);
let test_object_two = CreateObject("Shield", "LeftHand", 15, 50);

let test_usable_object = {
    Name: "Potion",
    Type: "Usable",
    Weight: 2,
    Effect: function () {
        console.log("Rend des hps tmtc");
    },
    price: 10
}

let enemy = {
    Armor: 1,
    Strength: 5,
    IsNpc: true,
    Item: undefined,
    Health: 5
}

function CreateObject(name, type, weight, price) {
    return object = {
        Name: name,
        Type: type,
        Weight: weight,
        Price: price
    }
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
            player_inventory.splice(player_inventory.indexOf(object), 1);
        }
        else console.log("Il y a déjà quelque chose d'équiper sur ce slot, veuillez le déséquiper avant.");
    }
    else console.log("Serieux ? Tu as vraiment essayer d'equiper quelque chose que tu ne possede pas ? Gros douilleur va");
}

function Unequip(object) {
    if (player_equipment[object.Type] == object) {
        player_equipment[object.Type] = undefined;
        player_inventory.push(object);
    }
    else console.log("Tu ne peux pas déséquiper " + object.Name + ", il n'est pas équipé sur toi.");
}

function Attack(attacker, target) {
    if (attacker.Health > 0 && target.Health > 0) 
    {
        let dice_result = dice_module.DicesRoll(20);

        console.log("dice_result : " + dice_result);

        let attacker_attack = dice_result[0] + attacker.Strength;
        console.log("Attaquant dégats : " + attacker_attack);

        if (dice_result == 20) {
            target.Health -= attacker_attack;
        }
        else if (dice_result == 1) {
            console.log("Echec critique. Cela n'a aucun effet sur la cible");
        }
        else {
            if (attacker_attack > target.Armor) {
                target.Health -= attacker_attack;
            }
            else console.log("L'attaque à échouée.")
        }

        if (target.Health < 0) {
            if (target.IsNpc === true) console.log("Vous avez tuer " + target.Name + ", en mourrant il a laissé tomber " + target.Item);
            else {
                console.log("Game Over. Vous êtes mort.")
            }
        }

        console.log("Target health " + target.Health);
    }
    else console.log("ntm")
}

function Test() {
    Take(test_object);
    Take(test_object_two);

    Take(test_usable_object);

    Equip(test_object);

    Use(test_usable_object);
    Use(test_object);

    Attack(player_stats, enemy);
    Attack(enemy, player_stats);
}

Test();