export class Player {
  media: HTMLAudioElement | HTMLVideoElement;
  constructor(media: HTMLAudioElement | HTMLVideoElement) {
    this.media = media;
  }

  getMedia() {
    return this.media;
  }

  async play(): Promise<void> {
    if (!this.media.src) {
      throw new Error("");
    }
    await this.media.play();
  }

  pause(): void {
    this.media.pause;
  }

  mute(): void {
    this.media.muted = true;
  }

  unmute(): void {
    this.media.muted = false;
  }

  getCurrentTime(): number {
    return this.media.currentTime;
  }

  getVolume(): number {
    return this.media.volume;
  }

  getSrc(): string {
    return this.media.src;
  }

  setSrc(src: string): void {
    this.media.src = src;
  }

  setVolume(volume: number): void {
    this.media.volume = volume;
  }

  setCurrentTime(time: number): void {
    this.media.currentTime = time;
  }

  isMuted(): Boolean {
    return this.media.muted;
  }

  isPaused(): Boolean {
    return this.media.paused;
  }

  setPlaybackRate(playbackRate: number): void {
    this.media.playbackRate = playbackRate;
    this.media.defaultPlaybackRate = playbackRate;
  }
}
