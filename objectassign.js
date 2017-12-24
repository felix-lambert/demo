const saucyTaco = { food: 'taco', sauce: 'hot' };
const edibleTaco = {
  food: 'taco',
  eat: function() {
    console.log('Ate the ', this.food);
  },
};

const burrito = { food: 'burrito' };
const edibleSaucyBurrito = Object.assign({}, saucyTaco, edibleTaco, burrito);
console.log(edibleSaucyBurrito.sauce);
edibleSaucyBurrito.eat();
