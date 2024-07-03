const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			characters: [],
			planets: [],
			species: [],
			hero: {},
			planet: {},
			specimen: {},
			favorites: [],
		},
		actions: {
			
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


			
			favorites: (item) => {
				const store = getStore()
				if (store.favorites.includes(item)) {
					let aux = []
					aux = store.favorites.filter((elemento) => elemento != item)
					setStore({ favorites: aux })
				} else {
					setStore({ favorites: [...store.favorites, item] })
				}
			}

		}
	};
};

export default getState;
