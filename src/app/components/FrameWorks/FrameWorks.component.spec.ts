/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FrameWorksComponent } from './FrameWorks.component';

describe('FrameWorksComponent', () => {
  let component: FrameWorksComponent;
  let fixture: ComponentFixture<FrameWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
