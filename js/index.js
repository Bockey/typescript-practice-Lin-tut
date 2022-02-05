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
