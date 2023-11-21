import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/components/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarComponent } from './modules/dashboard/sidebar/sidebar.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare as farSquare, faCheckSquare as farCheckSquare} from '@fortawesome/free-regular-svg-icons';
import {  faStackOverflow, faGithub, faMedium} from '@fortawesome/free-brands-svg-icons';
import { OutsideClickDirective } from './shared/directives/outside-click.directive';
import { PairsComponent } from './modules/pairs/pairs.component';
import { FeaturedListsComponent } from './modules/pairs/featured-lists/featured-lists.component';
import { CoinCardComponent } from './modules/pairs/featured-lists/coin-card/coin-card.component';
import { CoinPriceComponent } from './shared/components/coin-price/coin-price.component';
import { CoinTableComponent } from './shared/components/coin-table/coin-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    OutsideClickDirective,
    PairsComponent,
    FeaturedListsComponent,
    CoinCardComponent,
    CoinPriceComponent,
    CoinTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faSquare,
      faCheckSquare,
      farSquare,
      farCheckSquare,
      faStackOverflow,
      faGithub,
      faMedium
    );
  }
 }
