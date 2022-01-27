import { Player } from "./player";

export class AudioPlayer extends Player {
  audio: HTMLAudioElement;

  constructor(options?) {
    super(new Audio());
    this.audio = this.getMedia();
  }
}
