import conversionRates from "./conversionRates.json" with { type: "json" };

export function convertValue(value, fromUnit, toUnit) { 
    if (fromUnit === "m" && toUnit === "ft") {
        console.log(value * conversionRates.length.m.ft)
    }
};