import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
