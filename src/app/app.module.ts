import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FrankenjsRoutingModule} from './app-routing.module';
import {BooksModule} from "./books/books.module";
import { NavigationComponent } from './navigation/navigation.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';
import { BookDataService } from './book-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeaturesComponent,
    PricingComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FrankenjsRoutingModule,
    BooksModule
  ],
  providers: [BookDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
