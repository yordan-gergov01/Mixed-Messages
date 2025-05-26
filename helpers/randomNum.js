// this function generates random number that is used for choose random quote from an array
export function generateRandom() {
  const randomNumber = Math.floor(Math.random() * 31);

  return randomNumber;
}
