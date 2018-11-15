let sword = CreateObject("Longsword", "RightHand", 20, 50, (player) => {
    player.Strength += 6;
});

let shield = CreateObject("Little Shield", "LeftHand", 15, 20, (player) => {
    player.Armor += 4;
    player.MaxHealth += 1;
    player.Health += 1;
});

let health_potion = CreateObject("HealthPotion", "Usable", 2, 10, (player) => {
    let heal_points = 20;
    if (player.MaxHealth - player.Health > heal_points) {
        player.Health += heal_points;
        console.log("Vous regagnez " + heal_points + " HP");
    }
    else {
        player.Health = player.MaxHealth;
        console.log("Grâce à la sainte potion, vous êtes de nouveau full life !");
    }
});

let leather_gloves = CreateObject("LeatherGloves", "Hands", 3, 12, (player) => {
    player.Armor += 2;
    player.MaxHealth += 3;
    player.Health += 3;
});

let leather_pants = CreateObject("LeatherPants", "Legs", 5, 20, (player) => {
    player.Armor += 3;
    player.MaxHealth += 6;
    player.Health += 6;
});

let leather_helmet = CreateObject("LeatherHelmet", "Head", 4, 25, (player) => {
    player.Armor += 3;
    player.MaxHealth += 4;
    player.Health += 4;
});

let leather_chest = CreateObject("LeatherChest", "Chest", 5, 30, (player, isEquiped) => {
    if (isEquiped) {
        player.Armor += 4;
        player.MaxHealth += 8;
        player.Health += 8;
    }
    else
    {
        player.Armor -= 4;
        player.MaxHealth -= 8;
        player.Health -= 8;
    }
});

let leather_boots = CreateObject("LeatherBoots", "Foot", 3, 18, (player) => {
    player.Armor += 2;
    player.MaxHealth += 3;
    player.Health += 3;
});

let list_item = {
    Sword: sword,
    Shield: shield,
    HealthPotion: health_potion,
    LeatherGloves: leather_gloves,
    LeatherPants: leather_pants,
    LeatherHelmet: leather_helmet,
    LeatherBoots: leather_boots,
    LeatherChest: leather_chest,
};

function CreateObject(name, type, weight, price, effect = undefined) {
    return object = {
        Name: name,
        Type: type,
        Weight: weight,
        Price: price,
        Effect: effect
    }
}

exports.items = list_item;