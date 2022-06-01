import { getFish, getFishTips, getLocations } from "./database.js"

export const FishList = () => {
    const fishes = getFish()

    let htmlString = ''
    for (const fish of fishes) {
        htmlString += `<div class="fish">
                <div class="fish-names"><strong>${fish.species}</strong></div>
                <img src="${fish.image}" alt="${fish.species}" class="fish-picture">
                <aside class="fish-description">Name: ${fish.name}<br>Origin: ${fish.origin}<br>Diet: ${fish.diet}<br>Length: ${fish.length} in</aside>
                </div>`
    }
    //htmlString += '</section>'

    return htmlString
}

export const FishTipsList = () => {
    const fishTips = getFishTips()

    let htmlString = ""
    for (const fishTip of fishTips) {
        htmlString += `<div class="fish-care">
                    <h4 class="fish-care-subtitle">${fishTip.species}:</h4>
                    <p class="fish-care-body">${fishTip.message}</p>
                    </div>`
    }

    return htmlString
}

export const LocationsList = () => {
    const locations = getLocations()

    let htmlString = ""
    for (const location of locations) {
        htmlString += `<div class="location">
                    <h4 class="location-subtitle">${location.name}</h4>
                    <p class="fish-care-body">${location.message}</p>
                    </div>`
    }

    return htmlString
}