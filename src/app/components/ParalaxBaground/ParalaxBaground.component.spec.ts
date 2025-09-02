/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParalaxBagroundComponent } from './ParalaxBaground.component';

describe('ParalaxBagroundComponent', () => {
  let component: ParalaxBagroundComponent;
  let fixture: ComponentFixture<ParalaxBagroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParalaxBagroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParalaxBagroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
