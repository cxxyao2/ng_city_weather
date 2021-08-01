import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerSlideComponent } from './trigger-slide.component';

describe('TriggerSlideComponent', () => {
  let component: TriggerSlideComponent;
  let fixture: ComponentFixture<TriggerSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriggerSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
