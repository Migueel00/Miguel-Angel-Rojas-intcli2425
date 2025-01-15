import { Potion } from "../../types/Potion"

export const filterByLevelDataMock: Potion[] = [
    {
        id: "potion_001",
        name: "Elixir of Eternal Flame",
        type: "consumable",
        rarity: "legendary",
        effects: {
            primary: {
                attribute: "fireResistance",
                value: 80,
                duration: {
                    unit: "minutes",
                    amount: 15,
                },
            },
            secondary: [
                {
                    attribute: "healthRegeneration",
                    value: 10,
                    duration: {
                        unit: "seconds",
                        amount: 300,
                    },
                },
                {
                    attribute: "staminaBoost",
                    value: 25,
                    duration: {
                        unit: "minutes",
                        amount: 5,
                    },
                },
            ],
        },
        ingredients: [
            {
                name: "Phoenix Feather",
                quantity: 1,
                origin: {
                    location: "Volcanic Crater",
                    region: "Everburning Peaks",
                },
            },
            {
                name: "Molten Ember",
                quantity: 3,
                origin: {
                    location: "Infernal Forge",
                    region: "Depths of Agnarok",
                },
            },
            {
                name: "Flameflower Extract",
                quantity: 2,
                origin: {
                    location: "Ashen Fields",
                    region: "Blazing Steppes",
                },
            },
        ],
        crafting: {
            station: "Alchemist's Crucible",
            required_level: 25,
            time: {
                unit: "minutes",
                amount: 45,
            },
        },
        usage: {
            instructions: [
                "Shake well before use.",
                "Drink entirely to activate the effects.",
                "Avoid exposure to water for 10 minutes after consumption.",
            ],
            restrictions: {
                levelRequirement: 15,
                classRestrictions: ["Fire Mage", "Pyromancer", "Elemental Shaman"],
                warnings: [
                    "Do not mix with Ice-based potions.",
                    "May cause temporary overheating symptoms.",
                ],
            },
        },
        meta: {
            created_by: "Grand Alchemist Tharion",
            lore: "Crafted from the essence of eternal flames, this potion grants unmatched resistance and power to those who dare consume it.",
            availability: {
                in_shops: false,
                quest_reward: true,
                drop_rate: {
                    boss: "Infernal Dragon",
                    chance: "5%",
                },
            },
        },
        image: "image_1.webp",
    },
    {
        id: "potion_002",
        name: "Essence of Frostbound Will",
        type: "consumable",
        rarity: "legendary",
        effects: {
            primary: {
                attribute: "iceResistance",
                value: 85,
                duration: {
                    unit: "minutes",
                    amount: 20,
                },
            },
            secondary: [
                {
                    attribute: "manaRegeneration",
                    value: 15,
                    duration: {
                        unit: "seconds",
                        amount: 120,
                    },
                },
                {
                    attribute: "focusBoost",
                    value: 30,
                    duration: {
                        unit: "minutes",
                        amount: 10,
                    },
                },
            ],
        },
        ingredients: [
            {
                name: "Frostbloom Petals",
                quantity: 2,
                origin: {
                    location: "Frozen Glade",
                    region: "Everwhite Tundra",
                },
            },
            {
                name: "Ice Crystal Shard",
                quantity: 3,
                origin: {
                    location: "Glacier Cavern",
                    region: "Shivering Expanse",
                },
            },
            {
                name: "Chilled Essence",
                quantity: 1,
                origin: {
                    location: "Frozen Waterfall",
                    region: "Icy Veil",
                },
            },
        ],
        crafting: {
            station: "Frostforge Lab",
            required_level: 28,
            time: {
                unit: "minutes",
                amount: 60,
            },
        },
        usage: {
            instructions: [
                "Consume in freezing temperatures for optimal effects.",
                "Do not expose to open flames.",
            ],
            restrictions: {
                levelRequirement: 20,
                classRestrictions: ["Frost Sorcerer", "Cryomancer", "Elemental Shaman"],
                warnings: [
                    "May cause temporary cold sensitivity.",
                    "Do not combine with fire-based potions.",
                ],
            },
        },
        meta: {
            created_by: "Icecaster Elowen",
            lore: "A potion imbued with the eternal frost, granting resilience and clarity even in the harshest winters.",
            availability: {
                in_shops: true,
                quest_reward: false,
                drop_rate: {
                    boss: "Glacial Titan",
                    chance: "3%",
                },
            },
        },
        image: "image_2.webp",
    },
    {
        id: "potion_003",
        name: "Elixir of Acolyte Terror",
        type: "consumable",
        rarity: "legendary",
        effects: {
            primary: {
                attribute: "fireResistance",
                value: 35,
                duration: {
                    unit: "minutes",
                    amount: 12,
                },
            },
            secondary: [
                {
                    attribute: "ElementalResistance",
                    value: 18,
                    duration: {
                        unit: "seconds",
                        amount: 300,
                    },
                },
                {
                    attribute: "ManaBoost",
                    value: 11,
                    duration: {
                        unit: "minutes",
                        amount: 2,
                    },
                },
            ],
        },
        ingredients: [
            {
                name: "Ice Dust",
                quantity: 21,
                origin: {
                    location: "Iceland Island",
                    region: "Sad Valley",
                },
            },
            {
                name: "Schapular Risk",
                quantity: 3,
                origin: {
                    location: "Dark Dome",
                    region: "Beneath of Rustain",
                },
            },
            {
                name: "Ethazium Extract",
                quantity: 32,
                origin: {
                    location: "Pork Royal",
                    region: "Redeam",
                },
            },
        ],
        crafting: {
            station: "Monk's Sign",
            required_level: 28,
            time: {
                unit: "minutes",
                amount: 38,
            },
        },
        usage: {
            instructions: [
                "Shake well before use.",
                "Drink entirely to activate the effects.",
                "Avoid exposure to water for 3 minutes after consumption.",
            ],
            restrictions: {
                levelRequirement: 12,
                classRestrictions: ["Black Mage", "Necrophil"],
                warnings: ["Drink free."],
            },
        },
        meta: {
            created_by: "Grand Alchemist Oculor",
            lore: "Crafted from the essence of eternal darkness, this potion grants unmatched resistance and power to those who dare consume it.",
            availability: {
                in_shops: false,
                quest_reward: true,
                drop_rate: {
                    boss: "Common Elite Elf",
                    chance: "75%",
                },
            },
        },
        image: "image_3.webp",
    }
]