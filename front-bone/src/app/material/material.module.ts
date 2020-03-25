import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material  from '@angular/material'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatDialogModule,
    Material.MatListModule,    
    Material.MatGridListModule,
    Material.MatDatepickerModule,
    Material.MatFormFieldModule,
    Material.MatNativeDateModule,
    Material.MatInputModule,
    Material.MatCheckboxModule,

    

  ],
  exports: [
    CommonModule,    
    Material.MatDialogModule,
    Material.MatListModule,
    Material.MatGridListModule,
    Material.MatMenuModule,
    Material.MatIconModule,
    Material.MatTooltipModule,
    Material.MatCardModule,
    Material.MatProgressBarModule,
    Material.MatDatepickerModule,
    Material.MatFormFieldModule,
    Material.MatNativeDateModule,
    Material.MatInputModule,
    Material.MatCheckboxModule,
    
    
    
  ]

})

export class MaterialModule { }

