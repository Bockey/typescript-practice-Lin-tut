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