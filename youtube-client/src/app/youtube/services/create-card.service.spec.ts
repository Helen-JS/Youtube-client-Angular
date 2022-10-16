import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { CreateCardService } from './create-card.service';

describe('CreateCardService', () => {
  let service: CreateCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), ReactiveFormsModule],
    });
    service = TestBed.inject(CreateCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
