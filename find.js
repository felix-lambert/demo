const objects = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
const found = objects.find(function(item) {
  return item.id === 'b';
});

console.log(found);

const objects2 = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
const found2 = objects2.findIndex(function(item) {
  return item.id === 'b';
});

console.log(found2);
