export interface Crafting {
    station: string
    required_level: number
    time: Time
}

interface Time {
    unit: string
    amount: number
}