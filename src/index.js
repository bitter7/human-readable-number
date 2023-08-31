module.exports = function toReadable (number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

    if (number === 0) {
        return 'zero';
    }

    function convertGroup(number) {
        if (number === 0) {
            return '';
        } else if (number < 10) {
            return units[number] + ' ';
        } else if (number < 20) {
            return teens[number - 10] + ' ';
        } else if (number < 100) {
            return tens[Math.floor(number / 10)] + ' ' + units[number % 10] + ' ';
        } else {
            return hundreds[Math.floor(number / 100)] + ' ' + convertGroup(number % 100);
        }
    }

    const billion = Math.floor(number / 1000000000);
    const million = Math.floor((number % 1000000000) / 1000000);
    const thousand = Math.floor((number % 1000000) / 1000);
    const remainder = number % 1000;

    let result = '';

    if (billion > 0) {
        result += convertGroup(billion) + 'billion ';
    }
    if (million > 0) {
        result += convertGroup(million) + 'million ';
    }
    if (thousand > 0) {
        result += convertGroup(thousand) + 'thousand ';
    }
    if (remainder > 0) {
        result += convertGroup(remainder);
    }

    return result.trim();
}
  
