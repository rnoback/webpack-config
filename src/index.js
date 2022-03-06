import "./styles/index.scss";

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4
}

const elvenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 4
}

console.log("elvenShieldRecipe ", elvenShieldRecipe);
console.log("elvenGauntletsRecipe ", elvenGauntletsRecipe);
