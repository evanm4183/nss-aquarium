const database = {
    fish: [
        {
            species: "Swordfish",
            image: "pictures/swordfish.jfif",
            name: "Marlon",
            origin: "Caribbean",
            diet: "Large Fish and Squid",
            length: 177, //inches
        },
        {
            species: "Pufferfish",
            image: "pictures/pufferfish.webp",
            name: "Spike",
            origin: "Japan",
            diet: "Invertabrates and Algae",
            length: 20,
        },
        {
            species: "Clownfish",
            image: "pictures/clownfish.jpg",
            name: "Nemo",
            origin: "Australia",
            diet: "Invertabrates and Algae",
            length: 4,
        },
        {
            species: "Stingray",
            image: "pictures/stingray.jfif",
            name: "Ray",
            origin: "United States",
            diet: "Invertabrates and Crustaceans",
            length: 38,
        },
        {
            species: "Barracuda",
            image: "pictures/barracuda.jpg",
            name: "Barry",
            origin: "Brazil",
            diet: "Small Fish",
            length: 65
        }
    ],
    fishTips: [
        {
            species: "Swordfish",
            message: "Make sure to keep the tank at the proper temperature and salinity."
        },
        {
            species: "Pufferfish",
            message: "Make sure to keep the tank at the proper temperature and salinity."
        },
        {
            species: "Clownfish",
            message: "Make sure to keep the tank at the proper temperature and salinity."
        },
        {
            species: "Stingray",
            message: "Make sure to keep the tank at the proper temperature and salinity."
        },
        {
            species: "Barracuda",
            message: "Make sure to keep the tank at the proper temperature and salinity."
        },
        {
            species: "Eel",
            message: "Make sure to keep the tank at the proper temperature and salinity."
        }
    ],
    locations: [
        {
            name: "Caribbean",
            message: "Placeholder text"
        },
        {
            name: "Japan",
            message: "Placeholder text"
        },
        {
            name: "Australia",
            message: "Placeholder text"
        },
        {
            name: "United States",
            message: "Placeholder text"
        },
        {
            name: "India",
            message: "Placeholder text"
        },
        {
            name: "Spain",
            message: "Placeholder text"
        },
        {
            name: "Brazil",
            message: "Placeholder text"
        },
        {
            name: "Antarctica",
            message: "It's very cold here"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getFishTips = () => {
    return database.fishTips.map(fishTips => ({...fishTips}))
}

export const getLocations = () => {
    return database.locations.map(locations => ({...locations}))
}