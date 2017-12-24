const dragon = name => size => element =>
  name + 'is a ' + size + ' dragon that breathes ' + element + '!';

console.log(dragon('fluffykins')('tiny')('lightning'));

const fluffykinsDragon = dragon('fluffykins');
const tinyDragon = fluffykinsDragon('tiny');

console.log(tinyDragon('lightning'));

const dragons = [
  { name: 'fluffykins', element: 'lightning' },
  { name: 'noomi', element: 'lightning' },
  { name: 'karo', element: 'fire' },
  { name: 'doomer', element: 'timewarp' },
];

const hasElement = (element, obj) => obj.element === element;

const lightningDragons = dragons.filter(x => hasElement('lightning', x));

console.log(lightningDragons);

