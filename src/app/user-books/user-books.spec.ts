import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBooks } from './user-books';

describe('BookInfoComponent', () => {
  let component: UserBooks;
  let fixture: ComponentFixture<UserBooks>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBooks]
    });
    fixture = TestBed.createComponent(UserBooks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
