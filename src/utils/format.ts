export function trim(str: string) {
  return str.trim();
}

export function strToProtocol(str: string) {
  if (str.startsWith('https://')) {
    return str;
  }
  if (str.startsWith('http://')) {
    return str;
  }
  return 'https://' + str;
}
