

let cauldron = {
    herbs: 0,
    berries: 0,
    mushrooms: 0,
    water: 0,
    flowers: 0
};

function addIngredient(ingredient) {
    cauldron[ingredient]++;
    console.log(`Added 1 ${ingredient} to the cauldron.`);
}

let potionMade = 0;

function checkPotion() {
    console.log("Cauldron contains:");
    for (let ingredient in cauldron) {
        console.log(`${ingredient}: ${cauldron[ingredient]}`);
    }




    if (cauldron.herbs === 2 && cauldron.berries === 1 && cauldron.mushrooms === 1) {
        console.log("Congratulations! You've brewed a perfect healing potion!");
        potionMade ++;
        updateDisplay()
        emptyCauldron()
    } else if (cauldron.flowers === 2 && cauldron.water === 1 && cauldron.berries === 1) {
        console.log("Excellent work! You've created a magical invisibility potion!");
        potionMade ++;
        updateDisplay()
        emptyCauldron()
    } else if (cauldron.mushrooms === 2 && cauldron.herbs === 1 && cauldron.water === 1) {
        console.log("Impressive! You've concocted a powerful strength potion!");
        potionMade ++;
        updateDisplay()
        emptyCauldron()
    } else {
        console.log("The potion is not quite right. Keep trying!");
        emptyCauldron()
    }
    
    

}

function emptyCauldron() {
    for (let ingredient in cauldron) {
        cauldron[ingredient] = 0;
    }
    console.log("Cauldron emptied. All ingredients removed.");
}


function updateDisplay() {
    document.getElementById('healingCount').innerText= `Potions Made: ${potionMade}`;
   
}

























