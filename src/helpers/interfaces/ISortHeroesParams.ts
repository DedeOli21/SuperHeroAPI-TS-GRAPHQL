import { ISuperHero } from "./ISuperHero";

interface ISortHeroesParams {
    orderBy: string;
    array: Array<ISuperHero>;
}

export { ISortHeroesParams }