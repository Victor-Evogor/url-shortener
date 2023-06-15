import {randomInt} from 'crypto';

export const generateRandomString = (length: number): string => {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = randomInt(0, characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}