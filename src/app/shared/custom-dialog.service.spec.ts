import { TestBed } from '@angular/core/testing';

import { CustomDialogService } from './custom-dialog.service';

describe('CustomDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomDialogService = TestBed.get(CustomDialogService);
    expect(service).toBeTruthy();
  });
});
