﻿import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PortalComponent } from './portal.component';

//import { HeaderComponent } from '../../components/modules/portal/header/header.component';
//import { FeaturesComponent } from '../../components/modules/portal/features/features.component';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: PortalComponent }])
    ],
    exports: [RouterModule],
    declarations: [
        PortalComponent,
        //HeaderComponent,
        //FeaturesComponent
    ]
})

export class PortalModule { }   