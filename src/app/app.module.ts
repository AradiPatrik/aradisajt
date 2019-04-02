import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatExpansionModule
} from '@angular/material';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {BadgesComponent} from './landing-page/badges/badges.component';
import {LackoComponent} from './landing-page/lacko/lacko.component';
import {VgBufferingModule} from 'videogular2/buffering';
import {VgControlsModule} from 'videogular2/controls';
import {VgCoreModule} from 'videogular2/core';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {CheesesComponent} from './cheeses/cheeses.component';
import {AppRoutingModule} from './app-routing.module';
import { CheeseComponent } from './cheeses/cheese/cheese.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LandingPageComponent,
    BadgesComponent,
    LackoComponent,
    CheesesComponent,
    CheeseComponent
  ],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
