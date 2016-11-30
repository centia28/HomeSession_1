var Animal = function (name,age,color) {
	if (this instanceof Animal) {
		this.name = name;
		this.age = age;
		this.color = color;
	}
};

Animal.prototype.sayHello = function() {
	return ("Hello, i'm " + this.name + ". I'm a " + this.color +" undefined animal and " + this.agedOf()) ;
};

Animal.prototype.agedOf = function() {
	return "i'm " + this.age + " years old.";
};

//inheritance : Cat is an Animal
function Cat (name,age,color){
	Animal.call(this,name,age,color);

	//Initialize our Cat-specific properties
	this.voice = "Miaw";
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Animal;
Cat.prototype.sayHello = function(){
	return (this.voice + "! I'm " + this.name + ". I'm a " + this.color +" cat and " + this.agedOf()) ;
};

//inheritance : Dog is an Animal
function Dog (name,age,color){
	Animal.call(this,name,age,color);

	//Initialize our Cat-specific properties
	this.voice = "Woof-Woof";
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Animal;
Dog.prototype.sayHello = function(){
	return (this.voice + "! I'm " + this.name + ". I'm a " + this.color +" dog and " + this.agedOf()) ;
};

module.exports = Animal;