const dice_module = require("./DiceRoll.js");
const tools_module = require("./Tools.js");

const playable_characters = {

};

const player_stats = {
    Name: "Player",
    Strength: 10,
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

let test_object = CreateObject("Excalibur", "RightHand", 30, 50000);
let test_object_two = CreateObject("Shield", "LeftHand", 15, 50);

let health_potion = CreateUsableObject("HealthPotion", "Usable", 3, 10, () => {
    let heal_points = 20;
    if (player_stats.MaxHealth - player_stats.Health > heal_points) {
        player_stats.Health += heal_points;
        console.log("Vous regagnez " + heal_points + " HP");
    }
    else 
    {
        player_stats.Health = player_stats.MaxHealth;
        console.log("Grâce à la sainte potion, vous êtes de nouveau full life !");
    }
})

let enemy = {
    Name: "Françis",
    Armor: 1,
    Strength: 5,
    IsNpc: true,
    Item: undefined,
    Health: 85
}

function CreateObject(name, type, weight, price) {
    return object = {
        Name: name,
        Type: type,
        Weight: weight,
        Price: price,
    }
}

function CreateUsableObject(name, type, weight, price, effect) {
    return object = {
        Name: name,
        Type: type,
        Weight: weight,
        Price: price,
        Effect: effect
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
    Take(health_potion);

    Use(health_potion);

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