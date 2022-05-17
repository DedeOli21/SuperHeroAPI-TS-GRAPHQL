import { sortHeroes } from "../../helpers/utils/sortHeroes";
import SuperHeroAPI from "../../services/SuperHeroAPI"
import { IListHeroesParams } from "../../helpers/interfaces/IListHeroesParams";

export default {
    Query: {
        listHeroes: async (_: any, { limit, order }: IListHeroesParams) => {
            const superHeroAPI = new SuperHeroAPI()

            const listHeroes = await superHeroAPI.listHeroes()

            if(limit && order) {
                const listHeroesSorted = sortHeroes({ orderBy: order, array: listHeroes })

                listHeroesSorted.length = limit

                return listHeroesSorted
            }
            else if(!limit && order) {
                const listHeroesSorted = sortHeroes({ orderBy: order, array: listHeroes })

                return listHeroesSorted
            }
            else if(limit && !order) {
                listHeroes.length = limit
            }

            return listHeroes
        },

        searchHeroes: async (_: any, { filter, query }: IListHeroesParams) => {
            const superHeroAPI = new SuperHeroAPI()

            const listHeroes = await superHeroAPI.listHeroes()

            if(filter && query) {
                const listHeroesFiltered = listHeroes.filter(hero => {
                    if(hero[filter] && hero[filter].toLowerCase().includes(query.toLowerCase())) {
                        return hero
                    }
                })

                return listHeroesFiltered
            }
            else if(!filter && query) {
                const listHeroesFiltered = listHeroes.find(hero => {
                    if(hero.name.toLowerCase().includes(query.toLowerCase()) || hero.slug.toLowerCase().includes(query.toLowerCase())) {
                        return hero
                    }
                })
                return listHeroesFiltered
            }
        }
    },
    Mutation : {
        createHero: async (_: any, { name, slug, powerstats, appearance, biography, work, connections, images }: any) => {
            const superHeroAPI = new SuperHeroAPI()

        }
    }
}