import Energy from '../Energy';

export default interface IFighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;

  attack(enemy: IFighter): void;
  special(enemy: IFighter): void;
  levelUp(): void;
  receiveDamage(attackPoint: number): void;
}