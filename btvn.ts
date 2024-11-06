
// Lớp trừu tượng Message
abstract class Message{
    protected recipient:String;
    protected content:String;
    constructor(recipient:String, content:String){
        this.recipient = recipient;
        this.content = content;
    }
    abstract send():void
}

// Lớp SMS kế thừa
class SMSMessage extends Message{
    constructor(recipient:String, content:String){
        super(recipient, content)
    }
    send():void{
        console.log(`Gửi qua SMS: ${this.recipient}:${this.content}`);
    }
}
// Lớp Email kế thừa Message
class EmailMessage extends Message{
    constructor(recipient:String, content:String){
        super(recipient, content)
    }
    send():void{
        console.log(`Gửi qua SMS: ${this.recipient}:${this.content}`);
    }
}
// Lớp user
class User{
    private name:String;
    constructor(name:String){
        this.name = name
    }
    sendMessage(type: "sms" | "email", recipient: String, content: String):void{
        let message: Message
        if(type === "sms"){
            message = new SMSMessage(recipient,content);
        }
        else if(type === "email"){
            message = new EmailMessage(recipient,content);
        }
        else{
            throw new Error("Lỗi tè le");
        }
    }
}
const user = new User("");
user.sendMessage("sms", "1232312312","Chào mừng bạn đến với khóa học F8!");
user.sendMessage("email", "ductoan@gmail.com","nhớ làm bài tập đầy đủ nhé!");