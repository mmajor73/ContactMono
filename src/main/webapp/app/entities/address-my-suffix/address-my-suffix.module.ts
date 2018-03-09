import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactmonoSharedModule } from '../../shared';
import {
    AddressMySuffixService,
    AddressMySuffixPopupService,
    AddressMySuffixComponent,
    AddressMySuffixDetailComponent,
    AddressMySuffixDialogComponent,
    AddressMySuffixPopupComponent,
    AddressMySuffixDeletePopupComponent,
    AddressMySuffixDeleteDialogComponent,
    addressRoute,
    addressPopupRoute,
    AddressMySuffixResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...addressRoute,
    ...addressPopupRoute,
];

@NgModule({
    imports: [
        ContactmonoSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        AddressMySuffixComponent,
        AddressMySuffixDetailComponent,
        AddressMySuffixDialogComponent,
        AddressMySuffixDeleteDialogComponent,
        AddressMySuffixPopupComponent,
        AddressMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        AddressMySuffixComponent,
        AddressMySuffixDialogComponent,
        AddressMySuffixPopupComponent,
        AddressMySuffixDeleteDialogComponent,
        AddressMySuffixDeletePopupComponent,
    ],
    providers: [
        AddressMySuffixService,
        AddressMySuffixPopupService,
        AddressMySuffixResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactmonoAddressMySuffixModule {}
