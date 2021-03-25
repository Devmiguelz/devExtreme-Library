import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordAnestesiaComponent } from './record-anestesia.component';

describe('RecordAnestesiaComponent', () => {
  let component: RecordAnestesiaComponent;
  let fixture: ComponentFixture<RecordAnestesiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordAnestesiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordAnestesiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
