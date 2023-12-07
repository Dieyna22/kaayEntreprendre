import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSecteurComponent } from './gestion-secteur.component';

describe('GestionSecteurComponent', () => {
  let component: GestionSecteurComponent;
  let fixture: ComponentFixture<GestionSecteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionSecteurComponent]
    });
    fixture = TestBed.createComponent(GestionSecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
