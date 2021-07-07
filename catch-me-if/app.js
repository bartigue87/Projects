// function sum(x, y) {
//   //check data types first and throw error
//   try {
//     if (typeof x != 'number' || typeof y != 'number') {
//       throw new Error('Please enter a number');
//     } else {
//       return x + y;
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// const result = sum('two', 4);
// console.log(result);

// var user = { username: 'sam', password: '123abc' };
// function login(username, password) {
//   //check credentials
// }

const name = 'John';
let age = 101;

function runForLoop(pets) {
  const petObjects = [];
  for (var i = 0; i < pets.length; i++) {
    const pet = { type: pets[i] };
    let name;
    if (pets[i] === 'cat') {
      name = 'fluffy';
    } else {
      name = 'spot';
    }
    console.log('pet name: ', name);
    pet.name = name;
    petObjects.push(pet);
  }
  console.log('man name: ', name);
  return petObjects;
}

runForLoop(['cat', 'dog']);

const carrots = ['bright orange', 'ripe', 'rotten'];

mapVegetables = (arr) => {
  return arr.map((carrot) => (type = 'carrot'), (name = carrot));
};
