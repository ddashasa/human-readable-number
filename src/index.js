module.exports = function toReadable (number) {
      let units = {
        0: 'zero,',
        1: 'one', 
        2: 'two',
        3: 'three',
        4: 'four', 
        5: 'five', 
        6: 'six', 
        7: 'seven',
        8: 'eight',
        9: 'nine'
      };
  
    let teens = {
        10: 'ten',
        11: 'eleven', 
        12: 'twelve',
        13: 'thirteen', 
        14: 'fourteen', 
        15: 'fifteen',
        16: 'sixteen', 
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
      };  
  
      let tens = {
        20: 'twenty', 
        30: 'thirty',
        40: 'forty', 
        50: 'fifty', 
        60: 'sixty',
        70: 'seventy',
        80: 'eighty', 
        90: 'ninety'
      };

      if (number == 0) {
        return 'zero'
      }

      let str = '';

      let hundred = (number-number%100)/100;
      number %= 100;
      let ten = number-number%10;
      let unit = number%10;

      if (hundred > 0) {
        str += units[hundred] + ' hundred';
      };

      if (ten > 0) {
        if (ten > 19) {
          str += ' ' + tens[ten] + ' ';
        } else {
          str += ' '+ teens[number];
          return str.trim();
        };
      };

      if (ten == 0) {
        str += ' ';
      }

      if (unit > 0) {
        str += units[unit];
      }

      return str.trim();
}

