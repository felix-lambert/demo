// Here the sound variable is properly private to the DOM
// If you use factories, your code will be simpler
// Factories are functions that creates and returns objects
const dog = () => {
  const sound = 'woof';
  return {
<<<<<<< HEAD
    talk: () => console.log(sound), // woof
=======
    talk: () => console.log(sound),
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43
  };
};

const sniffles = dog();
sniffles.talk();
