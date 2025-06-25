
 
  /**
 * Generates a valid-looking South African ID number.
 * Format: YYMMDDSSSSCAZ
 */
function generateRandomSAID() {
  const year = String(Math.floor(Math.random() * 30) + 70).padStart(2, '0'); // 1970–1999
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');

  const birthDate = `${year}${month}${day}`;

  const sequence = String(Math.floor(Math.random() * 10000)).padStart(4, '0');
  const citizenship = Math.random() < 0.9 ? '0' : '1';
  const usuallyEight = '8';

  const partialID = `${birthDate}${sequence}${citizenship}${usuallyEight}`;
  const checksum = calculateLuhnChecksum(partialID);

  return `${partialID}${checksum}`;
}

/**
 * Calculates the Luhn checksum digit for a 12-digit SA ID.
 */
function calculateLuhnChecksum(id) {
  let sum = 0;
  for (let i = 0; i < id.length; i++) {
    let digit = parseInt(id[i], 10);
    if ((id.length - i) % 2 === 0) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }
  return String((10 - (sum % 10)) % 10);
}

module.exports = {
  generateRandomSAID,
};
