import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubPostComponent } from './github-post.component';

describe('GithubPostComponent', () => {
  let component: GithubPostComponent;
  let fixture: ComponentFixture<GithubPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
