import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionForumComponent } from './gestion-forum.component';

describe('GestionForumComponent', () => {
  let component: GestionForumComponent;
  let fixture: ComponentFixture<GestionForumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionForumComponent]
    });
    fixture = TestBed.createComponent(GestionForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
