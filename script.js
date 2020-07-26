var people = ["Abbey Mashore", "Abby Fischler", "Ale Torres", "Alejandra Martinez-Juarez", "Alyssa Kaufman", "Amy Wu", "Angeline Pho", "Bernice Tran", "Cammie", "Caro", "Caro Pesqueira", "Charlotte Kim", "Chase Dodge", "Deborah Massawe", "Dominique Dallas", "Egesi", "Erin Dickman", "Esme Martin", "Fernanda", "Genevieve Chin", "Grace Krumplitsch", "Grace Lee", "Hanna Mofid", "Jade Loveland", "Jessica Wang", "Katie Phan", "Kimberly Camarillo", "Lilian Zhu", "Macy Huang", "Mahathi Ryali", "Megan Nephshinsky", "Mia", "Nona Nersisyan", "Raylene Faerber", "Siri Kopparapu", "Skye", "Valerie", "Veronica Lopez", "Wendy Su", "Yongqi Kuang", "Yulianna Reyes"];

var colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

var group = Math.round(people.length/colors.length);
var sorted = {};
var extra = people.length % colors.length;

//creates empty arrays for each color
colors.forEach(function(color){
  sorted[color] = [];
})

var numbers = [];
for(var i = 0; i < people.length; i ++) {
  numbers.push(Math.round(Math.random() * 5 + 1));
}


for(var i = 0; i < people.length; i ++) {
  if(numbers[i] === 1 && sorted.Red.length < group) {
    sorted.Red.push(people[i]);
  }
  else if(numbers[i] === 2 && sorted.Orange.length < group) {
    sorted.Orange.push(people[i]);
  }
  else if(numbers[i] === 3 && sorted.Yellow.length < group) {
    sorted.Yellow.push(people[i]);
  } 
  else if(numbers[i] === 4 && sorted.Green.length < group) {
    sorted.Green.push(people[i]);
  }
  else if(numbers[i] === 5 && sorted.Blue.length < group) {
    sorted.Blue.push(people[i]);
  }
  else if(numbers[i] === 6 && sorted.Purple.length < group) {
    sorted.Purple.push(people[i]);
  }
  else {
    continue;
  }
}
console.log(group);

// for(var i = extra; i > 0; i --) {
//   numbers[i] = Math.round(Math.random()*(5) + 1);
//   if(numbers[i] === 1 && sorted.Red.length <= group) {
//     sorted.Red.push(people[i]);
//   }
//   else if(numbers[i] === 2 && sorted.Orange.length <= group) {
//     sorted.Orange.push(people[i]);
//   }
//   else if(numbers[i] === 3 && sorted.Yellow.length <= group) {
//     sorted.Yellow.push(people[i]);
//   } 
//   else if(numbers[i] === 4 && sorted.Green.length <= group) {
//     sorted.Green.push(people[i]);
//   }
//   else if(numbers[i] === 5 && sorted.Blue.length <= group) {
//     sorted.Blue.push(people[i]);
//   }
//   else if(numbers[i] === 6 && sorted.Purple.length <= group) {
//     sorted.Purple.push(people[i]);
//   }
//   else {
//     continue;
//   }
// }
var person = 0;
while(extra > 0) {
  //  person = Math.round(Math.random()*5 + 1);
  //  sorted[colors[extra-1]].push(people[person]);
  if(person === 1 && sorted.Red.length < group) {
    sorted.Red.push(people[extra]);
  }
  else if(person === 2 && sorted.Orange.length < group) {
    sorted.Orange.push(people[extra]);
  }
  else if(person === 3 && sorted.Yellow.length < group) {
    sorted.Yellow.push(people[extra]);
  } 
  else if(person === 4 && sorted.Green.length < group) {
    sorted.Green.push(people[extra]);
  }
  else if(person === 5 && sorted.Blue.length < group) {
    sorted.Blue.push(people[extra]);
  }
  else if(person === 6 && sorted.Purple.length < group) {
    sorted.Purple.push(people[extra]);
  }
  extra --;
}


console.log(numbers.length);
console.log(sorted.Red.length + sorted.Orange.length + sorted.Yellow.length + sorted.Green.length + sorted.Blue.length + sorted.Purple.length);
console.log(people.length);

console.log(sorted);