import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ScrollViewComponent } from './scroll-view/scroll-view.component';
import { LanguageSelectComponent } from './header/language-select/language-select.component';
import { SearchComponent } from './landing-page/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VideoMediaComponent } from './video-media/video-media.component';
import { ImageTextComponent } from './image-text/image-text.component';
import { ProductPresentationComponent } from './product-presentation/product-presentation.component';
import { CounterComponent } from './scroll-view/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    LandingPageComponent,
    ScrollViewComponent,
    LanguageSelectComponent,
    SearchComponent,
    VideoMediaComponent,
    ImageTextComponent,
    ProductPresentationComponent,
    CounterComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
