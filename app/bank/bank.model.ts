export class Bank{
    HolderName:String;
    accountNumber:number;
    accountType:String;
    balance:number;
    dateOfJoining:String;
    status:String;

    constructor(HolderName:String,accountNumber:number,accountType:String,balance:number,dateOfJoining:String,status:String)
    {
        this.HolderName=HolderName;
        this.accountNumber=accountNumber;
        this.accountType=accountType;
        this.balance=balance;
        this.dateOfJoining=dateOfJoining; 
        this.status=status;
    }
     

}