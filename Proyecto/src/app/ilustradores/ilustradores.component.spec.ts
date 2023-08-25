import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlustradoresComponent } from './ilustradores.component';

describe('IlustradoresComponent', () => {
  let component: IlustradoresComponent;
  let fixture: ComponentFixture<IlustradoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IlustradoresComponent]
    });
    fixture = TestBed.createComponent(IlustradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
