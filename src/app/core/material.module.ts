import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatSelectModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule,
	MatCardModule } from '@angular/material';

	@NgModule({
	imports: [MatButtonModule, MatSelectModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule,
		MatCardModule],
	exports: [MatButtonModule, MatSelectModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule,
		MatCardModule]
})
export class MaterialModule { }
