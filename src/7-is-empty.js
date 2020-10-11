export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject;

  if (type === 'string' || type === 'object') {
    return stringArrayOrObject === '' || stringArrayOrObject.length === 0 || Object.keys(stringArrayOrObject).length === 0
  } else {
    return false
  }
}
