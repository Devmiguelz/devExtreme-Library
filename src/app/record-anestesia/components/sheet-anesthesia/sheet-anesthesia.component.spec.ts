import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetAnesthesiaComponent } from './sheet-anesthesia.component';

describe('SheetAnesthesiaComponent', () => {
  let component: SheetAnesthesiaComponent;
  let fixture: ComponentFixture<SheetAnesthesiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheetAnesthesiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetAnesthesiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
