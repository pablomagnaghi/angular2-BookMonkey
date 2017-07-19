import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {PricingComponent} from './pricing/pricing.component';
import {FeaturesComponent} from './features/features.component';

const routes: Routes = [
  // Books is a feature with own routes
  {path: '', redirectTo: 'books', pathMatch: 'full'},


  {path: 'about', component: AboutComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'features', component: FeaturesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class FrankenjsRoutingModule {
}
