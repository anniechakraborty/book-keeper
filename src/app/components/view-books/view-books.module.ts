import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule, Routes } from '@angular/router';
// import { BrowserModule } from '@angular/platform-browser';

import { ViewBooksComponent } from './view-books.component';

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
        // BrowserModule,
        RouterModule.forChild(routes)
    ],
    providers: []
})

export class ViewBooksModule {}