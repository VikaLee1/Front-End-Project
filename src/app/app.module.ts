import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeroImgComponent } from './hero-img/hero-img.component';
import { HeroTextComponent } from './hero-text/hero-text.component';
import { Albums1Component } from './albums1/albums1.component';
import { Albums2Component } from './albums2/albums2.component';
import { AlbumNikolaComponent } from './album-nikola/album-nikola.component';
import { AlbumViktoriaComponent } from './album-viktoria/album-viktoria.component';
import { AlbumDusanComponent } from './album-dusan/album-dusan.component';
import { AlbumIgorComponent } from './album-igor/album-igor.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { SuccessComponent } from './success/success.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroImgComponent,
    HeroTextComponent,
    Albums1Component,
    Albums2Component,
    AlbumNikolaComponent,
    AlbumViktoriaComponent,
    AlbumDusanComponent,
    AlbumIgorComponent,
    AboutComponent,
    PortfolioComponent,
    FooterComponent,
    ContactComponent,
    TestimonialsComponent,
    CartComponent,
    ShopComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
