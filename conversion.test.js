
"use strict";

const assert = require("node:assert/strict");

const {
    gramsToCups,
    cupsToGrams,
    convertIngredient
} = require("./conversion.js");

assert.equal(gramsToCups(120, 120), 1);

assert.equal(gramsToCups(60, 120), 0.5);

assert.equal(cupsToGrams(2, 120), 240);

assert.equal(cupsToGrams(0.5, 226), 113);

assert.equal(
    convertIngredient(198, "granulated-sugar"),
    1
);

assert.equal(
    convertIngredient(2, "honey", "cups-to-grams"),
    672
);

assert.ok(
    Math.abs(
        convertIngredient(250, "dry-basmati-rice")
        - 250 / 185
    ) < 0.000001
);

assert.equal(gramsToCups(0, 120), 0);

assert.throws(() => gramsToCups(-10, 120));

assert.throws(() => gramsToCups(100, 0));

assert.throws(() => gramsToCups(NaN, 120));

assert.throws(() => convertIngredient(100, "unknown"));

assert.throws(() =>
    convertIngredient(100, "honey", "invalid-direction")
);

console.log("All conversion tests passed.");
