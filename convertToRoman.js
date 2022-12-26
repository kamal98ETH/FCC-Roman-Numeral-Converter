function convertToRoman(num) {
    let str = "";
    let thousands = Math.floor(num / 1000);
    let hundreds = Math.floor((num - thousands * 1000) / 100);
    let tens = Math.floor((num - thousands * 1000 - hundreds * 100) / 10);
    let units = num - thousands * 1000 - hundreds * 100 - tens * 10;

    let convert = (unit, letter1, letter2, letter3) => {
        if (unit < 4) {
            str += letter1.repeat(unit);
        } else if (unit == 4) {
            str += letter1 + letter2;
        } else if (unit == 5) {
            str += letter2;
        } else if (unit < 9) {
            str += letter2 + letter1.repeat(unit - 5);
        } else {
            str += letter1 + letter3;
        }
    }

    str += "M".repeat(thousands);
    convert(hundreds, "C", "D", "M");
    convert(tens, "X", "L", "C");
    convert(units, "I", "V", "X");

    return str;
}