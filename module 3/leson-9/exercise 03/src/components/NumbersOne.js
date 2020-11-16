const listNumbers = [1, 2, 4, 6, 8, 10, 12];

function Numbers() {
  return listNumbers.map((each, i) => <li key={i}>{each}</li>);
}

export default Numbers;
