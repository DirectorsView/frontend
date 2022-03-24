import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSelectionComponent } from './chat-selection.component';

describe('ChatSelectionComponent', () => {
  let component: ChatSelectionComponent;
  let fixture: ComponentFixture<ChatSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatSelectionComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
