import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static dwarfCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.dwarfCount += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.dwarfCount;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }
}
