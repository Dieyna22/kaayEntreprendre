import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilEntrepreneurComponent } from './accueil-entrepreneur.component';

describe('AccueilEntrepreneurComponent', () => {
  let component: AccueilEntrepreneurComponent;
  let fixture: ComponentFixture<AccueilEntrepreneurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilEntrepreneurComponent]
    });
    fixture = TestBed.createComponent(AccueilEntrepreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
