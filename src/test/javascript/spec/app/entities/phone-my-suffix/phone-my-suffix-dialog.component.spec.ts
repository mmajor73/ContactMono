/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { ContactmonoTestModule } from '../../../test.module';
import { PhoneMySuffixDialogComponent } from '../../../../../../main/webapp/app/entities/phone-my-suffix/phone-my-suffix-dialog.component';
import { PhoneMySuffixService } from '../../../../../../main/webapp/app/entities/phone-my-suffix/phone-my-suffix.service';
import { PhoneMySuffix } from '../../../../../../main/webapp/app/entities/phone-my-suffix/phone-my-suffix.model';
import { ContactMySuffixService } from '../../../../../../main/webapp/app/entities/contact-my-suffix';

describe('Component Tests', () => {

    describe('PhoneMySuffix Management Dialog Component', () => {
        let comp: PhoneMySuffixDialogComponent;
        let fixture: ComponentFixture<PhoneMySuffixDialogComponent>;
        let service: PhoneMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [ContactmonoTestModule],
                declarations: [PhoneMySuffixDialogComponent],
                providers: [
                    ContactMySuffixService,
                    PhoneMySuffixService
                ]
            })
            .overrideTemplate(PhoneMySuffixDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(PhoneMySuffixDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(PhoneMySuffixService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new PhoneMySuffix(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(new HttpResponse({body: entity})));
                        comp.phone = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'phoneListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new PhoneMySuffix();
                        spyOn(service, 'create').and.returnValue(Observable.of(new HttpResponse({body: entity})));
                        comp.phone = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'phoneListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
