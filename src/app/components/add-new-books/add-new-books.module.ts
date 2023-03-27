import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AddNewBooksComponent } from './add-new-books.component';

const routes: Routes = [
    {
        path: '',
        component: AddNewBooksComponent
    }
];

@NgModule({
    declarations: [
        AddNewBooksComponent
    ],
    imports: [
        FormsModule,
        MaterialModule,
        RouterModule.forChild(routes)
    ],
    providers: []
})

export class AddNewBooksModule {}