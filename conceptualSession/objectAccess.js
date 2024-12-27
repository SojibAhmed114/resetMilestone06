const person =[
  {name: 'sojib', 
  address: {
    city: 'gaibandha'
  },
  mark: {
    bangla: 15,
    english: 65
  }
  },
  {name: 'safi',
  mark: {
    bangla: 15,
    english: 65
  }
  },
  {name: 'sakil', 
  address: {
    city: 'gaibandha'
  },
  mark: {
    bangla: 15,
    english: 65
  }
  },
]



person.map((a) => {
  const obj = `my name is ${a.name} and my city: ${a?.address?.city || "N/A"}`
  console.log(obj);
});

console.log("A");
Promise.resolve().then(() => console.log("B"));
setTimeout(() => console.log("C"), 0);
console.log("D");