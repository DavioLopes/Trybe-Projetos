import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static elfCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.elfCount += 1;
  }

  static createdRacesInstances(): number {
    return Elf.elfCount;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }
}