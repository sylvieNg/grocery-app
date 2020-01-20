import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HeaderComponent, 
        LoadingComponent
    ],
    exports: [
        HeaderComponent, 
        LoadingComponent
    ]
})
export class GeneralModule { }
