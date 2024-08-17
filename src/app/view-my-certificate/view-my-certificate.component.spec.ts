import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyCertificateComponent } from './view-my-certificate.component';

describe('ViewMyCertificateComponent', () => {
  let component: ViewMyCertificateComponent;
  let fixture: ComponentFixture<ViewMyCertificateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMyCertificateComponent]
    });
    fixture = TestBed.createComponent(ViewMyCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
