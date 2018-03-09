import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactmonoSharedModule } from '../../shared';
import {
    EmailMySuffixService,
    EmailMySuffixPopupService,
    EmailMySuffixComponent,
    EmailMySuffixDetailComponent,
    EmailMySuffixDialogComponent,
    EmailMySuffixPopupComponent,
    EmailMySuffixDeletePopupComponent,
    EmailMySuffixDeleteDialogComponent,
    emailRoute,
    emailPopupRoute,
    EmailMySuffixResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...emailRoute,
    ...emailPopupRoute,
];

@NgModule({
    imports: [
        ContactmonoSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        EmailMySuffixComponent,
        EmailMySuffixDetailComponent,
        EmailMySuffixDialogComponent,
        EmailMySuffixDeleteDialogComponent,
        EmailMySuffixPopupComponent,
        EmailMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        EmailMySuffixComponent,
        EmailMySuffixDialogComponent,
        EmailMySuffixPopupComponent,
        EmailMySuffixDeleteDialogComponent,
        EmailMySuffixDeletePopupComponent,
    ],
    providers: [
        EmailMySuffixService,
        EmailMySuffixPopupService,
        EmailMySuffixResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactmonoEmailMySuffixModule {}
