import { ContainerComponent } from '@/types';
import { Settings } from '@/cfg';

export class Grid extends ContainerComponent {
  constructor () {
    super(Settings.grid.width, Settings.grid.height, Settings.grid.color);
  }
}