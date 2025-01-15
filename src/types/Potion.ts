import { Effects } from "./Effects"
import { Ingredient } from "./Ingredient"
import { Crafting } from "./Crafting"
import { Usage } from "./Usage"
import { Meta } from "./Meta"

export interface Potion {
    id: string
    name: string
    type: string
    rarity: string
    effects: Effects
    ingredients: Ingredient[]
    crafting: Crafting
    usage: Usage
    meta: Meta
    image: string
}
