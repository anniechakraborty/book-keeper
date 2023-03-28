import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule, Routes } from '@angular/router';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { ViewBooksComponent } from './view-books.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
    {
        path: '',
        component: ViewBooksComponent
    }
];

@NgModule({
    declarations: [
        ViewBooksComponent
    ],
    imports: [
        MaterialModule,
        HttpClientModule,
        CommonModule,
        // BrowserModule,
        RouterModule.forChild(routes)
    ],
    providers: []
})

export class ViewBooksModule {}