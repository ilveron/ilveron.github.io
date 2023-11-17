import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    ContactsComponent,
    NavbarComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
