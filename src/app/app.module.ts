import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrdersService } from './services/orders.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment.prod';
import { FormsModule } from '@angular/forms';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { LoadingAnimationComponent } from './components/loading-animation/loading-animation.component';
import { MapComponent } from './components/map/map.component';
import { MapOfOrdersComponent } from './components/map-of-orders/map-of-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrdersComponent,
    OrderDetailsComponent,
    NotFoundComponent,
    LoginComponent,
    LoadingAnimationComponent,
    MapComponent,
    MapOfOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    TextareaAutosizeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    OrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
