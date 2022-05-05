import axios from "axios"
import { ISuperHero } from "../helpers/interfaces/ISuperHero"
import { AppError } from "../helpers/errors/AppErrors"

class SuperHeroAPI {
    private apiHost: String = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api"

    async listHeroes(): Promise<ISuperHero[]> {
        return new Promise((resolve, reject) => {
            axios.get(`${this.apiHost}/all.json`)
            .then((res) => {
                const listHeroes = res.data as ISuperHero[]
                resolve(listHeroes)
            })
            .catch(e => {
                reject(new AppError("Error for listHeroes", e))
            })
        })
    }
}

export default SuperHeroAPI