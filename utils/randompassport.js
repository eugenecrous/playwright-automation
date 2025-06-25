// utils/randompassport.js

/**
 * Generates a random alphanumeric PP.
 * @param {number} length - Length of the PP to generate.
 * @returns {string} Random alphanumeric PP.
 */
const generateRandomPP = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };
  
  module.exports = { generateRandomPP };
  