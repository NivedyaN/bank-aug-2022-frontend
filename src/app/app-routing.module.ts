import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositComponent } from './deposit/deposit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
//login
{
  path:'' , component: LoginComponent
},
// dashboard
{
  path:'dashboard' , component:DashboardComponent
},
{
  path:'register' , component:RegisterComponent
},
{
  path:'deposit' , component:DepositComponent
},
{
  path:'withdraw' , component:WithdrawComponent
},
{
  path:'transaction' , component:TransactionComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
