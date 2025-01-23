import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { AnalyticsService } from './services/analytics.service';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactButtonComponent } from './shared/contact-button/contact-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutMeComponent,
    ProjectsComponent,
    SkillsComponent,
    CertificatesComponent,
    ContactMeComponent,
    ContactButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AnalyticsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
