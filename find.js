const objects = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
const found = objects.find(function(item) {
  return item.id === 'b';
});

<<<<<<< HEAD
console.log(found); // { id: 'b' }
=======
console.log(found);
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43

const objects2 = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
const found2 = objects2.findIndex(function(item) {
  return item.id === 'b';
});

<<<<<<< HEAD
console.log(found2); // 1
=======
console.log(found2);
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43
