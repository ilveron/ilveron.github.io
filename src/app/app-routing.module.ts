import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {AboutComponent} from "./components/about/about.component";
import {PortfolioComponent} from "./components/portfolio/portfolio.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'portfolio', component: PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
