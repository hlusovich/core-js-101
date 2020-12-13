function getRectangleArea(width, height) {
  return width * height;
}


/**
 * Returns a circumference of circle given by radius.
 *
 * @param {number} radius
 * @return {number}
 *
 * @example:
 *   5    => 31.41592653589793
 *   3.14 => 19.729201864543903
 *   0    => 0
 */
function getCicleCircumference(radius) {
  return 2 * Math.PI * radius;
}


function getAverage(value1, value2) {
  return value1 / 2 + value2 / 2;
}


function getDistanceBetweenPoints(x1, y1, x2, y2) {
  const a = x1 - x2;
  const b = y1 - y2;
  return Math.sqrt(a * a + b * b);
}

function getLinearEquationRoot(a, b) {
  return -(b / a);
}


function getAngleBetweenVectors(x1, y1, x2, y2) {
  let vec = (x1 * x2 + y1 * y2);

  vec /= (Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * 2 + y2 * y2));

  return Math.acos(vec);
}


function getLastDigit(value) {
  const word = `${value}`;
  return +word[word.length - 1];
}


/**
 * Returns a number by given string representation.
 *
 * @param {string} value
 * @return {number}
 *
 * @example:
 *    '100'     => 100
 *     '37'     => 37
 * '-525.5'     => -525.5
 */
function parseNumberFromString(value) {
  return +value;
}


function getParallelipidedDiagonal(a, b, c) {
  const result = ((a * 100) ** 2) + ((b * 100) ** 2) + ((c * 100) ** 2);
  return Math.sqrt(result) / 100;
}


function roundToPowerOfTen(num, pow) {
  return Math.round(num / 10 ** pow) * 10 ** pow;
}

/**
 * Returns true is the number is prime; otherwise false.
 * See: https://en.wikipedia.org/wiki/Primality_test
 *
 * @param {number} n
 * @return {bool}
 *
 * @example:
 *   4 => false
 *   5 => true
 *   6 => false
 *   7 => true
 *   11 => true
 *   12 => false
 *   16 => false
 *   17 => true
 */
function isPrime(n) {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function toNumber(value, def) {
  if (+value) {
    return value;
  }
  return def;
}

module.exports = {
  getRectangleArea,
  getCicleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelipidedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
};
