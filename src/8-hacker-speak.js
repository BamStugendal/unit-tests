export const hackerSpeak = (words) => {
  return words.replace(/a|e|i|o|s/gi, (x) => {
    x = x.toLowerCase();
    if (x == 'a') return 4;
    else if (x === 'e') return 3;
    else if (x === 'i') return 1;
    else if (x === 'o') return 0;
    else return 5;
  });
}
