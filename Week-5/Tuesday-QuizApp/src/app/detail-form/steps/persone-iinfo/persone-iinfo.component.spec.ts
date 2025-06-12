import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoneIinfoComponent } from './persone-iinfo.component';

describe('PersoneIinfoComponent', () => {
  let component: PersoneIinfoComponent;
  let fixture: ComponentFixture<PersoneIinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersoneIinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersoneIinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
