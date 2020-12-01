function concatenateStrings(val, value2) {
  return val + value2;
}

function getStringLength(value) {
  return value.length;
}


function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}


function extractNameFromTemplate(value) {
  const words = value.slice(0, +value.length - 1).split(' ');
  return `${words[1]} ${words[2]}`;
}


function getFirstChar(value) {
  return value[0];
}


function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}


function repeatString(value, count) {
  return value.repeat(count);
}


function removeFirstOccurrences(str, value) {
  const index = str.indexOf(value);
  return str.slice(0, index) + str.slice(index + value.length);
}


function unbracketTag(str) {
  return str.slice(1, str.length - 1);
}


/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
  return str.toUpperCase();
}


function extractEmails(str) {
  return str.split(';');
}


function getRectangleString(width, height) {
  let top = '┌';
  for (let i = 2; i < width; i += 1) {
    top += '─';
  }
  top += '┐\n';
  for (let i = 2; i < height; i += 1) {
    top += '│';
    for (let j = 2; j < width; j += 1) {
      top += ' ';
    }
    top += '│\n';
  }

  let bottom = '└';
  for (let i = 2; i < width; i += 1) {
    bottom += '─';
  }
  bottom += '┘\n';
  top += bottom;
  return top;
}

function encodeToRot13(string) {
  let newString = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== string[i].toLowerCase()) {
      const code = (+string[i].toLowerCase().charCodeAt() + 13) >= 123
        ? +string[i].charCodeAt() + 13 - 123 + 97 : +string[i].charCodeAt() + 13;
      newString += String.fromCharCode(code).toUpperCase();
    } else if (string[i].toLowerCase().charCodeAt() > 96 && string[i]
      .toLowerCase().charCodeAt() < 123) {
      const code = (+string[i].charCodeAt() + 13) >= 123
        ? +string[i].charCodeAt() + 13 - 123 + 97 : +string[i].charCodeAt() + 13;

      newString += String.fromCharCode(code);
    } else {
      newString += string[i];
    }
  }
  return newString;
}

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

function getCardId(value) {
  const deck = ['A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣',
    'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦',
    'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥',
    'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠'];
  return deck.indexOf(value);
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
