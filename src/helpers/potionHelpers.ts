import { Potion } from "../types/Potion";


// Devuelve array de pociones nivel menor o igual al especificado
export function FilterByLevelRequirement(potions : Potion[], level : number) : Potion[]{
    return potions.filter(potion => potion.usage.restrictions.levelRequirement <= level);
}

// Devuelve todas las pociones que tiene una rareza especifica
export function getPotionsByRarity(potions: Potion[], rarity: string) : Potion[]{ 
    return potions.filter(potion => potion.rarity === rarity);
}   


