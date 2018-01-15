import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './core/app-routing.module';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './core/material.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SuperSecretComponent } from './component/super-secret/super-secret.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { SubscriberPageComponent } from './component/subscriber-page/subscriber-page.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TagSelectComponent } from './component/form-component/tag-select/tag-select.component';
import { LinkedCollectionSelectComponent } from './component/form-component/linked-collection-select/linked-collection-select.component';
import { TagSetService } from './service/tag-set.service';
import { LinkedCollectionService } from './service/linked-collection.service';
import { CharacterForm } from './component/form/character-form/character.form';

@NgModule({
	declarations: [
		AppComponent,
		SuperSecretComponent,
		UserLoginComponent,
		SubscriberPageComponent,
		TagSelectComponent,
		CharacterForm,
		LinkedCollectionSelectComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		FormsModule,
		AppRoutingModule,
		CoreModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFirestoreModule,
		AngularFireAuthModule
	],
	providers: [TagSetService, LinkedCollectionService],
	bootstrap: [AppComponent]
})
export class AppModule { }
