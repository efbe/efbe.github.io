import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';

// pages
import { CarouselCardsComponent } from './article-carousel-cards/carousel-cards.component';
import { MultiLayeredTokensComponent } from './article-multi-layered-tokens/multi-layered-tokens.component';

const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    CarouselCardsComponent,
    MultiLayeredTokensComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    RouterModule.forRoot(routes, { useHash: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
