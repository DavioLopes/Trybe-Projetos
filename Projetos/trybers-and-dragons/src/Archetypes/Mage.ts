import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  static mageCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.mageCount += 1;
  }

  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number { return Mage.mageCount; }
}