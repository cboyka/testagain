import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CreatePetitionComponent } from './create-petition/create-petition.component';
import { BrowsePetitionsComponent } from './browse-petitions/browse-petitions.component';
import { PetitionDetailComponent } from './petition-detail/petition-detail.component';
import { EditPetitionComponent } from './edit-petition/edit-petition.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { masterFirebaseConfig} from './api-keys';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    CreatePetitionComponent,
    BrowsePetitionsComponent,
    PetitionDetailComponent,
    EditPetitionComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
