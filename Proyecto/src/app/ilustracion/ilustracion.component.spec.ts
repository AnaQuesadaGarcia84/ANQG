import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlustracionComponent } from './ilustracion.component';

describe('IlustracionComponent', () => {
  let component: IlustracionComponent;
  let fixture: ComponentFixture<IlustracionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IlustracionComponent]
    });
    fixture = TestBed.createComponent(IlustracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
