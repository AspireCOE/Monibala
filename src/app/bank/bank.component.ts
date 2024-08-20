import { Component } from '@angular/core';
import { Bank } from './bank.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bank',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.css'
})
export class BankComponent {
  typeInput:String="Current";
  getStatus(amount:number):string{
    if(amount>65000){
       return 'loyal';
    }
    else if(amount>=10000 && amount<=65000){
      return 'active';
    }
    else if(amount>=500&&amount<10000){
      return 'inactive';
    }
    else{
      return 'unknown';
    }

   }
  bank:Bank[]=[
    {HolderName:"Ram",accountNumber:48765974561,accountType:"Savings",balance:80000,dateOfJoining:"2007/03/23",status:""},
    {HolderName:"som",accountNumber:88765434861,accountType:"Current",balance:100000,dateOfJoining:"2000/07/28",status:""},
    {HolderName:"geetha",accountNumber:77765486461,accountType:"Joint",balance:73000,dateOfJoining:"2010/09/28",status:""},
    {HolderName:"moni",accountNumber:20765427561,accountType:"Current",balance:62000,dateOfJoining:"1998/02/19",status:""},
    {HolderName:"bala",accountNumber:33765497361,accountType:"Joint",balance:32000,dateOfJoining:"2001/06/12",status:""},
    {HolderName:"monibala",accountNumber:22765428561,accountType:"Savings",balance:98000,dateOfJoining:"1980/01/27",status:""},
    {HolderName:"naina",accountNumber:26765428461,accountType:"Current",balance:92000,dateOfJoining:"1990/06/02",status:""},
    {HolderName:"sameer",accountNumber:99748734561,accountType:"Savings",balance:89000,dateOfJoining:"1970/03/28",status:""},
    {HolderName:"balu",accountNumber:55765389561,accountType:"Savings",balance:65000,dateOfJoining:"1988/09/23",status:""},
    {HolderName:"kane",accountNumber:44765423761,accountType:"Current",balance:91000,dateOfJoining:"1985/07/04",status:""},
    {HolderName:"william",accountNumber:84765895561,accountType:"Business",balance:96000,dateOfJoining:"1975/09/08",status:""},
    {HolderName:"virat",accountNumber:44765432761,accountType:"Student",balance:15000,dateOfJoining:"2008/02/19",status:""},
    {HolderName:"kohli",accountNumber:11765367561,accountType:"Business",balance:50000,dateOfJoining:"1987/03/27",status:""},
    {HolderName:"raj",accountNumber:97765433421,accountType:"NRI",balance:82000,dateOfJoining:"1986/10/23",status:""},
    {HolderName:"Reeta",accountNumber:34665314561,accountType:"Student",balance:20000,dateOfJoining:"2010/11/22",status:""},
    {HolderName:"sasi",accountNumber:23465638561,accountType:"Student",balance:700,dateOfJoining:"2005/12/05",status:""},
    {HolderName:"Sushi",accountNumber:76465309761,accountType:"Student",balance:1600,dateOfJoining:"2008/09/18",status:""}
  ]

}






