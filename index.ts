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

//Access Modifiers in TypeScript

//Encapsulation

//Private vs Public

//By default ts is public so if we don't say different everything is public


class Plant {
    public age: number; // we don't need public but just for demo
    private roots: number; // only accessible inside class
    name: string;

    constructor(age: number, roots: number, name: string){
        this.age = age;
        this.roots = roots;
        this.name = name;
    }
}

class flower extends Plant{
    constructor(data: {age: number, roots: number, name: string}){
        super(data.age, data.roots, data.name);
    }

    // public get ourRoots(){
    //     return this.roots;
    // }
}

// Protected
/* 
It is accessible in class and child classes (like extends) 
but not in implemented class
*/

// Static

class Message1{
    title: string;
    message: string;
    isSent: boolean;
}

class Messages{
    static getValidMessages(messages: Message[]): Message[]{
        return messages.filter((value)=> value.message.trim().length > 0);
    }
}
Messages.getValidMessages([]);

// Readonly
// Prevents overriding the value

class Message2 {
    public readonly id: string;
    title: string;
    message: string;
    isSent: boolean;

    constructor(id: string, message: string){
        this.id = id;
    }
}

const message2 = new Message2("2", "Hey! How are you?");
console.log(message2, message2.id);

// message2.id = "3"; it's readonly so it can't be changed

// Challenge 3: Encapsulation

/* 
1. Use the classes below.
2. Add and appropriate readonly property to the User1 class.
3. Be explicit with your public properties our User1 class.
4. Add an appropriate protected property in User1 and access it
with a private method in Admin.
*/

class User1{
    public readonly id: number;
    public  userName: string;
    public  userEmail: string;
    protected userPassword: string;
    
    // constructor(name: string, email: string, protected password: string){
    //     this.userName = name;
    //     this.userEmail = email;
    //     this.userPassword =  password;
    // }

}

class Admin1 extends User1{
    public pass: string;

    constructor(name: string, email: string){
        super();
        this.userName = name;
        this.userEmail = email;
        this.pass = `password is ${this.getPassword()}`;

    }
    private getPassword(): string{
        return this.userPassword;
    }
}

const admin12 = new Admin1("David", "david@gmail.com");


