import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Homepage
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CarouselCardsComponent } from './article-carousel-cards/carousel-cards.component';
import { MultiLayeredTokensComponent } from './article-multi-layered-tokens/multi-layered-tokens.component';

const routes: Routes = [
  { path:'', component: HomePageComponent, },
  { path: 'article-carousel-card', component: CarouselCardsComponent },
  { path: 'article-multi-layered-tokens', component: MultiLayeredTokensComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
