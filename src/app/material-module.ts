import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatToolbarModule, MatTabsModule, MatTableModule, MatPaginatorModule
    , MatSortModule, MatInputModule, MatCardModule , MatListModule , MatIconModule , MatTooltipModule
} from '@angular/material';

import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatInputModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatTooltipModule,
        FormsModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatInputModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatTooltipModule,
        FormsModule
    ]
})
export class MaterialModule { }
