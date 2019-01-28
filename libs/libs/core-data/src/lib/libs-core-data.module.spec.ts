import { async, TestBed } from '@angular/core/testing';
import { LibsCoreDataModule } from './libs-core-data.module';

describe('LibsCoreDataModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LibsCoreDataModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LibsCoreDataModule).toBeDefined();
  });
});
