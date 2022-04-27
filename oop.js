class Animal {
    constructor(color, leg_number) {
        this._color = color;
        this._leg_number = leg_number;
    }

    move() {
        return `I'm moving with ${this.leg_number} legs!`;
    }

    get color() {
        return this._color;
    }

    get leg_number() {
        return this._leg_number;
    }
}

//Assume all cats have 4 legs, thus expose only color to the constructor
class Cat extends Animal {
    constructor(color) {
        super(color, 4);
    }
}

class Bug extends Animal {
    constructor(color, leg_number) {
        super(color, leg_number);
    }
}

//Assume all birds have 2 legs, thus expose only color and optional wing_number to the constructor
//Assume birds need >=2 wings to fly
class Bird extends Animal {
    constructor(color, wing_number = 0) {
        super(color, 2);
        this._wing_number = wing_number;
    }

    get wing_number() {
        return this._wing_number;
    }

    move() {
        return this.wing_number >= 2 ? "I am flying!" : super.move();
    }
}