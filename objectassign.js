const saucyTaco = { food: 'taco', sauce: 'hot' };
const edibleTaco = {
  food: 'taco',
  eat: function() {
<<<<<<< HEAD
    console.log('Ate the ', this.food); // Ate the burrito
=======
    console.log('Ate the ', this.food);
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43
  },
};

const burrito = { food: 'burrito' };
const edibleSaucyBurrito = Object.assign({}, saucyTaco, edibleTaco, burrito);
<<<<<<< HEAD
console.log(edibleSaucyBurrito.sauce); // hot
=======
console.log(edibleSaucyBurrito.sauce);
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43
edibleSaucyBurrito.eat();
