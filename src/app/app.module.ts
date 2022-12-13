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
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
