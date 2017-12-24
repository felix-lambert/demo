const dragon = name => size => element =>
  name + 'is a ' + size + ' dragon that breathes ' + element + '!';

<<<<<<< HEAD
// fluffykinsis a tiny dragon that breathes lightning!
=======
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43
console.log(dragon('fluffykins')('tiny')('lightning'));

const fluffykinsDragon = dragon('fluffykins');
const tinyDragon = fluffykinsDragon('tiny');

<<<<<<< HEAD
// fluffykinsis a tiny dragon that breathes lightning!
=======
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43
console.log(tinyDragon('lightning'));

const dragons = [
  { name: 'fluffykins', element: 'lightning' },
  { name: 'noomi', element: 'lightning' },
  { name: 'karo', element: 'fire' },
  { name: 'doomer', element: 'timewarp' },
];

const hasElement = (element, obj) => obj.element === element;

const lightningDragons = dragons.filter(x => hasElement('lightning', x));

<<<<<<< HEAD
// [ 
//  { name: 'fluffykins', element: 'lightning' },
//  { name: 'noomi', element: 'lightning' } 
// ]
=======
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43
console.log(lightningDragons);

