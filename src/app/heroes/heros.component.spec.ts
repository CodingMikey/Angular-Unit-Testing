import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component"

describe('HerosComponent', () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      {id:1, name: 'SpiderDude', stregth: 8},
      {id:2, name: 'Wonderful Woman', stregth: 24},
      {id:3, name: 'SuperDude', stregth: 55}
    ]

    mockHeroService = jasmine.createSpyObj(['getHeros', 'addHero', 'deleteHero'])

    component = new HeroesComponent(mockHeroService);
  })

  describe('delete', () => {
    it('should remove the indictaed hero from the heros list', () => {
      mockHeroService.deleteHero.and.returnValue(of(true))
      component.heroes = HEROES;

      component.delete(HEROES[2]);

      expect(component.heroes.length).toBe(2);
    })

    it('should call deleteHero', () => {
      mockHeroService.deleteHero.and.returnValue(of(true))
      component.heroes = HEROES;

      component.delete(HEROES[2]);

      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
    })
  })
})
