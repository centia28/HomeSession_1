(function(){
  'use strict';
  
  describe("Animal Class: Create a Animal, make it say Hello", function() {

    it("The Animal should be a type of `object`, and an instance of the `Animal` class", function() {
      var animal = new Animal("Zebra",2,"Black");
      expect(typeof animal).toEqual(typeof {});
      expect(animal instanceof Animal).toBeTruthy();
    });

    it("The Animal name, age and color should be a property of the animal", function() {
      var animal  = new Animal('Snake',2, 'Yellow');
      expect(animal.name).toBe('Snake');
      expect(animal.age).toBe(2);
      expect(animal.color).toBe('Yellow');
    });

    it("The dog and the cat should be a type of `object`, and an instance of the `Animal` class", function() {
      var dog = new Dog("Milou",5,"Black");
      var cat = new Cat("Duchess",7,"Orange");
      expect(typeof dog).toEqual(typeof {});
      expect(typeof cat).toEqual(typeof {});
      expect(dog instanceof Animal).toBeTruthy();
      expect(cat instanceof Animal).toBeTruthy();
    });

    it("The cat should have 'Miaw' voice and the dog 'Woof-Woof' voice", function() {
      var dog = new Dog("Milou",5,"Black");
      expect(dog.voice).to.be("Woof-Woof");

      var cat = new Cat("Duchess",7,"Orange");
      expect(cat.voice).to.be("Miaw");
    });

    it("The Dog says hello", function() {
      var dog = new Dog("Milou",5,"Black");
      expect(dog.sayHello()).to.equal("Woof-Woof! I'm Milou. I'm a Black dog and i'm 5 years old.");
    });

    it("The Cat says hello", function() {
      var cat = new Cat("Duchess",7,"Orange");
      expect(cat.sayHello()).to.equal("Miaw! I'm Duchess. I'm a Orange cat and i'm 7 years old.");
    });

  });
})();
