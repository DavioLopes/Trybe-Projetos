import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  static orcCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.orcCount += 1;
  }

  static createdRacesInstances(): number {
    return Orc.orcCount;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }
}