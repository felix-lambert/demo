// there are things that recursion can do that loop cannot
const animals = [
  { id: 'animals', parent: null },
  { id: 'mammals', parent: 'animals' },
  { id: 'cats', parent: 'mammals' },
  { id: 'dogs', parent: 'mammals' },
  { id: 'chihuahua', parent: 'dogs' },
  { id: 'labrador', parent: 'dogs' },
  { id: 'persian', parent: 'cats' },
  { id: 'siamese', parent: 'cats' },
];

const makeTree = (categories, parent) => {
  const node = {};
  categories
    .filter(c => c.parent === parent)
    .forEach(c => (node[c.id] = makeTree(categories, c.id)));
  return node;
};

<<<<<<< HEAD
// {
//   "animals": {
//     "mammals": {
//       "cats": {
//         "persian": {},
//         "siamese": {}
//       },
//       "dogs": {
//         "chihuahua": {},
//         "labrador": {}
//       }
//     }
//   }
// }
=======
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43
console.log(JSON.stringify(makeTree(animals, null), null, 2));
