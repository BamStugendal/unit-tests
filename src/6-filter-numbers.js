export const filterNumbers = (array, largerThan) => {
  const result = array.filter(number => number <= largerThan);
  return result;
}
