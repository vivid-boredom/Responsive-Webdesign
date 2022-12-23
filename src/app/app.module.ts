import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './areas/header/header.component';
import { FooterComponent } from './areas/footer/footer.component';
import { SliderComponent } from './areas/slider/slider.component';
import { LandingPageComponent } from './areas/landing-page/landing-page.component';
import { LanguageSelectComponent } from './areas/header/language-select/language-select.component';
import { SearchComponent } from './areas/landing-page/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageTextComponent } from './areas/image-text/image-text.component';
import { ProductPresentationComponent } from './areas/product-presentation/product-presentation.component';
import { CounterComponent } from './areas/counter/counter.component';
import { ProgressComponent } from './areas/progress/progress.component';
import { StatsComponent } from './areas/stats/stats.component';
import { WarningComponent } from './components/warning/warning.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    LandingPageComponent,
    LanguageSelectComponent,
    SearchComponent,
    ImageTextComponent,
    ProductPresentationComponent,
    CounterComponent,
    ProgressComponent,
    StatsComponent,
    WarningComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
