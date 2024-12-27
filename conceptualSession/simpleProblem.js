const students = [
  {names: 'ojat', avg: 78, fiftyPercent: true},
  {names: 'sojib', avg: 56, fiftyPercent: false},
  {names: 'safi', avg: 45, fiftyPercent: false},
  {names: 'kajol', avg: 60, fiftyPercent: true},
  {names: 'sinthia', avg: 33, fiftyPercent: false},
];


// const findScic =(students) => {
//   const scic = students.filter((marks) => marks.avg >=48 && marks.fiftyPercent);
//   return scic.map(p => p.names);
// }

const findScic = students => students.filter((marks) => marks.avg >=48 && marks.fiftyPercent).map(p => p.names);

const result = findScic(students);
// console.log(result);



//--------------
const polapain = [
  {names: 'abbul', job: 'sorkari', salary: 17000},
  {names: 'kabul ', job: 'besorkari', salary: 27000},
  {names: 'sabul', job: 'sorkari', salary: 30000},
  {names: "babul", job: 'besorkari', salary: 50000},
  {names: 'habul', job: 'sorkari', salary: 36000},
]

const jamai = polapain.filter(person => (person.job === 'sorkari' && person.salary >=20000) ||(person.job === 'besorkari' && person.salary >=30000))
// console.log(jamai);

const lottery = Math.floor(Math.random()*jamai.length);
const jamaiName = jamai[lottery].names;
console.log(jamaiName);


//----------
