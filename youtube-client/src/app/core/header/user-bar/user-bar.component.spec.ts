import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../material/material.module';
import { AuthService } from '../../services/auth.service';

import { UserBarComponent } from './user-bar.component';

describe('UserBarComponent', () => {
  let component: UserBarComponent;
  let fixture: ComponentFixture<UserBarComponent>;

  const fakeAuthService = {
    checkUser: () => {},
    isLoggedIn: { value: '' },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserBarComponent],
      imports: [RouterTestingModule, MaterialModule, FormsModule],
      providers: [{ provide: AuthService, useValue: fakeAuthService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('ngOnInit should call authService.check()', () => {
    const result = spyOn(fakeAuthService, 'checkUser');
    component.ngOnInit();
    expect(result).toHaveBeenCalled();
  });
});
