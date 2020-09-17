const Traits = [
    {
      "key": "Set3_Blademaster",
      "name": "Blademaster",
      "description": "Blademasters' Basic Attacks have a chance to trigger two additional attacks against their target. These additional attacks deal damage like Basic Attacks and trigger on-hit effects.",
      "src": require("../images/traits/blademaster.png"),
      "type": "trait",
      "sets": [
        {
          "style": "bronze",
          "min": 3,
          "max": 5,
          "effect": "30% Chance to trigger"
        },
        {
          "style": "gold",
          "min": 6,
          "max": 8,
          "effect": "65% Chance to trigger"
        },
        {
          "style": "chromatic",
          "min": 9,
          "effect": "100% Chance to trigger"
        }
      ]
    },
    {
      "key": "Blaster",
      "name": "Blaster",
      "description": "Every fourth Basic Attack from a Blaster fires additional attacks at random enemies. These additional attacks deal damage like Basic Attacks, trigger on-hit effects, and can critically hit.",
      "src": require("../images/traits/blaster.png"),
      "type": "trait",
      "sets": [
        {
          "style": "bronze",
          "min": 2,
          "max": 3,
          "effect": "3 Additional Attacks"
        },
        {
          "style": "gold",
          "min": 4,
          "effect": "6 Additional Attacks"
        }
      ]
    },
    {
      "key": "Set3_Brawler",
      "name": "Brawler",
      "description": "Brawlers gain bonus Maximum Health.",
      "src": require("../images/traits/brawler.png"),
      "type": "trait",
      "sets": [
        {
          "style": "bronze",
          "min": 2,
          "max": 3,
          "effect": "350 Bonus Health"
        },
        {
          "style": "gold",
          "min": 4,
          "effect": "600 Bonus Health"
        }
      ]
    },
    {
      "key": "Demolitionist",
      "name": "Demolitionist",
      "description": "Damage from Demolitionists' spellcasts stuns their targets for a few seconds. (Once per spellcast)",
      "src": require("../images/traits/demolitionist.png"),
      "type": "trait",
      "sets": [
        {
          "style": "gold",
          "min": 2,
          "effect": "Damage from Demolitionists' spellcasts stun their targets for 1.50 seconds"
        }
      ]
    },
    {
      "key": "Infiltrator",
      "name": "Infiltrator",
      "description": "At the start of combat, Infiltrators move to the enemy's backline.",
      "description": "Infiltrators gain Attack Speed for a few seconds at the start of combat.",
      "src": require("../images/traits/infiltrator.png"),
      "type": "trait",
      "sets": [
        {
          "style": "bronze",
          "min": 2,
          "max": 3,
          "effect": "40% Bonus Attack Speed. Refreshes on Takedown"
        },
        {
          "style": "gold",
          "min": 4,
          "max": 5,
          "effect": "80% Bonus Attack Speed. Refreshes on Takedown"
        },
        {
          "style": "chromatic",
          "min": 6,
          "effect": "150% Bonus Attack Speed. Refreshes on Takedown"
        }
      ]
    },
    {
      "key": "ManaReaver",
      "name": "Mana-Reaver",
      "description": "Mana-Reavers' Basic Attacks increase the mana cost of their target's next spellcast by a percentage.",
      "src": require("../images/traits/manareaver.png"),
      "type": "trait",
      "sets": [
        {
          "style": "gold",
          "min": 2,
          "effect": "Mana-Reaver's Basic Attacks increase the Mana cost of their target's next spellcast by 30%."
        }
      ]
    },
    {
      "key": "Mercenary",
      "name": "Mercenary",
      "description": "Upgrades for Mercenaries' spells have a chance to appear in the shop.",
      "src": require("../images/traits/mercenary.png"),
      "type": "trait",
      "sets": [
        {
          "style": "gold",
          "min": 1,
          "effect": "Mercenaries can buy upgrades for their Spells in the shop"
        }
      ]
    },
    {
      "key": "Set3_Mystic",
      "name": "Mystic",
      "description": "All allies gain Magic Resistance.",
      "src": require("../images/traits/mystic.png"),
      "type": "trait",
      "sets": [
        {
          "style": "bronze",
          "min": 2,
          "max": 3,
          "effect": "50 Magic Resistance"
        },
        {
          "style": "gold",
          "min": 4,
          "effect": "120 Magic Resistance"
        }
      ]
    },
    {
      "key": "Paragon",
      "name": "Paragon",
      "description": "Ally Star Guardian basic attacks are converted to true damage. All other ally basic attacks are converted to magic damage.",
      "src": require("../images/traits/paragon.png"),
      "type": "trait",
      "sets": [
        {
          "style": "gold",
          "min": 1,
          "effect": "Ally Star Guardian basic attacks are converted to true damage. All other ally basic attacks are converted to magic damage"
        }
      ]
    },
    {
      "key": "Protector",
      "name": "Protector",
      "description": "Protectors shield themselves for a few seconds whenever they cast a spell. This shield doesn't stack.",
      "src": require("../images/traits/protector.png"),
      "type": "trait",
      "sets": [
        {
          "style": "bronze",
          "min": 2,
          "max": 3,
          "effect": "30% Maximum Health Shield"
        },
        {
          "style": "gold",
          "min": 4,
          "max": 5,
          "effect": "40% Maximum Health Shield"
        },
        {
          "style": "chromatic",
          "min": 6,
          "effect": "55% Maximum Health Shield"
        }
      ]
    },
    {
      "key": "Sniper",
      "name": "Sniper",
      "description": "Snipers deal percentage increased damage for each hex between themselves and their target.",
      "src": require("../images/traits/sniper.png"),
      "type": "trait",
      "sets": [
        {
          "style": "bronze",
          "min": 2,
          "max": 3,
          "effect": "9% Increased Damage per hex"
        },
        {
          "style": "gold",
          "min": 4,
          "effect": "16% Increased Damage per hex"
        }
      ]
    },
    {
      "key": "Set3_Sorcerer",
      "name": "Sorcerer",
      "description": "All allies have increased Spell Power.",
      "src": require("../images/traits/sorcerer.png"),
      "type": "trait",
      "sets": [
          {
              "style": "bronze",
              "min": 2,
              "max": 3,
              "effect": "20% Spell Power"
            },
            {
              "style": "gold",
              "min": 4,
              "max": 5,
              "effect": "40% Spell Power"
            },
            {
              "style": "chromatic",
              "min": 6,
              "effect": "70% Spell Power"
            }
      ]
    },
    {
      "key": "Starship",
      "name": "Starship",
      "description": "Starships gain mana per second, maneuver around the board, and are immune to movement impairing effects, but can't make Basic Attacks.",
      "src": require("../images/traits/starship.png"),
      "type": "trait",
      "sets": [
        {
          "style": "gold",
          "min": 1,
          "effect": "Starships gain 40 mana per second, maneuver around the board, and are immune to movement impairing effects, but can't Basic Attack"
        }
      ]
    },
    {
      "key": "Vanguard",
      "name": "Vanguard",
      "description": "Vanguard champions gain bonus Armor.",
      "src": require("../images/traits/vanguard.png"),
      "type": "trait",
      "sets": [
          {
              "style": "bronze",
              "min": 2,
              "max": 3,
              "effect": "125 Armor"
            },
            {
              "style": "gold",
              "min": 4,
              "max": 5,
              "effect": "300 Armor"
            },
            {
              "style": "chromatic",
              "min": 6,
              "effect": "900 Armor"
            }
      ]
    },
    {
      "key": "None",
      "name": "None",
      "description": "No trait filter chosen.",
      "src": require("../images/none.png"),
      "type": "trait",
      "sets": []
    }
];

export default Traits;