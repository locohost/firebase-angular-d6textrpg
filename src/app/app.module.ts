import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SuperSecretComponent } from './super-secret/super-secret.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { SubscriberPageComponent } from './subscriber-page/subscriber-page.component';

@NgModule({
	declarations: [
		AppComponent,
		SuperSecretComponent,
		UserLoginComponent,
		SubscriberPageComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CoreModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFirestoreModule,
		AngularFireAuthModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
