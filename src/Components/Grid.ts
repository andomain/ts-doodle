import ContainerComponent from "./ContainerComponent";
import Settings from "../cfg/Settings";

export default class Grid extends ContainerComponent {
  constructor () {
    super(Settings.grid.width, Settings.grid.height, Settings.grid.color);
  }
}