import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FinanceComponent } from './finance/finance.component';
import { MemberManagementComponent } from './member-management/member-management.component';
import { MemberListComponent } from './member-management/member-list/member-list.component';
import { MemberFormComponent } from './member-management/member-form/member-form.component';
import { MaterialModule } from './shared/material/material.module';
import { MemberItemComponent } from './member-management/member-list/member-item/member-item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FinanceComponent,
    MemberManagementComponent,
    MemberListComponent,
    MemberFormComponent,
    MemberItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    MemberFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
