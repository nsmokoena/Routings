import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookingsComponent } from './bookings/bookings.component';


import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ConformationComponent } from './conformation/conformation.component';


const appRoutes: Routes = [
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'Bookings',      component: BookingsComponent  },
  { path: 'catalog',      component:  CatalogComponent   },
  { path: 'Home',      component:  HomeComponent   },
  { path: 'conformation',      component:  ConformationComponent },
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    BookingsComponent,
    HomeComponent,
    CatalogComponent,
    ConformationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes)
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
