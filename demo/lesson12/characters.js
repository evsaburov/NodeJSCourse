let characters = [
  { name: 'Frodo', hasRing: false },
  { name: 'Bilbo', hasRing: false }
];

function stealRing(characters, owner){
  return characters.map(c => {
    if (c.name == owner){
      c.hasRing = true;
    }else{
      c.hasRing = false;
    }
  });
}

// стандартный экпорт
module.exports = { characters, stealRing };



// ---------------------------------------------------
console.log('Загружено characters.js');

// В эксопрте можно передать объект, функцию, класс
// а потом экспортировать
module.exports = function log(name){
  console.log(name);
};