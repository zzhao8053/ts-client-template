export default function Highlight({
  text,
  keyword,
}: {
  text: string;
  keyword: string;
}) {
  if (keyword === '') {
    return text;
  }

  return text
    .split(new RegExp(`(${keyword})`, 'gi'))
    .map((c, i) => (c === keyword ? <mark key={i}>{c}</mark> : c));
}
