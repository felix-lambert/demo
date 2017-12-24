const saucyTaco = { food: 'taco', sauce: 'hot' };
const edibleTaco = {
  food: 'taco',
  eat: function() {
    console.log('Ate the ', this.food); // Ate the burrito
  },
};

const burrito = { food: 'burrito' };
const edibleSaucyBurrito = Object.assign({}, saucyTaco, edibleTaco, burrito);
console.log(edibleSaucyBurrito.sauce); // hot
edibleSaucyBurrito.eat();
