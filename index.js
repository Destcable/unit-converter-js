import { convertValue } from "./convertValue.js";

const convert = (value) => ({
    from: (fromUnit) => ({
        to: (toUnit) => convertValue(value, fromUnit, toUnit)
    })
})

convert(222).from('m').to('ft');