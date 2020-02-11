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
    name: "goblin",
    url: "haring/goblin",
  },
  {
    name: "lies",
    url: "underconstruction/wordList",
  },
  {
    name: "tooth",
    url: "underconstruction/tooth",
  },
  {
    name: "parceltongue",
    url: "underconstruction/parceltongue",
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
