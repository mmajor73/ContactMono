import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ContactmonoAddressMySuffixModule } from './address-my-suffix/address-my-suffix.module';
import { ContactmonoEmailMySuffixModule } from './email-my-suffix/email-my-suffix.module';
import { ContactmonoPhoneMySuffixModule } from './phone-my-suffix/phone-my-suffix.module';
import { ContactmonoContactMySuffixModule } from './contact-my-suffix/contact-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        ContactmonoAddressMySuffixModule,
        ContactmonoEmailMySuffixModule,
        ContactmonoPhoneMySuffixModule,
        ContactmonoContactMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactmonoEntityModule {}
