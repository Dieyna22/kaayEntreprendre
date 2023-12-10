import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEvenComponent } from './detail-even.component';

describe('DetailEvenComponent', () => {
  let component: DetailEvenComponent;
  let fixture: ComponentFixture<DetailEvenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailEvenComponent]
    });
    fixture = TestBed.createComponent(DetailEvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
