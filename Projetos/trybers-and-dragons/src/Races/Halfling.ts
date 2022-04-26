import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static halflingCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.halflingCount += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.halflingCount;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }
}