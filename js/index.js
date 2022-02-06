var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Message = /** @class */ (function () {
    function Message(title, message) {
        this.title = title;
        this.message = message;
        this.isSent = false;
    }
    Object.defineProperty(Message.prototype, "isSent", {
        get: function () {
            return this._isSent;
        },
        set: function (value) {
            if (value) {
                this.deliveryDate = new Date();
            }
            this._isSent = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Message.prototype, "messageStatus", {
        get: function () {
            var sentMessage = this.isSent ? "Has been sent." : "has not been sent.";
            return "".concat(this.message, " | ").concat(sentMessage);
        },
        enumerable: false,
        configurable: true
    });
    Message.prototype.previewMessage = function () {
        return this.title + " " + this.message.slice(0, 7).concat("...");
    };
    return Message;
}());
var message = new Message("Hello my friend.", "How are you today?");
message.isSent = true;
console.log(message.previewMessage());
console.log(message.messageStatus);
console.log(message.isSent);
console.log(message.deliveryDate);
//Challenge 
var User = /** @class */ (function () {
    function User(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            var fname = "User name is " + this.firstName + " " + this.lastName;
            return fname;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.isMatching = function (email) {
        return this.email === email;
    };
    return User;
}());
var user = new User("Michael", "Jordan", "jordan@nba.com");
console.log(user.fullName);
console.log(user.isMatching("jordan@nba.com"));
//Inheritance in Typescript
// Base/Parent Class
var Animal = /** @class */ (function () {
    function Animal(age, legs, name) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
    return Animal;
}());
// const dog = new Animal(7, 4, "Beba");
// console.log("My dog has " + dog.legs + " legs." + " She is " + dog.age + " years old, " + "and her name is " + dog.name + "!");
// Derived/Child Class
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.woof = function () {
        return "WOOF! WOOF! WOOF!";
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.meow = function () {
        return "MEOW! HISS! HISS!";
    };
    return Cat;
}(Animal));
var maca = new Cat(19, 4, "Maca");
var kuca = new Dog(7, 4, "Kuca");
console.log("Name: " + kuca.name + ", Age: " + kuca.age + ", Legs nr: " + kuca.legs + ", Sound: " + kuca.woof());
console.log("Name: " + maca.name + ", Age: " + maca.age + ", Legs nr: " + maca.legs + ", Sound: " + maca.meow());
//Implements - Needs same shape
//Redefine properties and methods (if everythin is not in the same 
// file we wouldn't be able to see those using extends)
//Even it has same shape it isn't child of Animal (extends is)
var Puppy = /** @class */ (function () {
    function Puppy() {
    }
    Puppy.prototype.woof = function () {
        return "WOOF! WOOF! WOOF!";
    };
    return Puppy;
}());
//Super()
//With extend if we use constructor we need to use super() also
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(data) {
        return _super.call(this, data.age, data.legs, data.name) || this;
    }
    Snake.prototype.ssss = function () {
        return "SSSS! SSS! SSSS!";
    };
    return Snake;
}(Animal));
// Extends and super() overrides properties and methods from parent class
//Generics
var Username = /** @class */ (function () {
    function Username() {
    }
    Username.prototype.mergeClassicUser = function (params) {
        var _a = this, name = _a.name, isMale = _a.isMale, age = _a.age, email = _a.email;
        this.classicUserData = __assign({ name: name, isMale: isMale, age: age, email: email }, params);
    };
    return Username;
}());
var user1 = new Username();
var user2 = new Username();
user1.mergeClassicUser({ name: { first: "Dylan", last: "Israel" } });
user2.mergeClassicUser({ name: { first: "Dylan", last: "Israel", middle: "Christopher" } });
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
var FreshUser = /** @class */ (function () {
    function FreshUser() {
    }
    Object.defineProperty(FreshUser.prototype, "fullName", {
        get: function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        },
        enumerable: false,
        configurable: true
    });
    FreshUser.prototype.doesEmailMatch = function (email) {
        return this.email === email;
    };
    return FreshUser;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(firstName, lastName, email) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.email = email;
        return _this;
    }
    Object.defineProperty(Admin.prototype, "fullName", {
        get: function () {
            return "".concat(this.firstName, " - Admin");
        },
        enumerable: false,
        configurable: true
    });
    return Admin;
}(FreshUser));
var Guest = /** @class */ (function () {
    function Guest(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    Object.defineProperty(Guest.prototype, "fullName", {
        get: function () {
            return "".concat(this.firstName, " - Guest User");
        },
        enumerable: false,
        configurable: true
    });
    Guest.prototype.doesEmailMatch = function (email) {
        return this.email === email;
    };
    return Guest;
}());
var guestUser = new Guest("Steph", "Curry", "steph@3.com");
var adminUser = new Admin("Charles", "Barkley", "charlie@nba.com");
console.log(adminUser, adminUser.fullName);
console.log(guestUser, guestUser.fullName);
