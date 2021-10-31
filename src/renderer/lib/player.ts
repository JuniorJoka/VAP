class AudioPlayer {
  audio: HTMLAudioElement;

  constructor(options?) {
    this.audio = new Audio();
  }
  async play() {
    if (!this.audio.src) throw Error("Trying to play a track but no audio.src is defined");

    await this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  mute() {
    this.audio.muted = true;
  }

  unmute() {
    this.audio.muted = false;
  }

  getAudio() {
    return this.audio;
  }

  getCurrentTime() {
    return this.audio.currentTime;
  }

  getVolume() {
    return this.audio.volume;
  }

  getSrc() {
    return this.audio.src;
  }

  setAudioVolume(volume: number) {
    this.audio.volume = volume;
  }

  setAudioPlaybackRate(playbackRate: number) {
    this.audio.playbackRate = playbackRate;
    this.audio.defaultPlaybackRate = playbackRate;
  }

  setAudioSrc(src: string) {
    this.audio.src = src;
  }

  isPaused() {
    return this.audio.paused;
  }

  isMuted() {
    return this.audio.muted;
  }

  setAudioCurrentTime(currentTime: number) {
    this.audio.currentTime = currentTime;
  }
}
