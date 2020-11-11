import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { CarDetailsComponent } from './component/car-details/car-details.component';
import { CarSearchComponent } from './component/car-search/car-search.component';
import { CarComponent } from './component/car/car.component';
import { MessageComponent } from './component/message/message.component';
import { HttpClientModule } from '@angular/common/http'
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


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
    AppComponent,
    MenuComponent,
    CarDetailsComponent,
    CarSearchComponent,
    CarComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
