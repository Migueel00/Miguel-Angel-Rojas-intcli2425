import { Potion } from "../../types/Potion"

export const calculateCraftingTimeMock : Potion[] = [
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
    },
    {
        id: "potion_006",
        name: "Essence of Eternal Vitality",
        type: "consumable",
        rarity: "epic",
        effects: {
            primary: {
                attribute: "healthRegeneration",
                value: 50,
                duration: {
                    unit: "seconds",
                    amount: 120,
                },
            },
            secondary: [
                {
                    attribute: "maxHealth",
                    value: 100,
                    duration: {
                        unit: "minutes",
                        amount: 5,
                    },
                },
            ],
        },
        ingredients: [
            {
                name: "Heartroot Blossom",
                quantity: 1,
                origin: {
                    location: "Emerald Glade",
                    region: "Verdant Expanse",
                },
            },
            {
                name: "Crimson Nectar",
                quantity: 2,
                origin: {
                    location: "Scarlet Hollow",
                    region: "Bloodwood Thicket",
                },
            },
            {
                name: "Golden Leaf",
                quantity: 1,
                origin: {
                    location: "Sunlit Grove",
                    region: "Aurora Meadows",
                },
            },
        ],
        crafting: {
            station: "Druidic Cauldron",
            required_level: 20,
            time: {
                unit: "minutes",
                amount: 45,
            },
        },
        usage: {
            instructions: [
                "Drink to rejuvenate and enhance vitality.",
                "Not to be combined with other regenerative potions.",
            ],
            restrictions: {
                levelRequirement: 15,
                classRestrictions: ["Druid", "Paladin", "Warrior"],
                warnings: [
                    "May cause minor fatigue after effects fade.",
                    "Do not exceed the recommended dosage.",
                ],
            },
        },
        meta: {
            created_by: "Grandmaster Therion",
            lore: "A draught said to contain the life essence of ancient forests, bestowing unparalleled vigor to those who drink it.",
            availability: {
                in_shops: true,
                quest_reward: false,
                drop_rate: {
                    boss: "Forest Sentinel",
                    chance: "10%",
                },
            },
        },
        image: "image_6.webp",
    },
    {
        id: "potion_009",
        name: "Stormcaller's Brew",
        type: "consumable",
        rarity: "epic",
        effects: {
            primary: {
                attribute: "lightningDamage",
                value: 120,
                duration: {
                    unit: "minutes",
                    amount: 10,
                },
            },
            secondary: [
                {
                    attribute: "movementSpeed",
                    value: 30,
                    duration: {
                        unit: "minutes",
                        amount: 5,
                    },
                },
                {
                    attribute: "criticalStrikeChance",
                    value: 15,
                    duration: {
                        unit: "minutes",
                        amount: 10,
                    },
                },
            ],
        },
        ingredients: [
            {
                name: "Thundergrass",
                quantity: 3,
                origin: {
                    location: "Stormspire Cliffs",
                    region: "Tempest Valley",
                },
            },
            {
                name: "Charged Crystal Shard",
                quantity: 1,
                origin: {
                    location: "Sparkling Caverns",
                    region: "Skybreaker Peaks",
                },
            },
            {
                name: "Essence of the Storm",
                quantity: 2,
                origin: {
                    location: "Eye of the Maelstrom",
                    region: "Tempest Abyss",
                },
            },
        ],
        crafting: {
            station: "Elementalist's Altar",
            required_level: 28,
            time: {
                unit: "hours",
                amount: 2,
            },
        },
        usage: {
            instructions: [
                "Consume to unleash the fury of the storm.",
                "Avoid using near water bodies.",
            ],
            restrictions: {
                levelRequirement: 24,
                classRestrictions: ["Mage", "Shaman", "Elementalist"],
                warnings: [
                    "Overuse may cause static shock.",
                    "Prolonged exposure can induce hyperactivity.",
                ],
            },
        },
        meta: {
            created_by: "High Elementalist Zarael",
            lore: "Infused with the essence of a storm's wrath, this brew grants its user the power to command lightning and speed across the battlefield.",
            availability: {
                in_shops: true,
                quest_reward: false,
                drop_rate: {
                    boss: "Tempest Lord",
                    chance: "7%",
                },
            },
        },
        image: "image_9.webp",
    },
]