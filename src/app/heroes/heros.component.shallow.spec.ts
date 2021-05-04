import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroService } from "../hero.service";
import { HeroComponent } from "../hero/hero.component";

describe('HerosComponent (shallow test)', () => {
  let fixture: ComponentFixture<HeroComponent>;
  let mockHeroService;
  let HEROES;

  beforeEach(() => {
    HEROES = [
      {id:1, name: 'SpiderDude', strength: 8},
      {id:2, name: 'Wonderful Woman', strength: 24},
      {id:3, name: 'SuperDude', strength: 55}
    ]
    mockHeroService = jasmine.createSpyObj(['getHeros', 'addHero', 'deleteHero']);

    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      providers: [
        { provide: HeroService, useValue: mockHeroService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    fixture = TestBed.createComponent(HeroComponent);
  });

  it('should heros correctly from service', () => {
    mockHeroService.getHeros.and.return
    expect(true).toBe(true);
  })
})
