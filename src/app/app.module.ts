import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './core/app-routing.module';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './core/material.module';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { SuperSecretComponent } from './component/super-secret/super-secret.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { SubscriberPageComponent } from './component/subscriber-page/subscriber-page.component';
import { TagSelectComponent } from './component/form-component/tag-select/tag-select.component';
import { LinkedDocSelectComponent } from './component/form-component/linked-doc-select/linked-doc-select.component';
// Services
import { TagSetService } from './service/tag-set.service';
import { LinkedDocService } from './service/linked-doc.service';
import { ToolService } from './service/tool.service';
// Forms
import { CharacterForm } from './component/form/character-form/character.form';

@NgModule({
	declarations: [
		AppComponent,
		SuperSecretComponent,
		UserLoginComponent,
		SubscriberPageComponent,
		TagSelectComponent,
		CharacterForm,
		LinkedDocSelectComponent
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
	providers: [TagSetService, LinkedDocService, ToolService],
	bootstrap: [AppComponent]
})
export class AppModule { }
