import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirObraComponent } from './subir-obra.component';

describe('SubirObraComponent', () => {
  let component: SubirObraComponent;
  let fixture: ComponentFixture<SubirObraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubirObraComponent]
    });
    fixture = TestBed.createComponent(SubirObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
