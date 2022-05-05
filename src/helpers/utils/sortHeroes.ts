import { ISortHeroesParams } from "../interfaces/ISortHeroesParams";

const attributes = {
    id: "id",
    name: "name",
    slug: "slug",
    intelligence: "powerstats.intelligence",
    strength: "powerstats.strength",
    speed: "powerstats.speed",
    durability: "powerstats.durability",
    power: "powerstats.power",
    combat: "powerstats.combat",
    gender: "appearance.gender",
    race: "appearance.race",
    height: "appearance.height",
    weight: "appearance.weight",
    eyeColor: "appearance.eyeColor",
    hairColor: "appearance.hairColor",
    fullName: "biography.fullName",
    alterEgos: "biography.alterEgos",
    aliases: "biography.aliases",
    placeOfBirth: "biography.placeOfBirth",
    firstAppearance: "biography.firstAppearance",
    publisher: "biography.publisher",
    alignment: "biography.alignment",
    occupation: "work.occupation",
    base: "work.base",
    groupAffiliation: "connections.groupAffiliation",
    relatives: "connections.relatives",
    xs: "images.xs",
    sm: "images.sm",
    md: "images.md",
    lg: "images.lg"
}

export const sortHeroes = function ({ orderBy, array }: ISortHeroesParams) {
    const stringPath = attributes[orderBy]
    
    const filter = stringPath.split('.');
    const length = filter.length;

    array.sort(function (a, b) {
        var i = 0;
        while( i < length ) { a = a[filter[i]]; b = b[filter[i]]; i++; }
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    });
    return array;
}
