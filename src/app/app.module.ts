import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FinanceComponent } from './finance/finance.component';
import { MemberManagementComponent } from './member-management/member-management.component';
import { MemberListComponent } from './member-management/member-list/member-list.component';
import { MemberCreateFormComponent } from './member-management/member-create-form/member-create-form.component';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    FinanceComponent,
    MemberManagementComponent,
    MemberListComponent,
    MemberCreateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
