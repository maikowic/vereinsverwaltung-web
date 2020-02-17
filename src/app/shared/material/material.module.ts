import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatCardModule, MatTableModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatDividerModule, MatIconModule, MatDialogModule } from '@angular/material';


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
    MatDividerModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule,
  ]
})
export class MaterialModule { }
