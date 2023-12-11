import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCasComponent } from './detail-cas.component';

describe('DetailCasComponent', () => {
  let component: DetailCasComponent;
  let fixture: ComponentFixture<DetailCasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailCasComponent]
    });
    fixture = TestBed.createComponent(DetailCasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
