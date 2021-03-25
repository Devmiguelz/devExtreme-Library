import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliesMedicinesListComponent } from './supplies-medicines-list.component';

describe('SuppliesMedicinesListComponent', () => {
  let component: SuppliesMedicinesListComponent;
  let fixture: ComponentFixture<SuppliesMedicinesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppliesMedicinesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliesMedicinesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
