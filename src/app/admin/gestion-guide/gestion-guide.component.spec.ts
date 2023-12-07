import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionGuideComponent } from './gestion-guide.component';

describe('GestionGuideComponent', () => {
  let component: GestionGuideComponent;
  let fixture: ComponentFixture<GestionGuideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionGuideComponent]
    });
    fixture = TestBed.createComponent(GestionGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
