 class Message{
    title: string;
    message: string;
    private _isSent: boolean
    set isSent(value){
        if(value){
            this.deliveryDate = new Date();
        }
        this._isSent = value;
    }
    get isSent(): boolean{
        return this._isSent;
    }
    deliveryDate: Date;

    constructor(title: string, message: string){
        this.title = title;
        this.message = message;
        this.isSent = false;
    }
    get messageStatus(): string{
        const sentMessage = this.isSent ? "Has been sent." : "has not been sent.";

        return `${this.message} | ${sentMessage}`;
    }
    previewMessage(): string{
        return this.title + " " + this.message.slice(0, 7).concat("...");
    }
}

const message = new Message("Hello my friend.", "How are you today?");

message.isSent = true;
console.log(message.previewMessage());
console.log(message.messageStatus);
console.log(message.isSent);
console.log(message.deliveryDate);

//Challenge 

class User{
    firstName: string;
    lastName: string; 
    email: string;

    constructor(firstName: string, lastName: string, email: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    get fullName(): string{
        const fname = "User name is " + this.firstName + " " + this.lastName;
        return fname;
    }
    isMatching(email: string): boolean{
      return this.email === email;
    }
}
const user = new User("Michael", "Jordan", "jordan@nba.com");
console.log(user.fullName);
console.log(user.isMatching("jordan@nba.com"));


//Inheritance in Typescript

// Base/Parent Class

class Animal{
    age: number;
    legs: number;
    name: string;

    constructor(age: number, legs: number, name: string){
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
}

// const dog = new Animal(7, 4, "Beba");

// console.log("My dog has " + dog.legs + " legs." + " She is " + dog.age + " years old, " + "and her name is " + dog.name + "!");

// Derived/Child Class

class Dog extends Animal{
    woof(): string{
        return "WOOF! WOOF! WOOF!"
    }
}

class Cat extends Animal{
    meow(): string{
        return "MEOW! HISS! HISS!"
    }
}

const maca = new Cat(19, 4, "Maca");
const kuca = new Dog(7, 4, "Kuca");

console.log("Name: " + kuca.name + ", Age: " + kuca.age + ", Legs nr: " + kuca.legs + ", Sound: " + kuca.woof());
console.log("Name: " + maca.name + ", Age: " + maca.age + ", Legs nr: " + maca.legs + ", Sound: " + maca.meow());


//Implements - Needs same shape
//Redefine properties and methods (if everythin is not in the same 
// file we wouldn't be able to see those using extends)
//Even it has same shape it isn't child of Animal (extends is)

class Puppy implements Animal{
    age: number;
    legs: number;
    name: string;

    woof(): string{
        return "WOOF! WOOF! WOOF!";
    }
}

//Super()
//With extend if we use constructor we need to use super() also


class Snake extends Animal{
    constructor(data: {age: number; legs: number; name: string;}) {

        super(data.age, data.legs, data.name);
        
    }
    ssss(): string{
        return "SSSS! SSS! SSSS!"
    }
}

// Extends and super() overrides properties and methods from parent class

//Generics

class Username<T>{
    name: string;
    age: number;
    email: string;
    isMale: boolean;
    public classicUserData: T;

    public mergeClassicUser(params: T): void{
        const { name, isMale, age, email} = this;

        this.classicUserData = { name, isMale, age, email, ...params}
    }
}

interface ClassicUser{
    name: { first: string, last: string};
}

interface ClassicUser2 {
    name: {first: string, middle: string, last: string}
}

const user1 = new Username<ClassicUser>();
const user2 = new Username<ClassicUser2>();
user1.mergeClassicUser({name: {first: "Dylan", last: "Israel"}});
user2.mergeClassicUser({name: {first: "Dylan", last: "Israel", middle: "Christopher"}});
console.log(user1);
console.log(user2);
user1.classicUserData.name.first;
user2.classicUserData.name.middle;

//Polymorphism
//is 3 things
/*
1.method / param overriding -> child overrides parent
2.method overloading -> same name methods (JS doesn't support this)
3.interfaces / abstract classes implements
*/

// challenge2: Inheritence
/*
1. Use the FreshUser class below.
2. Create an Admin class that extends FreshUser.
3. Create a Guest class that implements FreshUser.
4. Have both classes below pass firstName, lastName and email in their constructors
 */


class FreshUser {
    firstName: string;
    lastName: string;
    email: string;

    get fullName(): string{
        return `${this.firstName} ${this.lastName}`;
    }

    doesEmailMatch(email: string): boolean{
        return this.email === email;
    }
}

class Admin extends FreshUser{
    constructor(firstName: string, lastName: string, email: string){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    get fullName(): string {
        return `${this.firstName} - Admin`
    }
}
class Guest implements FreshUser{
    firstName: string;
    lastName: string;
    email: string;

    constructor(firstName: string, lastName: string, email: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    get fullName(): string{
        return `${this.firstName} - Guest User`;
    }
    doesEmailMatch(email: string): boolean{
        return this.email === email;
    }
}

const guestUser = new Guest("Steph", "Curry", "steph@3.com");
const adminUser = new Admin("Charles", "Barkley", "charlie@nba.com");
console.log(adminUser, adminUser.fullName);
console.log(guestUser, guestUser.fullName);