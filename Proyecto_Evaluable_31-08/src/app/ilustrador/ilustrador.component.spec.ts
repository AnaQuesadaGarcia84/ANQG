import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlustradorComponent } from './ilustrador.component';

describe('IlustradorComponent', () => {
  let component: IlustradorComponent;
  let fixture: ComponentFixture<IlustradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IlustradorComponent]
    });
    fixture = TestBed.createComponent(IlustradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
