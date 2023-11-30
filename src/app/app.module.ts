import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedCardComponent } from './shared/shared-card/shared-card.component';
import { TestComponent } from './pages/test/test.component';
import { SwipperCarouselComponent } from './shared/swipper-carousel/swipper-carousel.component';



@NgModule({
  declarations: [AppComponent, SharedCardComponent, TestComponent, SwipperCarouselComponent],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
