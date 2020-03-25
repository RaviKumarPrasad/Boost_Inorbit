import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WebcamModule} from 'ngx-webcam';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'ngx-webstorage-service';


import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { ZudoovComponent } from './zudoov/zudoov.component';
import { SeekerComponent } from './common_templates/seeker/seeker.component';
import { EmployerComponent } from './common_templates/employer/employer.component';
import { TwelnetComponent } from "./Footers/Products/twelnet/twelnet.component";
import { PxCodeComponent } from './Footers/Products/px-code/px-code.component';
import { TeamComponent } from './Footers/About_ProEx/team/team.component';
import { TeamMembersComponent } from './common_templates/team-members/team-members.component';
import { CareerComponent } from './common_templates/career/career.component';
import { ActivityComponent } from './common_templates/activity/activity.component';
import { ProListComponent } from './common_templates/pro-list/pro-list.component';
import { JobsComponent } from './jobs/jobs.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { ThreadingsComponent } from './threadings/threadings.component';
import { ForkComponent } from './fork/fork.component';
import { ProductsComponent } from './products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollectionsComponent } from './common_templates/collections/collections.component';
import { AboutComponent } from './common_templates/about/about.component';
import { PastDesignationsComponent } from './common_templates/past-designations/past-designations.component';
import { SkillsComponent } from './common_templates/skills/skills.component';
import { ProfilePictureComponent } from './common_templates/profile-picture/profile-picture.component';
import { BackgroundPictureComponent } from './common_templates/background-picture/background-picture.component';

import { ProfileService } from './shared_service/profile.service';
import { UserService } from './shared_service/user.service';
import { LandingService } from './shared_service/landing.service';
import { LoginService } from './shared_service/auth_login/login.service';
import { JobSeekerService } from './shared_service/register/job_seeker/job-seeker.service';
import { EmployerService } from './shared_service/register/employer/employer.service';
import { LocalStorageService } from './shared_service/localStorage/local-storage.service';

import { FileSelectorComponent } from './Popups/file-selector/file-selector.component';
import { SimpleTextComponent } from './Popups/simple-text/simple-text.component';
import { VideoRecordingComponent } from './Popups/video-recording/video-recording.component';
import { LandingModule } from './landing/landing.module';
import { SeekerModule } from './common_templates/seeker/seeker.module';
import { ExperienceComponent } from './Popups/experience/experience.component';
import { EducationComponent } from './Popups/education/education.component';
import { ReusableComponent } from './reuseComponents/reusable/reusable.component';
import { LogComponent } from './log/log.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LandingComponent,
    RegisterComponent,
    ZudoovComponent,
    SeekerComponent,
    EmployerComponent,
    TwelnetComponent,
    PxCodeComponent,
    TeamComponent,
    TeamMembersComponent,
    CareerComponent,
    ActivityComponent,
    ProListComponent,
    JobsComponent,
    MailboxComponent,
    MessagesComponent,
    HomeComponent,
    HelpComponent,
    ThreadingsComponent,
    ForkComponent,
    ProductsComponent,
    CollectionsComponent,
    AboutComponent,
    PastDesignationsComponent,
    SkillsComponent,
    ProfilePictureComponent,
    BackgroundPictureComponent,
    FileSelectorComponent,
    SimpleTextComponent,
    VideoRecordingComponent,
    ExperienceComponent,
    EducationComponent,
    ReusableComponent,
    LogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    WebcamModule,
    HttpClientModule,
    StorageServiceModule,
    
  ],
  providers: [ 
    ProfileService, 
    LoginService,
    LandingService, 
    UserService,
    JobSeekerService,
    EmployerService,
    LocalStorageService,

  ],
  bootstrap: [AppComponent],

  entryComponents: [
    CollectionsComponent, 
    ProListComponent, 
    AboutComponent, 
    PastDesignationsComponent, 
    SkillsComponent,
    SeekerComponent,
    ForkComponent,
    ProfilePictureComponent,
    BackgroundPictureComponent,
    FileSelectorComponent,
    SimpleTextComponent,
    VideoRecordingComponent,
    ExperienceComponent,
    EducationComponent,
    
  ]
})
export class AppModule { }
