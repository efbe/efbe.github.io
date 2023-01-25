import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Homepage
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CarouselCardsComponent } from './article-carousel-cards/carousel-cards.component';

const routes: Routes = [
  { path:'', component: HomePageComponent, },
  { path: 'article-carousel-card', component: CarouselCardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
