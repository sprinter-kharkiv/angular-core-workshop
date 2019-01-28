import { async, TestBed } from '@angular/core/testing';
import { LibsUiLoginModule } from './libs-ui-login.module';

describe('LibsUiLoginModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LibsUiLoginModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LibsUiLoginModule).toBeDefined();
  });
});
