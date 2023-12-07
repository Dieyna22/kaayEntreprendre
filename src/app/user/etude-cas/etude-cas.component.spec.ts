import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudeCasComponent } from './etude-cas.component';

describe('EtudeCasComponent', () => {
  let component: EtudeCasComponent;
  let fixture: ComponentFixture<EtudeCasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudeCasComponent]
    });
    fixture = TestBed.createComponent(EtudeCasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
