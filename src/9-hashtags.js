export const hashtags = (text) => {
  text = text.split(' ');
  return text.filter(text => text.startsWith('#'));
}
