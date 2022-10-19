import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumDusanComponent } from './album-dusan/album-dusan.component';
import { AlbumIgorComponent } from './album-igor/album-igor.component';
import { AlbumNikolaComponent } from './album-nikola/album-nikola.component';
import { AlbumViktoriaComponent } from './album-viktoria/album-viktoria.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HeroImgComponent } from './hero-img/hero-img.component';
import { HeroTextComponent } from './hero-text/hero-text.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { SuccessComponent } from './success/success.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent,
  },
  
  {
    path:"couples",
    component: AlbumIgorComponent
  },
  {
    path:"people",
    component: AlbumViktoriaComponent
  },
  {
    path:"travel",
    component: AlbumDusanComponent
  },
  {
    path:"dogs",
    component: AlbumNikolaComponent
  },

  {
    path: "testimonials",
    component: TestimonialsComponent
  },

  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },

  {
    path:"cart",
    component:CartComponent
  },

 {
  path:"success",
  component: SuccessComponent
 },

 {
  path:"shop",
  component: ShopComponent
 }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
