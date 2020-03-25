

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent }   from './profile/profile.component';
import { LandingComponent }   from './landing/landing.component';
import { RegisterComponent }  from './register/register.component';
import { ZudoovComponent }    from './zudoov/zudoov.component';
import { TwelnetComponent } from './Footers/Products/twelnet/twelnet.component';
import { PxCodeComponent } from './Footers/Products/px-code/px-code.component';
import { TeamComponent } from './Footers/About_ProEx/team/team.component';
import { SeekerComponent } from './common_templates/seeker/seeker.component';
import { EmployerComponent } from './common_templates/employer/employer.component';
import { CareerComponent } from './common_templates/career/career.component';
import { JobsComponent } from './jobs/jobs.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';
import { ThreadingsComponent } from './threadings/threadings.component';
import { ForkComponent } from './fork/fork.component';


const routes: Routes = [
  { path : "", component: LandingComponent },
  { path : "seeker", component: SeekerComponent },
  { path : "register", component: RegisterComponent },
  { path : "zudoov", component: ZudoovComponent },
  { path : "pxcode", component: PxCodeComponent },
  { path : "team", component: TeamComponent },
  { path : "twelnet", component: TwelnetComponent },
  { path : "employer", component: EmployerComponent },
  
  
  
  { path : "profile", component: ProfileComponent },
  { path : "home", component: HomeComponent },
  { path : "log", component: LogComponent },
  { path : "threadings", component: ThreadingsComponent },
  { path : "fork", component: ForkComponent },
  

  { path : "profile/log", redirectTo: "log" },
  { path : "threadings/profile", redirectTo: "profile" },
  { path : "log/home", redirectTo: "home" },
  { path : "log/profile", redirectTo: "profile" },
  
  { path : "register/seeker", redirectTo:"seeker" },
  { path : "register/employer", redirectTo: "employer" },
  { path : "*/career", component: CareerComponent },
  { path : "*/jobs", component: JobsComponent },
  { path : "*/mailbox", component: MailboxComponent },
  { path : "*/messages", component: MessagesComponent },
  { path : "*/home", component: HomeComponent },
  { path : "*/profile", redirectTo: "profile" },
  

];


@NgModule({
  
  imports: [RouterModule.forRoot(routes, 
                                  //  {enableTracing:true}
                                   {enableTracing:false}
                                )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
