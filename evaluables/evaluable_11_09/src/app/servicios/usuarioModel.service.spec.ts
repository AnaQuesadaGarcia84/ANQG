/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsuarioModelService } from './usuarioModel.service';

describe('Service: UsuarioModel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioModelService]
    });
  });

  it('should ...', inject([UsuarioModelService], (service: UsuarioModelService) => {
    expect(service).toBeTruthy();
  }));
});
