import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatCardModule, MatTableModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatButton } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
  ]
})
export class MaterialModule { }
