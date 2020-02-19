import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
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
import { FinanceListComponent } from './finance/finance-list/finance-list.component';
import { FinanceItemComponent } from './finance/finance-list/finance-item/finance-item.component';
import { registerLocaleData } from '@angular/common';

import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';

@NgModule({
  declarations: [
    AppComponent,
    FinanceComponent,
    MemberManagementComponent,
    MemberListComponent,
    MemberFormComponent,
    MemberItemComponent,
    FinanceListComponent,
    FinanceItemComponent
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
  providers: [
    {provide: LOCALE_ID, useValue: 'de-DE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(localeDe, 'de-DE', localeDeExtra);
  }
}