import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilmeDialogComponent } from './add-filme-dialog.component';

describe('AddFilmeDialogComponent', () => {
  let component: AddFilmeDialogComponent;
  let fixture: ComponentFixture<AddFilmeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddFilmeDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddFilmeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
