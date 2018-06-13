import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MaterializeModule } from 'angular2-materialize';
import { HomeComponent } from './home/home.component';
import { TestPipe } from './test.pipe';
import { PublicZoneComponent } from './public-zone/public-zone.component';
import { PrivateZoneComponent } from './private-zone/private-zone.component';
import { LoginComponent } from './login/login.component';
import { DemoListComponent } from './demo-list/demo-list.component';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { ServicenameService } from './shared/service/servicename.service';

import { AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { DemoDbFormComponent } from './demo-db-form/demo-db-form.component';
import { DemoDbListComponent } from './demo-db-list/demo-db-list.component';
import { AngularFireStorageModule} from 'angularfire2/storage';
import { DemoUploadComponent } from './demo-upload/demo-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestPipe,
    PublicZoneComponent,
    PrivateZoneComponent,
    LoginComponent,
    DemoListComponent,
    DemoFormComponent,
    DemoDbFormComponent,
    DemoDbListComponent,
    DemoUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule
    // MaterializeModule
  ],
  providers: [ServicenameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
