import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatToolbarModule, MatTabsModule, MatTableModule, MatPaginatorModule
    , MatSortModule, MatInputModule, MatCardModule , MatListModule , MatIconModule
} from '@angular/material';

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
        MatIconModule
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
        MatIconModule
    ]
})
export class MaterialModule { }
