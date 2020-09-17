module.exports = [
    {
      key: "Astro",
      name: "Astro",
      description: "Astro Champions have reduced mana cost.",
      src: require("../images/origins/astro.png"),
      type: "origin",
      sets: [
        {
          "style": "gold",
          "min": 3,
          "effect": "Reduce mana cost by 30"
        }
      ]
    },
    {
      key: "Battlecast",
      name: "Battlecast",
      description: "Battlecast Champions, upon dealing or taking 10 instances of damage, heal if below half health, or deal magic damage to the nearest enemy if above half.",
      src: require("../images/origins/battlecast.png"),
      type: "origin",
      sets: [
        {
          "style": "bronze",
          "min": 2,
          "max": 3,
          "effect": "80 Heal / Damage"
        },
        {
          "style": "silver",
          "min": 4,
          "max": 5,
          "effect": "180 Heal / Damage"
        },
        {
          "style": "gold",
          "min": 6,
          "max": 7,
          "effect": "480 Heal / Damage"
        },
        {
          "style": "chromatic",
          "min": 8,
          "effect": "1000 Heal / Damage"
        }
      ]
    },
    {
      key: "Set3_Celestial",
      name: "Celestial",
      description: "All allies heal for some of the damage they deal with spells and attacks.",
      src: require("../images/origins/celestial.png"),
      type: "origin",
      sets: [
        {
          "style": "bronze",
          "min": 2,
          "max": 3,
          "effect": "15% Healing"
        },
        {
          "style": "gold",
          "min": 4,
          "max": 5,
          "effect": "45% Healing"
        },
        {
          "style": "chromatic",
          "min": 6,
          "effect": "150% Healing"
        }
      ]
    },
    {
      key: "Chrono",
      name: "Chrono",
      description: "All allies gain attack speed every few seconds.",
      src: require("../images/origins/chrono.png"),
      type: "origin",
      sets: [
        {
          "style": "bronze",
          "min": 2,
          "max": 3,
          "effect": "Every 8 seconds"
        },
        {
          "style": "silver",
          "min": 4,
          "max": 5,
          "effect": "Every 3 seconds"
        },
        {
          "style": "gold",
          "min": 6,
          "max": 7,
          "effect": "Every 1 seconds"
        },
        {
          "style": "chromatic",
          "min": 8,
          "effect": "Every 0.5 seconds"
        }
      ]
    },
    {
      key: "Cybernetic",
      name: "Cybernetic",
      description: "Cybernetic champions with at least one item gain Health and Attack Damage.",
      src: require("../images/origins/cybernetic.png"),
      type: "origin",
      sets: [
        {
          "style": "bronze",
          "min": 3,
          "max": 5,
          "effect": "300 Health & 35 Attack Damage"
        },
        {
          "style": "gold",
          "min": 6,
          "effect": "550 Health & 70 Attack Damage"
        }
      ]
    },
    {
      key: "DarkStar",
      name: "Dark Star",
      description: "When a Dark Star champion dies they give increased damage, plus any previous stacks of this effect, to the nearest ally Dark Star champion.",
      src: require("../images/origins/darkstar.png"),
      type: "origin",
      sets: [
          {
              "style": "bronze",
              "min": 2,
              "max": 3,
              "effect": "8 Attack Damage and Spell Power"
            },
            {
              "style": "silver",
              "min": 4,
              "max": 5,
              "effect": "18 Attack Damage and Spell Power"
            },
            {
              "style": "gold",
              "min": 6,
              "max": 7,
              "effect": "28 Attack Damage and Spell Power"
            },
            {
              "style": "chromatic",
              "min": 8,
              "effect": "48 Attack Damage and Spell Power"
            }
      ]
    },
    {
      key: "MechPilot",
      name: "Mech-Pilot",
      description: "At the start of combat, three random Mech-Pilots are teleported into a Super-Mech.",
      src: require("../images/origins/mechpilot.png"),
      type: "origin",
      sets: [
        {
          "style": "gold",
          "min": 3,
          "effect": "The Super-Mech has the combined Health, Attack Damage, and Traits of its pilots, as well as 3 random items from among them. When the Super-Mech dies the Pilots are ejected, granted Mana, and continue to fight."
        }
      ]
    },
    {
      key: "Rebel",
      name: "Rebel",
      description: "At the start of combat, Rebels gain a shield and bonus damage for each adjacent Rebel. The shield lasts for a few seconds.",
      src: require("../images/origins/rebel.png"),
      type: "origin",
      sets: [
        {
          "style": "bronze",
          "min": 3,
          "max": 5,
          "effect": "150 Shield & 10% Damage"
        },
        {
          "style": "gold",
          "min": 6,
          "max": 8,
          "effect": "225 Shield & 12% Damage"
        },
        {
          "style": "chromatic",
          "min": 9,
          "effect": "400 Shield & 20% Damage"
        }
      ]
    },
    {
      key: "SpacePirate",
      name: "Space Pirate",
      description: "Whenever a Space Pirate lands a killing blow on a Champion there is a chance to drop extra loot.",
      src: require("../images/origins/spacepirate.png"),
      type: "origin",
      sets: [
        {
          "style": "bronze",
          "min": 2,
          "max": 3,
          "effect": "50% for 1 Gold"
        },
        {
          "style": "gold",
          "min": 4,
          "effect": "50% for 1 Gold and 25% for a component item"
        }
      ]
    },
    {
      key: "StarGuardian",
      name: "Star Guardian",
      description: "Star Guardians' spellcasts grant Mana to other Star Guardians, spread among them.",
      src: require("../images/origins/starguardian.png"),
      type: "origin",
      sets: [
        {
          "style": "bronze",
          "min": 3,
          "max": 5,
          "effect": "15 Total Mana"
        },
        {
          "style": "gold",
          "min": 6,
          "max": 8,
          "effect": "25 Total Mana"
        },
        {
          "style": "chromatic",
          "min": 9,
          "effect": "60 Total Mana"
        }
      ]
    },
    {
      key: "None",
      name: "None",
      description: "No origin filter chosen.",
      src: require("../images/none.png"),
      type: "origin",
      sets: []
    }
]