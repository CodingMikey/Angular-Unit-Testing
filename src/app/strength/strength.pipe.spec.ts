import { StrengthPipe } from "./strength.pipe"

describe('StrengePipe', () => {
  it('should display weak if strength is 5', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(6)).toEqual('5 (weak)');
  })

  it('should display strong if strength is 10', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(10)).toEqual('10 (strong)');
  }
})
