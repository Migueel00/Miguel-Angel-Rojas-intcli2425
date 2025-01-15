import { Secondary } from "./SecondaryEffects"

export interface Effects {
    primary: Primary
    secondary: Secondary[]
}

interface Primary {
    attribute: string
    value: number
    duration: Duration
}

export interface Duration {
    unit: string
    amount: number
}

