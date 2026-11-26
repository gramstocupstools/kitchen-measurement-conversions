
// Kitchen Measurement Conversions
// Maintained by Grams to Cups Tools
// https://gramstocupstools.com/

"use strict";

const ingredientWeights = Object.freeze({
    "all-purpose-flour": 120,
    "bread-flour": 120,
    "granulated-sugar": 198,
    "packed-brown-sugar": 213,
    "butter": 226,
    "honey": 336,
    "chocolate-chips": 170,
    "cocoa-powder": 84,
    "cooked-brown-rice": 170,
    "dry-basmati-rice": 185
});

function validateInput(amount, gramsPerCup) {
    if (!Number.isFinite(amount) || amount < 0) {
        throw new Error(
            "Amount must be a non-negative finite number."
        );
    }

    if (!Number.isFinite(gramsPerCup) || gramsPerCup <= 0) {
        throw new Error(
            "Grams per cup must be a positive finite number."
        );
    }
}

function gramsToCups(grams, gramsPerCup) {
    validateInput(grams, gramsPerCup);

    return grams / gramsPerCup;
}

function cupsToGrams(cups, gramsPerCup) {
    validateInput(cups, gramsPerCup);

    return cups * gramsPerCup;
}

function convertIngredient(
    amount,
    ingredient,
    direction = "grams-to-cups"
) {
    if (!Object.hasOwn(ingredientWeights, ingredient)) {
        throw new Error("Unsupported ingredient.");
    }

    const gramsPerCup = ingredientWeights[ingredient];

    if (direction === "grams-to-cups") {
        return gramsToCups(amount, gramsPerCup);
    }

    if (direction === "cups-to-grams") {
        return cupsToGrams(amount, gramsPerCup);
    }

    throw new Error("Unsupported conversion direction.");
}

module.exports = {
    ingredientWeights,
    gramsToCups,
    cupsToGrams,
    convertIngredient
};
