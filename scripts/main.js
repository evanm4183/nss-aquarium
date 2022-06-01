import { FishList, FishTipsList, LocationsList } from "./lists.js"

const parentHTMLelement = document.querySelector(".fish-section")
parentHTMLelement.innerHTML = FishList()

const parentHTMLelement2 = document.querySelector(".fish-care-input")
parentHTMLelement2.innerHTML = FishTipsList()

const parentHTMLelement3 = document.querySelector(".locations-subsection")
parentHTMLelement3.innerHTML = LocationsList()