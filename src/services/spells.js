export const spells = [
  {
    name: "Glacius",
    description: "Freezes the target with icy-cold air.",
  },
  {
    name: "Orchideous",
    description: "Conjures a bouquet of flowers.",
  },
  {
    name: "Flipendo",
    description: "Knocks objects and creatures backwards.",
  },
  {
    name: "Ferula",
    description:
      "Conjures up bandages and wraps them around a wound, splinting any broken bones.",
  },
  {
    name: "Relashio",
    description:
      "The Revulsion Jinx (Relashio) is a jinx that forces the target to release its grip on whatever it is holding. It works on both living and inanimate targets, so long as it is holding something.",
  },
  {
    name: "Obliviate",
    description: "Erase specific memories.",
  },
  {
    name: "Incendio",
    description: "Produces fire.",
  },
  {
    name: "Alohomora",
    description: "Unlocks doors and other objects. It can also unlock doors that have been sealed with a Locking Spell, although it is possible to bewitch doors to become unaffected by this spell."
  }
]

export function filterSpells(inputSpells = []) {
  let results = []
  inputSpells.forEach(inputSpell => {
    let filteredSpells = spells.filter(spell => {
      return spell.name.toLowerCase() === inputSpell.toLowerCase()
    })
    results = results.concat(filteredSpells)
  })

  return results
}
