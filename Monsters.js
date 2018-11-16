const item_module = require("./Items.js");

monsters = {
    Spider: {
        Name: "Spider",
        IsNpc: false,
        Armor: 5,
        MaxHealth: 25,
        Health: 25,
        Strength: 4,
        Item: item_module.items["HealthPotion"], // pot
    },
    Guard: {
        Name: "Guard",
        IsNpc: false,
        Armor: 16,
        MaxHealth: 43,
        Health: 43,
        Strength: 12,
        Item: item_module.items[Object.keys(item_module.items)[4]], //pants
    },
    Commoner: {
        Name: "Commoner",
        IsNpc: false,
        Armor: 10,
        MaxHealth: 34,
        Health: 34,
        Strength: 9,
        Item: item_module.items[Object.keys(item_module.items)[7]], //chest
    },
    Squeleton: {
        Name: "Squeleton",
        IsNpc: false,
        Armor: 8,
        MaxHealth: 30,
        Health: 30,
        Strength: 7,
        Item: item_module.items[Object.keys(item_module.items)[2]], //shield
    },
    LivingArmor: {
        Name: "LivingArmor",
        IsNpc: false,
        Armor: 20,
        MaxHealth: 63,
        Health: 63,
        Strength: 20,
        Item: undefined, //
    }
}

exports.monsters = monsters;