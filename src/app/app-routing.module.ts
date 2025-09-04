import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { BookSessionComponent } from './book-session/book-session.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  // { path: 'landing', component: LandingPageComponent},
  { path: 'about', component: AboutComponent},
  { path: 'our-services', component: OurServicesComponent},
  { path: 'book-session', component: BookSessionComponent},
  { path: 'contact-us', component: ContactUsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
