import { navigate } from "gatsby"

const globalOptionList = [
  {
    name: "please",
    url: "thuis/please",
  },
  {
    name: "jolien",
    url: "witches/jolien",
  },
  {
    name: "britt",
    url: "witches/britt",
  },
  {
    name: "aniek",
    url: "witches/aniek",
  },
  {
    name: "claartje",
    url: "witches/claartje",
  },
  {
    name: "jessica",
    url: "witches/jessica",
  },
  {
    name: "eva",
    url: "witches/eva",
  },
  {
    name: "anja",
    url: "witches/anja",
  },
  {
    name: "roos",
    url: "witches/roos",
  },
  {
    name: "zagabini",
    url: "zagabini",
  },
  {
    name: "cauldron",
    url: "brug/cauldron",
  },

  {
    name: "bubble",
    url: "brug/bubble",
  },
  {
    name: "rose",
    url: "brug/rose",
  },
  {
    name: "alohomora",
    url: "spells/alohomora",
  },
  
  {
    name: "lesperlesduhomard",
    url: "haring/lesperlesduhomard",
  },
  {
    name: "goblin",
    url: "haring/goblin",
  },
  {
    name: "risky",
    url: "haring/risky",
  },
  {
    name: "lies",
    url: "finale/lies",
  },
  {
    name: "stories",
    url: "finale/stories",
  },
  {
    name: "tooth",
    url: "402/tooth",
  },
  {
    name: "witching",
    url: "402/witching",
  },
  {
    name: "parceltongue",
    url: "finale/parceltongue",
  },
]

export function magic(inputValue, optionList = []) {
  let cleanInputValue = inputValue.replace(/\s+/g, "").toLowerCase()

  if (optionList.length) {
    const value = optionList.find(key => key.name === cleanInputValue)
    if (value) {
      navigate(value.url)
      return true
    } else {
      return false
    }
  } else {
    const value = globalOptionList.find(key => key.name === cleanInputValue)
    if (value) {
      navigate(value.url)
      return true
    } else {
      return false
    }
  }
}
