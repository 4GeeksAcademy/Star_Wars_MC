const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// I need to consume all of these variables
			characters: [],
			planets: [],
			species: [],
			hero: {},
			planet: {},
			specimen: {},
			favorites: [],
		},
		actions: {
			// Create all fetch needed 
			getCharacters: async () => {
				try {
					const herosResponse = await fetch("https://www.swapi.tech/api/people")
					const data = await herosResponse.json()
					console.log("My characters", data)
					setStore({ characters: data.results })
					if (Response.ok) {
						console.log("Something is off!", herosResponse.status)
						return;
					}
				} catch (error) {
					console.log("Error Trapped", error)
				}
			},

			getPlanets: async () => {
				try {
					const planetResponse = await fetch("https://www.swapi.tech/api/planets")
					const data = await planetResponse.json()
					console.log("My planets", data)
					setStore({ planets: data.results })
					if (Response.ok) {
						console.log("Something is off!", planetResponse.status)
						return;
					}
				} catch (error) {
					console.log("Error Trapped", error)
				}
			},

			getSpecies: async () => {
				try {
					const speciesResponse = await fetch("https://www.swapi.tech/api/species")
					const data = await speciesResponse.json()
					console.log("My species", data)
					setStore({ species: data.results })
					if (Response.ok) {
						console.log("Something is off!", speciespResponse.status)
						return;
					}
				} catch (error) {
					console.log("Error Trapped", error)

				}
			},

			// get hero details
			getHero: async (id) => {
				try {
					const heroResponse = await fetch("https://www.swapi.tech/api/people/" + id)
					const data = await heroResponse.json()
					// console.log("Single Hero", data.result)
					setStore({ hero: data.result })
				} catch (error) {
					console.log("Long live the empire", error)
				}
			},

			getPlanet: async (id) => {
				try {
					const heroResponse = await fetch("https://www.swapi.tech/api/planets/" + id)
					const data = await heroResponse.json()
					// console.log("Single Hero", data.result)
					setStore({ planet: data.result })
				} catch (error) {
					console.log("Long live the empire", error)
				}
			},

			getSpecimen: async (id) => {
				try {
					const specimenResponse = await fetch("https://www.swapi.tech/api/species/" + id)
					const data = await specimenResponse.json()
					setStore({ specimen: data.result })
				} catch (error) {
					console.log("The force is not with you", error)
				}
			},


			// Add here the Favorites and deleteFavorites!!!
			favorites: (item) => {
				const store = getStore()
				if (store.favorites.includes(item)) {
					//if favorite exists, erase favorite
					let aux = []
					aux = store.favorites.filter((elemento) => elemento != item)
					setStore({ favorites: aux })
				} else {
					//If favorite doesn't exists, add favorite
					setStore({ favorites: [...store.favorites, item] })
				}
			}

		}
	};
};

export default getState;
