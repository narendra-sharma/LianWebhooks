import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AuditLogComponent } from '../audit-log/audit-log.component';
import { SubscriptionsComponent } from '../subscriptions/subscriptions.component';



@NgModule({
  declarations: [
    HomeComponent,
    SubscriptionsComponent,
    AuditLogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
