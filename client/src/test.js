const words = [
  {
    eng: "fast",
    slo: "hitre"
  },
  {
    eng: "modern",
    slo: "moderne"
  },
  {
    eng: "beautiful",
    slo: "privlačne"
  }
]

let used_indexes = [];
const language = "slo";

while(1){
  if (used_indexes.length >= words.length){
    console.log("reset")
    used_indexes = [];
  }

  let availableIndexes = Array.from({ length: words.length }, (_, i) => i + 1);
  availableIndexes = availableIndexes.filter(i => !used_indexes.includes(i));

  const randomIndex = Math.floor(Math.random() * availableIndexes.length);
  const chosenIndex = availableIndexes[randomIndex];

  used_indexes.push(chosenIndex)

  console.log(chosenIndex)

}
