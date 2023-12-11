import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRessourceComponent } from './user-ressource.component';

describe('UserRessourceComponent', () => {
  let component: UserRessourceComponent;
  let fixture: ComponentFixture<UserRessourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRessourceComponent]
    });
    fixture = TestBed.createComponent(UserRessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
