let jsonData = 
`{
  "fact": "Cat paws act as tempetature regulators, shock absorbers, hunting and grooming tools, sensors, and more",
  "length": 102
}`;
console.log(jsonData);
let jsonRes = JSON.parse(jsonData);
console.log(jsonRes.fact);
