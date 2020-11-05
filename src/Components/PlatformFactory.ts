import Settings from "../cfg/Settings";
import Platform from "./Platform";

export default class PlatformFactory {
  static newPlatform(bottom = (Settings.grid.height / Settings.game.platformCount) * Settings.game.platformCount) {
    const left = Math.random() * (Settings.grid.width - Settings.platform.width);
    return new Platform(left, bottom);
  }
}