import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuotesComponent } from './add-quotes.component';

describe('AddQuotesComponent', () => {
  let component: AddQuotesComponent;
  let fixture: ComponentFixture<AddQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQuotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
