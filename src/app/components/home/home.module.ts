import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        MaterialModule,
        RouterModule.forChild(routes)
    ],
    providers: []
})

export class HomeModule {}