import { Component, Input } from '@angular/core';
import { getCamleCaseString } from '../../../core/constants/pokemon-types';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent {
  @Input() pokemon!: any;
  @Input() speciesData: any;
  @Input() pokemonTypeData: any;

  getCamleCaseString = getCamleCaseString;

  getBaseStats(): any {
    return this.pokemon?.stats
      .map((stat: any) => `${this.getCamleCaseString(stat.stat.name)}: ${stat.base_stat}`)
      .join(', ');
  }

  getMoves(): any {
    return this.pokemon?.moves
      .slice(0, 5) // Limit to first 5 moves for brevity
      .map((move: any) => this.getCamleCaseString(move.move.name))
      .join(', ');
  }

  getAbilities(): any {
    return this.pokemon?.abilities
      .map((item: any) => this.getCamleCaseString(item.ability.name))
      .join(', ');
  }

  getBaseHappiness(): number {
    return this.speciesData?.base_happiness || 0;
  }

  getCaptureRate(): number {
    return this.speciesData?.capture_rate || 0;
  }

  getEggGroups(): string {
    return this.speciesData?.egg_groups
      .map((group: any) => this.getCamleCaseString(group.name))
      .join(', ') || 'Unknown';
  }

  getGrowthRate(): string {
    return this.speciesData?.growth_rate?.name
      ? this.getCamleCaseString(this.speciesData.growth_rate.name)
      : 'Unknown';
  }
} 