import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'

//import { AngularFireDatabase } from '@angular/fire/database'


const firebaseConfig = {
  apiKey: "AIzaSyD2neOr00kudmKZdzyQ-MI9dRqHeORNG2o",
  authDomain: "tester-007.firebaseapp.com",
  databaseURL: "https://tester-007.firebaseio.com",
  projectId: "tester-007",
  storageBucket: "tester-007.appspot.com",
  messagingSenderId: "832415368514",
  appId: "1:832415368514:web:92dd13089994438dfd74db",
  measurementId: "G-CL1K744XN0"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //AngularFireDatabase,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
