
# Kitchen Measurement Conversions

A lightweight, open-source JavaScript resource for converting
kitchen ingredient measurements between grams and US cups.

Created by Grams to Cups Tools to help home cooks, bakers,
recipe developers and software developers work with
ingredient-specific measurements.

## About the Project

Grams measure mass, while cups measure volume. Converting
between these units requires an ingredient-specific
reference weight.

For example, one cup of all-purpose flour weighs
approximately 120 grams, while one cup of honey weighs
approximately 336 grams.

This project provides reusable conversion functions,
reference data and practical calculation examples.

## Features

- Grams to cups conversion
- Cups to grams conversion
- Ingredient-specific reference weights
- Custom conversion factors
- Input validation
- Reusable JavaScript functions
- No external dependencies
- CSV ingredient reference data

## Online Kitchen Conversion Tools

For interactive ingredient-specific calculators and
additional kitchen measurement guides, visit the free
[Grams to Cups Converter](https://gramstocupstools.com/grams-to-cups/).

## Conversion Formulas

### Grams to Cups

Cups = Grams / Grams per Cup

### Cups to Grams

Grams = Cups * Grams per Cup

## Common Ingredient Reference Weights

| Ingredient | Approximate grams per US cup |
|---|---:|
| All-purpose flour | 120 |
| Bread flour | 120 |
| Granulated sugar | 198 |
| Packed brown sugar | 213 |
| Butter | 226 |
| Honey | 336 |
| Chocolate chips | 170 |
| Unsweetened cocoa powder | 84 |
| Cooked brown rice | 170 |
| Dry white basmati rice | 185 |

## Getting Started

Download or clone this repository.

Node.js is required to run the included JavaScript
examples and tests.

No additional npm dependencies are required.

## JavaScript Usage

```javascript
const {
  gramsToCups,
  cupsToGrams,
  convertIngredient
} = require("./conversion.js");

console.log(gramsToCups(250, 120));
// Approximately 2.0833 cups

console.log(cupsToGrams(2, 120));
// 240 grams

console.log(convertIngredient(100, "honey"));
// Approximately 0.2976 cups

console.log(convertIngredient(2, "butter", "cups-to-grams"));
// 452 grams
```

## Running Tests

```bash
node conversion.test.js
```

## Repository Structure

- README.md — Project documentation
- conversion.js — JavaScript conversion functions
- conversion.test.js — Automated conversion tests
- ingredient-weights.csv — Ingredient reference values
- examples.md — Practical kitchen conversion examples
- LICENSE — MIT software license

## Data Sources and Methodology

Most baking ingredient references are based on selected
values from the King Arthur Baking Ingredient Weight Chart:

https://www.kingarthurbaking.com/learn/ingredient-weight-chart

Butter and honey cup weights are calculated from the
published smaller serving measurements.

The dry white basmati rice value of 185 grams per US cup
is a provisional working estimate.

Actual ingredient weights vary by brand, preparation,
moisture content and measuring technique.

These references are not independently measured laboratory
results or universal ingredient densities.

## Contributing

Contributions are welcome.

When submitting new ingredient data, include:

- Ingredient name
- Preparation state
- Grams per US cup
- Measurement method
- Reliable data source

## License

The original software in this repository is available
under the MIT License.

Third-party reference materials remain subject to their
respective terms.

## Maintained By

Grams to Cups Tools

An online resource for practical cooking and baking
measurements.

