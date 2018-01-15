import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperSecretComponent } from '../component/super-secret/super-secret.component';
import { SubscriberPageComponent } from '../component/subscriber-page/subscriber-page.component';
import { CharacterForm } from '../component/form/character-form/character.form';

import { AdminGuard } from './admin.guard';
import { CanReadGuard } from './can-read.guard';


const routes: Routes = [
	{ path: 'content', component: SubscriberPageComponent, canActivate: [CanReadGuard] },
	{ path: 'secret', component: SuperSecretComponent, canActivate: [AdminGuard] },
	{ path: 'character', component: CharacterForm }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
