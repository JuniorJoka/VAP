import Player from './player';

export default class VideoPlayer extends Player {
  video: HTMLVideoElement;

  constructor() {
    super(document.createElement('video'));
    this.video = this.getMedia() as HTMLVideoElement;
  }
}
