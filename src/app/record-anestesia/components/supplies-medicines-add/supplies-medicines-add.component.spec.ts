import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliesMedicinesAddComponent } from './supplies-medicines-add.component';

describe('SuppliesMedicinesAddComponent', () => {
  let component: SuppliesMedicinesAddComponent;
  let fixture: ComponentFixture<SuppliesMedicinesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppliesMedicinesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliesMedicinesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
