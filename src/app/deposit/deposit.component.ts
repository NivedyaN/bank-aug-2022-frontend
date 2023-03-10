import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  eMsg=""
  user=""
  depositForm=this.fb.group({
    amount:['', [Validators.required,Validators.pattern('[0-9]*')]],
    acno:['', [Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['', [Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  })
  msg: any;
  
  constructor( private fb:FormBuilder,private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("username")){
      this.user=localStorage.getItem("username")||''
          }
  }
deposit(){
  if(this.depositForm.valid){
    let acno=this.depositForm.value.acno
    let pswd=this.depositForm.value.pswd
    let amount=this.depositForm.value.amount

    //asynchorous
    this.api.deposit(acno,pswd,amount)
      .subscribe(

        //response 200
        (result: any) => {
          console.log(result);
          this.msg = result.message
          setTimeout(() => {
            this.msg = ""
            alert(result.message)
            //auto refresh
            this.depositForm.reset()
          }, 1000)

      
      },
      // response 4xx
      (result:any)=>{
    this.eMsg= result.error.message
   
      }
      )

  }
  else{
    alert('invalid form')
  }
}



}

