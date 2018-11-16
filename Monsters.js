const item_module = require("./Items.js");

monsters = {
    Spider: {
        Name: "Spider",
        IsNpc: true,
        Armor: 5,
        MaxHealth: 25,
        Health: 25,
        Strength: 4,
        Item: item_module.items["HealthPotion"],
    },
    Guard: {
        Name: "Guard",
        IsNpc: true,
        Armor: 16,
        MaxHealth: 43,
        Health: 43,
        Strength: 12,
        Item: item_module.items["LeatherPants"],
    },
    Commoner: {
        Name: "Commoner",
        IsNpc: true,
        Armor: 10,
        MaxHealth: 34,
        Health: 34,
        Strength: 9,
        Item: item_module.items["LeatherChest"],
    },
    Squeleton: {
        Name: "Squeleton",
        IsNpc: true,
        Armor: 8,
        MaxHealth: 30,
        Health: 30,
        Strength: 7,
        Item: item_module.items["Shield"],
    },
    LivingArmor: {
        Name: "LivingArmor",
        IsNpc: true,
        Armor: 20,
        MaxHealth: 75,
        Health: 75,
        Strength: 21,
        Item: item_module.items["HealthPotion"],
    }
}

exports.monsters = monsters;