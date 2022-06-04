export default class Audio {
  audioContext: AudioContext;
  source: AudioBufferSourceNode | null;
  buffer: AudioBuffer | null;
  startTime: number;
  stopTime: number;
  nodes: AudioNode[];
  playing: boolean;
  paused: boolean;
  repeat: boolean;

  constructor(context: AudioContext) {
    this.audioContext = context;
    this.source = null;
    this.buffer = null;
    this.startTime = 0;
    this.stopTime = 0;
    this.nodes = [];
    this.playing = false;
    this.paused = false;
    this.repeat = false;
  }

  load(src: string | AudioBuffer | ArrayBuffer) {
    if (typeof src === 'string') {
      return this.loadUrl(src);
    } else if (src instanceof ArrayBuffer) {
      return this.loadData(src);
    } else if (src instanceof AudioBuffer) {
      return this.loadBuffer(src);
    }

    throw new Error(`Invalid source: ${typeof src}`);
  }

  // Loads a url via AJAX
  async loadUrl(url: string) {
    const response = (await fetch(url)) as unknown as ArrayBuffer;
    return this.loadData(response);
  }

  unload() {
    if (this.source) {
      this.stop();
      this.source = null;
      this.buffer = null;
    }
  }

  // Decodes an ArrayBuffer into an AudioBuffer
  async loadData(data: ArrayBuffer) {
    const buffer = await this.audioContext.decodeAudioData(data);
    return this.loadBuffer(buffer);
  }

  // Loads an AudioBuffer
  loadBuffer(buffer: AudioBuffer) {
    this.buffer = buffer;
  }

  addNode(node: AudioNode) {
    if (this.nodes.indexOf(node) < 0) {
      this.nodes.push(node);
    }
  }

  removeNode(node: AudioNode) {
    const index = this.nodes.indexOf(node);

    if (index > -1) {
      this.nodes.splice(index, 1);
    }
  }

  disconnectNodes() {
    this.nodes.forEach((node) => {
      node.disconnect();
    });
  }

  reconnectNodes() {
    this.nodes.forEach((node) => {
      this.source?.connect(node);
    });
  }

  initBuffer() {
    this.source = this.audioContext.createBufferSource();
    this.source.buffer = this.buffer;
    this.reconnectNodes();
  }

  play() {
    if (this.buffer) {
      this.initBuffer();

      this.startTime = this.audioContext.currentTime;
      this.source?.start(0, this.getCurrentTime());
      this.playing = true;
      this.paused = false;
    }
  }

  pause() {
    if (this.source) {
      this.source.stop();
      this.source = null;
    }

    this.stopTime += this.audioContext.currentTime - this.startTime;
    this.playing = false;
    this.paused = true;
  }

  stop() {
    if (this.source) {
      if (this.playing) this.source.stop();
      this.source.disconnect();
      this.source = null;
    }

    this.stopTime = 0;
    this.playing = false;
    this.paused = false;
  }

  seek(pos) {
    if (this.playing) {
      this.stop();
      this.updatePosition(pos);
      this.play();
    } else {
      this.updatePosition(pos);
    }
  }

  getCurrentTime() {
    return this.playing
      ? this.stopTime + (this.audioContext.currentTime - this.startTime)
      : this.stopTime;
  }

  getDuration() {
    return this.buffer ? this.buffer.duration : 0;
  }

  getBufferLength() {
    return this.buffer ? this.buffer.length : 0;
  }

  getPosition() {
    return this.getCurrentTime() / this.getDuration() || 0;
  }

  getBufferPosition(time: number) {
    const position = time ? time / this.getDuration() : this.getPosition();
    return ~~(position * (this.buffer?.length as number));
  }

  getAudioSlice(start: number, end: number) {
    const channels = this.buffer?.numberOfChannels as number;
    const length = end - start;
    const output = this.audioContext.createBuffer(channels, length, this.audioContext.sampleRate);

    for (let i = 0; i < channels; i++) {
      const ch = output.getChannelData(i);
      const buffer = this.buffer?.getChannelData(i) as Float32Array;

      for (let j = start; j < end; j++) {
        ch[j - start] = buffer[j];
      }
    }

    return output;
  }

  updatePosition(pos: number) {
    this.stopTime = ~~(pos * (this.buffer?.duration as number));
  }
}
