import Player from './player';

export default class AudioPlayer extends Player {
  audio: HTMLAudioElement;

  constructor() {
    super(new Audio());
    this.audio = this.getMedia();
  }
}
