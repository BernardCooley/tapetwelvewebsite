import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { PhotosPageComponent } from './pages/photos-page/photos-page.component';
import { VideosPageComponent } from './pages/videos-page/videos-page.component';
import { MusicPageComponent } from './pages/music-page/music-page.component';
import { GigsPageComponent } from './pages/gigs-page/gigs-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { ContactService } from './services/contact/contact.service';
import { environment } from '../environments/environment';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NavComponent } from './components/nav/nav.component';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';

export const firestoreConfig = environment.firestore;
export const firebaseConfig = environment.firebase;


const appRoutes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'news', component: NewsPageComponent},
  {path: 'photos', component: PhotosPageComponent},
  {path: 'videos', component: VideosPageComponent},
  {path: 'music', component: MusicPageComponent},
  {path: 'gigs', component: GigsPageComponent},
  {path: 'contact', component: ContactPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NewsPageComponent,
    PhotosPageComponent,
    VideosPageComponent,
    MusicPageComponent,
    GigsPageComponent,
    ContactPageComponent,
    HeaderComponent,
    FooterComponent,
    NewsletterComponent,
    BookingFormComponent,
    SocialLinksComponent,
    NavComponent,
    BackToTopComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firestoreConfig),
    AngularFirestoreModule,
    Ng2PageScrollModule
  ],
  providers: [
    ContactService
    ],
  bootstrap: [
    AppComponent
    ]
})
export class AppModule { }
