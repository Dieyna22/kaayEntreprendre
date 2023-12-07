import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailExperienceComponent } from './detail-experience.component';

describe('DetailExperienceComponent', () => {
  let component: DetailExperienceComponent;
  let fixture: ComponentFixture<DetailExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailExperienceComponent]
    });
    fixture = TestBed.createComponent(DetailExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
