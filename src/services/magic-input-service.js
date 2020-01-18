import { navigate } from "gatsby"

const globalOptionList = [
  {
    name: "jolien",
    url: "witches/jolien",
  },
  {
    name: "alohomora",
    url: "spells/alohomora",
  },
]

// "bubble",
//     "cauldron",
//     "love",
//     "tooth",
//     "parceltongue",

export function magic(inputValue, optionList = [], response) {
  let cleanInputValue = inputValue.replace(/\s+/g, "").toLowerCase()

  if (optionList.length && optionList.contains(cleanInputValue)) {
    navigate(cleanInputValue)
  } else {
    const value = globalOptionList.find(key => key.name === cleanInputValue)
    if (value) {
      navigate(value.url)
    } else {
      return response || false
    }
  }
}
