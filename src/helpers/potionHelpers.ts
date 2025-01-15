import { Potion } from "../types/Potion";

// Returns array of potions level less than or equal to the specified level.
export function FilterByLevelRequirement(potions : Potion[], level : number) : Potion[]{
    return potions.filter(potion => potion.usage.restrictions.levelRequirement <= level);
}

// Returns all potions that have a specific rarity.
export function getPotionsByRarity(potions: Potion[], rarity: string) : Potion[]{ 
    return potions.filter(potion => potion.rarity === rarity);
}   

// Returns the array with the names of the ingredients
export function listIngredients(potion: Potion) : string[]{
    return potion.ingredients.map(ingredient => ingredient.name);
}

// Return array of potions with same secondary as effect
export function findPotionByEffect(potions : Potion[], effect : string) : Potion[]{
    const newArray : Potion[] = [];

    potions.map(potion => potion.effects.secondary.map(secondary => {
        if(secondary.attribute === effect){
            newArray.push(potion);
        }
    }));

    return newArray;
}

export function calculateCraftingTime(potions : Potion[]) : number{

    let minutes : number = 0;
    
    potions.map(potion => {
        if(potion.crafting.time.unit === 'hours'){
            minutes += potion.crafting.time.amount * 60;
        }else if(potion.crafting.time.unit === 'minutes'){
            minutes += potion.crafting.time.amount;
        }
    });

    return minutes;
}
