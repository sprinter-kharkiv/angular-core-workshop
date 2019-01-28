import { async, TestBed } from '@angular/core/testing';
import { LibsUiToolbarModule } from './libs-ui-toolbar.module';

describe('LibsUiToolbarModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LibsUiToolbarModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LibsUiToolbarModule).toBeDefined();
  });
});
